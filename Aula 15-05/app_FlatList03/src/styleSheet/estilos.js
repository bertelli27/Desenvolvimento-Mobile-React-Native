import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  header: {
    backgroundColor: '#06402B',
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  },

  lista: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  imagem: {
    width: 120,
    height: 80,
    marginRight: 15
  },

  areaTexto: {
    flex: 1
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#06402B',
    marginBottom: 8
  },

  info: {
    fontSize: 15,
    marginBottom: 4
  }

});

export default estilos;