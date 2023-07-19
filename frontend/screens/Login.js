import { Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { AuthContext } from '../contexts/authProvider';

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, usuario, setUsuario } = useContext(AuthContext);

  const handleLogin = () => {
    (async () => {
      console.log("Enviando" + email);
      const response = await axios.post('http://192.168.18.2:3000/utilizador/login/', { email })
        .then(response => {
          if (response.data.password === password) {
            setUsuario(response.data);
            console.log('Login realizado com sucesso!');
            navigation.navigate('Maps');
          } else {
            alert('Senha ou email errado');
          }
        })
        .catch(error => {
          console.error('Erro ao realizar cadastro:', response);
        });
    })();

    // signIn(email, password); 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        disabled={email === '' && password === ''}
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: 303,
    height: 44,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: '#D5DDE0',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#F7F8F9',
  },
  button: {
    alignItems: 'center',
    width: 303,
    height: 44,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 100,
    marginBottom: 5,
    backgroundColor: 'hotpink',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
});
