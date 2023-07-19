import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconCard = function () {
  return (
     <View style={styles.container}>
     <View>
        <Text style={styles.name}>
          Énio   
        </Text>
     </View>
       <View style={styles.pagamento}>
       <View >
          <Text>
              Metodo de pagamento
          </Text>
          <Text style={styles.pagamentoNumerario}>
            Numerário
          </Text>
       </View>
          <Ionicons style={styles.money}  name="card-outline" size={30} color="#444" />
      </View>
       <View style={styles.menu}>
    <View style={styles.icone}>
     <Ionicons name="shield-outline" size={30} color="#444" />
     <Text style={styles.text} >
        Segurança
    </Text>
    </View>
    <View style={styles.icone}>
     <Ionicons name="help-circle-outline" size={30} color="#444" />
     <Text style={styles.text}>
        Suporte
     </Text>
    </View>
    <View style={styles.icone}>
     <Ionicons name="cog" size={30} color="#444" />
     <Text style={styles.text}>
        Definições
     </Text>
    </View>
      </View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%',
    marginBottom:'25%',
    marginTop:'25%',
    height:125,
    borderRadius:10,
  },
  icone:{
      textAlign: 'center',
      alignItems: 'center',

  },
  pagamento:{
    flexDirection:'row',
    width:'100%',
    justifyContent: 'space-around',
    marginTop:'10%',
    borderTopWidth:1,
    height:40,
    alignItems:'center',
    borderColor:'#EEEEEE',
    
  },
  menu:{
    borderTopWidth:15,
    borderBottomWidth:15,
    borderColor:'#EEEEEE',
    justifyContent:'space-around',
    alignItems:'center',
    height:100,
    paddingLeft:10,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,
    width:'100%',
    marginTop:'3%',
    flexDirection:'row',
  },
  pagamentoNumerario:{
    fontSize:11
  },
  name:{
    fontSize:28,
    fontWeight:'500'
  },
  text:{
    
  }
});
export default IconCard;
