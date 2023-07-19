import { useState } from 'react';
import { Animated, Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';

export default function CadastroForm({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataNascimento, setDataNascimento] = useState(new Date('2012-12-12'));
  const [morada, setMorada] = useState("");

  const handleCadastro = () => {
    const data = new Date(dataNascimento);
    const formData = {
      'nome': nome,
      'email': email,
      'password': password,
      'data_nascimento': data,
      'morada': morada,
    }
    axios.post('http://192.168.0.142:3000/cliente/', formData)
      .then(response => {
        console.log('Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Erro ao realizar cadastro:', formData);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(text) => setNome(text)}

        />
      </View>
      <View>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setEmail(text)}

        />
      </View>
      <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.label}>Morada</Text>
        <TextInput
          style={styles.input}
          placeholder="Luanda/Kilamba/bloco A"
          onChangeText={(text) => setMorada(text)}
        />
      </View>
      <View>
        <Text style={styles.label}>Data de Nascimento:</Text>

        <DatePicker
          style={styles.inputDate}
          date={dataNascimento}
          mode="date"
          useNativeDriver="false"
          placeholder="Selecione uma data"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2023-12-31"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              display: 'none',
            },
            dateInput: {
              borderWidth: 'none',
              alignItems: 'end',
              paddingLeft: 20
            },

          }}
          onDateChange={date => {
            setDataNascimento(date);
          }}
        />

      </View>
      <TouchableOpacity style={styles.registrar} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
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
    marginBottom: 50,
    textAlign: 'center',
  },
  registrar: {
    alignItems: 'center',
    width: 303,
    height: 44,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 50,
    marginBottom: 5,
    backgroundColor: 'hotpink',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
  input: {
    width: 303,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: '#D5DDE0',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#F7F8F9',
  },
  inputDate: {
    width: 303,
    height: 44,
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#D5DDE0',
    borderWidth: 1,
    backgroundColor: '#F7F8F9',

  },
};

