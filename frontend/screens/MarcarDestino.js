import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MarcarDestino = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.text}>
          <View >
            <Text style={styles.label}>Origem:</Text>
            <TextInput
              style={styles.input}
              placeholder="X , Y"
            />
          </View>
          <View >
            <Text style={styles.label}>Destino:</Text>
            <TextInput
              style={styles.input}
              placeholder="X , Y"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.avaliar} onPress={() => navigation.navigate('SetVeiculo')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    bottom: 0,
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.025,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    width: 303,
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: '#D5DDE0',
    borderWidth: 1,
    backgroundColor: '#F7F8F9',
  },
  avaliar: {
    alignItems: 'center',
    width: 303,
    height: 44,
    marginTop: 10,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
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

export default MarcarDestino;
