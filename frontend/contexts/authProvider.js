import React, { createContext, useState } from 'react';
import authService from './auth';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [usuario, setUsuario] = useState({});
  const [user1, setUser1] = useState({});
  const [paxCoordinates, setPaxCoordinates] = useState(null);
  const [driverCoordinates, setDriverCoordinates] = useState(null);
  const [driver, setDriver] = useState(null);
  const [corrida, setCorrida] = useState(true);
  const [localOrigin, setLocalOrigin] = useState(null);
  const [localDestination, setLocalDestination] = useState(null);
  const [carrosProximos, setCarrosProximos] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [showMotorista, setShowMotorista] = useState(true);
  const [mostra, setMostra] = useState(null);
  const [preco, setPreco] = useState(null);

  const signIn = async (email, password) => {
    try {
      await authService.signIn(email, password);
      setUser({
        email: email,
      });
    } catch (error) {
      setUser({
        message: error.message,
      });
    }
  };

  const signUp = async (name, email, password) => {
    try {
      await authService.signUp(name, email, password);
      setUser({
        name: name,
        email: email,
      });
    } catch (error) {
      setUser({
        message: error.message,
      });
    }
  };

  const getPaxCoordinates = (latitude, longitude) => {
    setPaxCoordinates({ latitude: latitude, longitude: longitude })
  }
  const getDriver = (id) => {
    setDriver({ idMotorista: id })
  }

  const getUser1 = (id) => {
    setUser1({ idUser: id })
  }

  const getDriverCoordinates = (latitude, longitude) => {
    setDriverCoordinates({ latitude: latitude, longitude: longitude })
  }


  return (
    <AuthContext.Provider
      value={{
        preco,
        setPreco,
        mostra,
        setMostra,
        showMotorista,
        setShowMotorista,
        distance,
        setDistance,
        destination,
        setDestination,
        origin,
        setOrigin,
        carrosProximos,
        setCarrosProximos,
        localOrigin,
        setLocalOrigin,
        localDestination,
        setLocalDestination,
        name: 'user',
        corrida,
        setCorrida,
        signIn,
        signUp,
        user,
        getPaxCoordinates,
        getDriverCoordinates,
        paxCoordinates,
        driverCoordinates,
        getDriver,
        driver,
        user1,
        getUser1,
        usuario,
        setUsuario
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
