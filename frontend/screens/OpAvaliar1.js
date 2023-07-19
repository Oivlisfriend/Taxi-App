import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const OpAvaliar1 = () => {
  const navigation = useNavigation();

  const handleOpAvaliar1 = () => {
    navigation.navigate('');
  };

  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelPress = (model) => {
    setSelectedModel(model);
  };

  const getModelStyle = (model) => {
    if (model === selectedModel) {
      return [styles.model, styles.modelSelected, styles.modelStyleSelected];
    }
    return styles.model;
  };

  const getModelTextStyle = (model) => {
    if (model === selectedModel) {
      return [styles.modelText, styles.modelTextStyleSelected];
    }
    return styles.modelText;
  };

  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <View style={styles.perfilInfo}>
          <View style={styles.fotoperfil}></View>
          <View style={styles.nameRating}>
            <Text style={styles.nameperfil}>Andre</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.modelblocks}>
          <TouchableHighlight
            style={getModelStyle('0%')}
            onPress={() => handleModelPress('0%')}
            underlayColor="hotpink"
          >
            <Text style={getModelTextStyle('0%')}>0%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={getModelStyle('25%')}
            onPress={() => handleModelPress('25%')}
            underlayColor="hotpink"
          >
            <Text style={getModelTextStyle('25%')}>25%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={getModelStyle('50%')}
            onPress={() => handleModelPress('50%')}
            underlayColor="hotpink"
          >
            <Text style={getModelTextStyle('50%')}>50%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={getModelStyle('75%')}
            onPress={() => handleModelPress('75%')}
            underlayColor="hotpink"
          >
            <Text style={getModelTextStyle('75%')}>75%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={getModelStyle('100%')}
            onPress={() => handleModelPress('100%')}
            underlayColor="hotpink"
          >
            <Text style={getModelTextStyle('100%')}>100%</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Mensagem...' />
      </View>
      <TouchableOpacity style={styles.avaliar}>
        <Text style={styles.buttonText}>Avaliar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '60%',
    bottom: 0,
    position: 'absolute',
    zIndex: 1,
    gap: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.025,
    backgroundColor: '#fff',
  },
  input: {
    width: 303,
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: '#D5DDE0',
    borderWidth: 1,
    backgroundColor: '#F7F8F9',
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  perfilInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modelblocks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 303,
  },
  model: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#001',
    shadowOpacity: 0.1,
  },
  modelSelected: {
    backgroundColor: 'hotpink',
  },
  modelTextStyleSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fotoperfil: {
    width: 80,
    height: 80,
    borderRadius: 750,
    backgroundColor: 'gray',
  },
  nameRating: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  nameperfil: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modelText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginRight: 2,
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
});

export default OpAvaliar1;
