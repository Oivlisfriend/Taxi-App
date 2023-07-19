import api from '../libs/api';
import { useNavigation } from '@react-navigation/native';

const viagemService = { 
  setPaxCoordinates: (latitude, longitude) => {
    console.log('oh')
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

export default viagemService;
   