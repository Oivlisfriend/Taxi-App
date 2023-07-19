import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%', 
  },
  box: {
    backgroundColor: '#d1d1d1',
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  content: {
    flex: 1,
    padding: 20,
    // Estilos adicionais para o conteúdo principal
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    height: 200,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationPicker: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    padding: 8,
  },
});
