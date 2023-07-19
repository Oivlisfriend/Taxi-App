import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import image from '../assets/new.png';
export default function GetStartedScreen({ navigation }) {
  const handleLogin = () => {
    
    navigation.navigate('Login');
  };
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text style={styles.title}>Hoje aonde?</Text>
      <Text style={styles.description}>
        Ative o compartilhamento de localização para que seu motorista possa ver onde você está
      </Text>
      <View>
        <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCriar} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#888',
  },
  buttonEntrar: {
    alignItems: 'center',
    backgroundColor: 'hotpink',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 50,
    marginBottom: 5,
    fontWeight: 'bold',
    width: 303,
    height: 44,
  },
  buttonCriar: {
    alignItems: 'center',
    backgroundColor: 'hotpink',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontWeight: 'bold',
    marginTop: 10,
    width: 303,
    height: 44,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
  },
  circle: {
    marginTop: 100,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'grey',
  },
});
