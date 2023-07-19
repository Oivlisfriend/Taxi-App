import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { useState, useEffect, useRef, useContext } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import config from '../config';
import tw from 'tailwind-react-native-classnames';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Menu } from '.././components/Menu';
import { MenuCarros } from '.././components/MenuCarros';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/authProvider';
const Maps = function () {
    const {
        mostra,
        setMostra,
        distance,
        setDistance,
        destination,
        setDestination,
        origin,
        setOrigin,
        carrosProximos,
        setCarrosProximos,
        corrida,
        setCorrida,
        localOrigin,
        setLocalOrigin,
        localDestination,
        setLocalDestination,
        preco,
        driver } = useContext(AuthContext);
    const navigation = useNavigation();
    const mapEl = useRef(null);

    const [price, setPrice] = useState(null);
    // startInterval()
    const [showsUserLocation, setShowsUserLocation] = useState(true);
    const [hora, setHora] = useState(null);
    const [minuto, setMinuto] = useState(null);
    const now = new Date();
    const minutesToAdd = 30; // Quantidade de minutos a serem adicionados
    now.setMinutes(now.getMinutes() + minutesToAdd);
    const hours = now.getHours();
    const minutes = now.getMinutes();



    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    throw new Error('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                });

                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${config.googleAPI}`
                );
                const data = await response.json();
                const results = data.results;
                if (results.length > 0) {
                    setLocalOrigin(results[0].address_components[1].long_name);
                } else {
                    console.log('Nenhuma localidade encontrada.');
                }
                if (mostra) {
                    now.setMinutes(now.getMinutes() + mostra.duration.toFixed(1));
                    setMinuto(now.getMinutes());
                    setHora(now.getHour());
                }
            }
            catch (error) {
                console.error('Erro ao obter localidade:', error);

            }

        })();
    }, []);


    return (
        <View style={styles.container}>

            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={origin}
                ref={mapEl}
            >
                <Marker
                    title="Minha localização"

                    coordinate={origin}
                    style={{ width: 150, height: 150 }}
                >
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2020/04/24/00/38/face-5084530_640.jpg' }}
                        style={{ borderRadius: '100%', width: 50, height: 50 }}
                    />
                </Marker>
                {origin !== destination && <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={config.googleAPI}
                    strokeColor="hotpink"
                    strokeWidth={3}
                    onReady={result => {
                        setMostra(result);

                        setDistance(result.distance);
                        setPrice(result.distance * 3);
                        mapEl.current.fitToCoordinates(
                            result.coordinates, {
                            edgePadding: {
                                top: 70,
                                bottom: 70,
                                left: 70,
                                right: 70
                            }
                        }

                        );

                    }}
                />}
                <View style={styles.autocompleteContainer}>

                    {origin && !corrida && <GooglePlacesAutocomplete
                        placeholder='Hoje é aonde?'
                        onPress={(data, details = null) => {
                            setLocalDestination(details.name);
                            setDestination({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.000922,
                                longitudeDelta: 0.000421,
                            });
                        }}
                        listViewDisplayed='auto'
                        query={{
                            key: config.googleAPI,
                            language: 'pt-br',
                            location: `${origin.latitude},${origin.longitude}`,
                            radius: 5000,
                        }}
                        fetchDetails={true}
                        styles={{
                            container: {
                                width: '100%',
                                backgroundColor: '#eeeee',

                            },
                            listView: { height: 100, },
                            description: { fontWeight: 'bold' },
                        }}
                    />

                    }

                </View>

            </MapView >

            {corrida ?
                <View style={{
                    width: '100%',
                    height: '60%',
                    marginTop: '13%',
                    bottom: '10%',
                    backgroundColor: '#fff',
                    borderRadius: 34
                }}>{carrosProximos ?
                    <MenuCarros /> : <Menu />
                    }
                </View>
                :
                distance !== null &&
                <View>
                    <View style={{
                        backgroundColor: '#fff',
                        bottom: '13%',
                        borderRadius: 34,
                        width: 34,
                        height: 34,
                        marginLeft: '3%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ionicons name="arrow-back" size={24} color="black" onPress={() => { setCorrida(true) }} />
                    </View>
                    <View style={{
                        width: '90%',
                        height: '60%',
                        backgroundColor: '#fff',
                        bottom: '10%',
                        borderRadius: 34
                    }}>


                        <Text style={tw`font-bold text-2xl ml-4 mt-6`}>A tua viagem</Text>
                        <View style={tw`flex-row ml-2 mt-6 mb-4 items-center`}>
                            <View style={[tw`ml-1  items-center rounded-lg`, { backgroundColor: 'hotpink', width: 40, height: 40, padding: 10 }]}>
                                <Ionicons name='pin-outline' size={25} color={'#fff'} />
                            </View>
                            <View style={tw`ml-3 w-full`}>
                                <Text style={tw`text-gray-400 text-xs`}>Local de recolha</Text>
                                <Text style={tw`text-base`}>
                                    {localOrigin}
                                </Text>

                            </View>

                        </View>
                        <View style={[tw`border-b-2 mb-3  ml-16 `, { marginTop: -12, color: 'black', borderColor: 'hotpink' }]}>

                        </View>

                        <View style={tw`flex-row ml-2 mt-2 mb-3 items-center`}>
                            <View>
                                <Ionicons style={[tw`border-b-2  ml-4 w-full`]} name='flag' size={22} color={'#111'} />
                            </View>

                            <View style={tw`ml-3 w-3/5`}>

                                <Text style={tw`text-gray-400 text-xs`}>~{mostra.duration.toFixed(1)} min · chega às {hours}:{minutes} </Text>
                                <Text style={tw`text-base`}>
                                    {localDestination}
                                </Text>
                            </View>
                            <View style={tw`bg-gray-200 rounded-3xl p-3 `}>
                                <Text>Paragem</Text>
                            </View>
                        </View>

                        <View style={tw`items-center mt-6 `}>
                            <TouchableOpacity onPress={() => { setCarrosProximos(!carrosProximos); setCorrida(!corrida) }} style={[tw`rounded-xl  text-center p-3  w-3/5`, { backgroundColor: 'hotpink' }]}>
                                <Text style={tw`font-medium text-center text-lg text-gray-50`}>Pedir uma corrida</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            }



        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    autocompleteContainer: {
        position: 'absolute',
        top: '45%',
        width: '100%',
    },
    map: {

        width: '100%',
        height: '100%',
    },
});

export default Maps;