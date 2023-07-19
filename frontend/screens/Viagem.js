import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export const Viagem = () => {

  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <View style={styles.perfilInfo}>
          <View style={styles.fotoperfil}></View>
          <View style={styles.nameRating}>
            <Text style={styles.nameperfil}>Andre</Text>
            <View style={styles.ratingContainer}>
              <Octicons name="star-fill" size={14} color="orange" />
              <Text style={styles.ratingNum}>4.8</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.model}>
            <Text style={styles.modelText}>U000RA</Text>
            <Text style={styles.modelText}>35</Text>
          </View>
          <View style={styles.modeloveiculo}>
            <Text style={styles.modelText}>Volkswagen Jetta</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.avaliar}>
        <Text style={styles.buttonText}>Confirmar</Text>
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
    height: '45%',
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
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  perfilInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  model: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#c1c1c3',
    borderRadius: 15,

  },
  fotoperfil: {
    width: 80,
    height: 80,
    borderRadius: 750,
    backgroundColor: 'gray',
  },
  nameRating: {
    marginTop: 10,
    flexDirection: 'column',
  },
  nameperfil: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNum: {
    fontWeight: 'bold',
  },
  modeloveiculo: {
    alignItems: 'flex-end',
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
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 303,
    fontWeight: 'bold',
  },
});

export default Viagem;
