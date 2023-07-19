import api from '../libs/api';
import { useNavigation } from '@react-navigation/native';

const authService = {
  signIn: async (email, password) => {
    const navigation = useNavigation();
    alert('oioi');
    alert(password)
    if (email !== '') {
      try {  
        const data = {
          email: email, 
        };
        const response = await api.post('utilizador/login', data);
        console.log(response);  
        alert("Okay");
        navigation.navigate('Home');     
      } catch (err) {
        console.log(err.message);
        throw new Error('Email ou Senha errados!');
      }
    }
  },

  signUp: async (name, email, password) => {
    const navigation = useNavigation();

    if (name !== '' && email !== '' && password !== '') {
      try {
        const data = {
          name: name,
          email: email,
          password: password,
        };
        const response = await api.post('/Users', data);
        console.log(data);

        if (response.data.exito === true) navigation.navigate('Home');
      } catch (err) {
        console.log(err.message);
        throw new Error('Conta Inválida!');
      }
    }
  },
};

export default authService;
   