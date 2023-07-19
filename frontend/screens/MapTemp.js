import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync, 
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import geolib from 'geolib';

const physicalStops = [
  { latitude: -8.971559496438807, longitude: 13.216572515666485 },
  { latitude: -8.969277035882246, longitude: 13.218140266835688 },
  { latitude: 37.7896386, longitude: -122.421646 },
  { latitude: 37.787929, longitude: -122.407458 },
  { latitude: 37.783951, longitude: -122.411947 },
  // Adicione mais paragens físicas conforme necessário
];

export default function MapTemp() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [displayedStops, setDisplayedStops] = useState([]);

  const [marker, setMarker] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const handleMapPress = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarker({ latitude, longitude });
    setRouteCoordinates([
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      { latitude, longitude },
    ]);
  };

  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      response => {
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);

  const [flag, setFlag] = useState(0);
  useEffect(() => {
    const checkStopsInRadius = () => {
      if (currentLocation) {
        const stopsInRadius = physicalStops.filter(stop =>
          geolib.isPointInCircle(
            { latitude: stop.latitude, longitude: stop.longitude },
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            1000 // Raio de 1000 metros (ajuste conforme necessário)
          )
        );
        setDisplayedStops(stopsInRadius);
        setFlag(stopsInRadius.length);
      }
    };

    checkStopsInRadius();
  }, [marker]);

  const handleLocationUpdate = location => {
    setCurrentLocation(location.coords);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onPress={handleMapPress}
      >
        {Location.LocationGeofencingEventType && (
          <Marker
            coordinate={{
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
            }}
            title="Minha localização"
          />
        )}

        {/* Paragens */}
        {displayedStops.map((stop, index) => (
          <Marker
            key={index}
            coordinate={stop}
            title={`Paragem ${index + 1}`}
            pinColor="blue"
          />
        ))}

        {marker && (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title="Destino"
            pinColor="black"
          />
        )}

        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={3}
            strokeColor="#000"
          />
        )}
      </MapView>
      
    </View>
  );
}
