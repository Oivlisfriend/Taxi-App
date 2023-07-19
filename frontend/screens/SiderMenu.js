import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation } from '@react-navigation/native';

// You can import from local files
import Card from '../components/Card';
import IconCard from '../components/IconCard';

// or any pure javascript modules available in npm

const SiderMenu = function() {
  const navigation= useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} >
        <Text>X</Text>
      </TouchableOpacity>
      <IconCard/>
      <Card />
    </View>
  );
}
export default SiderMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'end',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginBottom:35
    
  },

  btn: {
    width:45,
    height:45,
    borderRadius:'100%',
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#ccc'
  },
});
