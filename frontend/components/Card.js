import { Text, View, StyleSheet,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Card= function() {
  return (
     <View style={styles.container}>
      <Pressable style={styles.menu}>
      <View style={styles.menu}>
      <View style={styles.textDecontos}>
        <Text >
            Descontos
        </Text>
        <Text style={styles.textDecontosI}>
            Introduzir código promocional
        </Text>
        </View>
        <Text style={styles.setaDesconta} >
            <Ionicons name="chevron-forward-outline" size={24} color="black"/>
        </Text>    
      </View>
      </Pressable>
      <Pressable style={styles.menu}>
       <View  style={styles.menu}>
        <Text style={styles.text}>
          Locais guardados
        </Text>
        <Text style={styles.seta} >
            <Ionicons name="chevron-forward-outline" size={24} color="black"/>
        </Text>    
      </View>
      </Pressable>
          <View style={styles.menu}>
        <Text style={styles.text}>
          Histórico de pedidos
        </Text>
        <Text style={styles.seta} >
        <Ionicons name="chevron-forward-outline" size={24} color="black"/>

        </Text>    
      </View>
          <View style={styles.menu}>
        <Text style={styles.text}>
          Tornar-te motorista
        </Text>
        <Text style={styles.seta} >
            <Ionicons name="chevron-forward-outline" size={24} color="black"/>
        </Text>    
      </View>
      <View style={styles.menu}>
        <Text style={styles.text} >
          Info
        </Text>
        <Text style={styles.seta} >
           <Ionicons name="chevron-forward-outline" size={24} color="black"/>
        </Text>    
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%',
  },
  text: {
    width: '100%',
    marginLeft:'55%',
  },
  textDecontos: {
    width: '100%',
    marginLeft:'45%',
  },
  textDecontosI: {
    width: '100%',
    fontSize:10,
    color:'#888'
  },
  seta:{
    textAlign: 'right',
    fontWeight:'900', 
    width:'100%',
    marginRight:'55%',

  },
  setaDesconta:{
    textAlign: 'right',
    fontWeight:'900', 
    width:'100%',
    marginRight:'25%',
    
  },
  menu:{
    justifyContent:'space-around',
    alignItems:'center',
    height:70,
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#EEEEEE',
    flexDirection:'row',
  }
});

export default Card;
