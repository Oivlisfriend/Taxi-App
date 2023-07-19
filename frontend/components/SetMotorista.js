import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/authProvider';
import { Octicons } from '@expo/vector-icons';
import Images from '../assets/image/22.jpg';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';


export const SetMotorista = () => {
  const {
    driver,
    getUser1,
    user1,
    showMotorista,
    setShowMotorista,
    setOrigin,
    mostra,
    origin,
    distance,
    setDistance,
    destination,
    setDestination,
    localOrigin,
    localDestination,
    usuario,
    preco,
    corrida,
    setCorrida, } = useContext(AuthContext);
  const navigation = useNavigation();
  const [motorista, setMotorista] = useState([]);
  const [utilizador1, setUtilizador1] = useState([]);
  const [utilizador, setUtilizador] = useState([]);
  let cont = 0;
  const startInterval = () => {
    const id = setInterval(async () => {
      if (mostra && cont < mostra.coordinates.length) {
        setOrigin({
          latitude: mostra.coordinates[cont].latitude,
          longitude: mostra.coordinates[cont].longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });

        if (cont === mostra.coordinates.length - 1) {
          clearInterval(id);
          setDestination(null);
          alert("Viagem terminada!");
          setDistance(null);

          const response1 = await axios.get('http://192.168.18.2:3000/cliente/usuario/' + usuario.id_utilizador);
          setUtilizador1(response1.data[0].id_cliente);

          const formData = {
            id_cliente: response1.data[0].id_cliente,
            id_motorista: driver.idMotorista,
            origem: localOrigin,
            destino: localDestination,
            estado: 'finalizada',
            custo_estimado: preco,
            custo_real: preco,
            tempo_real: parseFloat(mostra.duration.toFixed(1)),
            tempo_estimado: parseFloat(mostra.duration.toFixed(1)),
            preco_pago: preco
          }
          const response = await axios.post('http://192.168.18.2:3000/viagem/', formData)
            .then(response => {
              setCorrida(corrida);
              console.log('Viagem realizada com sucesso!');
            })
            .catch(error => {
              console.error('Erro ao realizar cadastro:', response);
            });

          cont++;

        }

      };
      cont++;

    }, 1000);

  };
  const test = (response) => {
    const { data } = response;
    setMotorista(data);
    getUser1(data.id_utilizador);
  };

  const test2 = (response) => {
    const { data } = response;
    setUtilizador(data);
  };

  useEffect(() => {
    (async () => {
      const response1 = await axios.get(
        'http://192.168.18.2:3000/motorista/' + driver.idMotorista
      );
      const motoristaData = response1.data;
      setMotorista(motoristaData);

      const response2 = await axios.get(
        'http://192.168.18.2:3000/utilizador/' + motoristaData.id_utilizador
      );
      const utilizadorData = response2.data;
      setUtilizador(utilizadorData);
    })();

  }, []);

  const handleModelPress = (value) => {
    console.log('Perfil selecionado:', value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.perfil} onPress={() => startInterval()}>
        <View style={styles.perfilInfo}>
          <View style={styles.fotoperfil}>
            <Image style={styles.fotoperfil} source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-jovem-com-oculos-escuros_273609-14360.jpg?w=740&t=st=1688439317~exp=1688439917~hmac=b8110255d638074ba349ed300b91308e236dcb400f35cfaae9685f5d216816cf' }} /></View>
          <View style={styles.nameRating}>
            <Text style={styles.nameperfil}>{utilizador.nome}</Text>

          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.model}>
            <Text style={styles.modelText}>Fiabilidade: <Text style={styles.modelText1} >{motorista.grau_cumprimento_horario}</Text></Text>
            <Text style={styles.modelText}>{motorista.grau_cumprimento_horario}</Text>
          </View>
          <View style={styles.modeloveiculo}>
            <Text style={styles.modelText}>{motorista.disponibilidade}</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '70%',
    zIndex: 1,
    gap: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.025,
    backgroundColor: '#fff',
    marginTop: -37,
    marginBottom: -27
  },
  modelText1: {
    color: '#000',
  },
  perfil: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  perfilInfo: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  model: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  fotoperfil: {
    width: 60,
    height: 60,
    borderRadius: 750,
    backgroundColor: 'gray',
  },
  nameRating: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  nameperfil: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNum: {
    fontWeight: 'bold',
  },
  modeloveiculo: {
    alignItems: 'center',
  },
  modelText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginRight: 2,

  },
  avaliar: {
    alignItems: 'center',
    width: 303,
    height: 44,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'hotpink',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
});

export default SetMotorista;
