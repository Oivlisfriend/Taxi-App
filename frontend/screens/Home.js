import { View, Text, Pressable } from 'react-native';
import {useNavigation } from '@react-navigation/native';


const Home= ()=> {
    const navigation= useNavigation();
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Pressable onPress={()=>navigation.navigate('Login')}>
            <Text>GO!</Text>
          </Pressable>    
        </View>
      );
    }

export default Home;