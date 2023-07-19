import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import axios from 'axios';
import Images from '../assets/image/1.png';
import { AuthContext } from '../contexts/authProvider';
import tw from 'tailwind-react-native-classnames';


export const SetVeiculo = () => {
  const navigation = useNavigation();
  const [veiculos, setVeiculos] = useState([]);
  const {
    preco,
    setPreco,
    showMotorista,
    setShowMotorista,
    distance,
    paxCoordinates,
    driverCoordinates,
    getDriver,
    driver } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      axios.get('http://192.168.18.2:3000/veiculo').then((res) => {
        setVeiculos(res.data);

        calcularDist(res.data);
      }).catch((e) => {
        console.log(e.message);
      })

    })();
  }, []);

  const handleModelPress = (id) => {
    setShowMotorista(!showMotorista);
    getDriver(id);
  };

  const calcularDist = (res) => {
    const obj = [];

    const shuffledArray = shuffle(res);
    const selectedVeiculos = shuffledArray.slice(0, 3);

    selectedVeiculos.forEach(element => {
      const x = element.coordenadas_origem_x;
      const y = element.coordenadas_origem_y;
      const xu = 2105;
      const yu = 1002;

      setPreco(Math.floor(element.preco_base_km * distance * 23) * 10);
      let tipo;
      if (preco <= 1103) {
        tipo = "Econômico";
      } else if (preco <= 2103) {
        tipo = "Conforte";

      } else {
        tipo = "Rápido";
      }
      obj.push({ veiculo: element, tempo: tempo, valor: preco, tipo });
    });
  };

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <View style={styles.container}>

      <ScrollView
        horizontal
        contentContainerStyle={styles.modelblocks}
        showsHorizontalScrollIndicator={false}
      >
        {Array.isArray(veiculos) && veiculos.map((veiculo, index) => (
          <TouchableHighlight
            key={index}
            style={styles.model}
            onPress={() => {
              handleModelPress(veiculo.id_motorista);
            }}
            underlayColor="hotpink"
          >
            <View style={styles.modelOp}>
              <Image style={styles.image} source={Images} />
              <View style={styles.modelOp2}>


                <Text style={styles.modelText}> {preco >= 3300 ? "Rápido" : "Econômico"
                }</Text>
                {/*  <Text style={styles.modelText}>{veiculo.tempo} min</Text>*/}
                <Text style={styles.preco}>{preco},00 Akz</Text>

              </View>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    bottom: 0,
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.025,
    marginBottom: 20
  },
  modelblocks: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelOp: {
    justifyContent: 'space-between',
  },
  modelOp2: {
    marginLeft: -10,

    flexDirection: 'column',
    justifyContent: 'center',
  },
  model: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ececec82',
    justifyContent: 'center',
    marginRight: 10,
    width: 115,
    height: 95,
    borderRadius: 6,
  },
  modelText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666'
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
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
  preco: {
    fontWeight: '500',
  },
  image: {
    marginTop: -20,
    marginBottom: -10,
    marginLeft: -20,
    width: 100,
    height: 80,
    resizeMode: 'contain'
  },
});

export default SetVeiculo;