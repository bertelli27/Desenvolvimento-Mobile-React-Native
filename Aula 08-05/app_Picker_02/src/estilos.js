import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  header: {
    backgroundColor: '#253D2C',
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F1D3',
    padding: 20
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },

  label: {
    fontSize: 20,
    marginBottom: 10
  },

  picker: {
    backgroundColor: '#fff',
    marginBottom: 20
  },

  imagem: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 20
  },

  inputObs: {
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#6BBF59',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },

  resultado: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 18
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#eee'
  }

});

export default estilos;