import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  header: {
    backgroundColor: '#06402B',
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    padding: 20
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  picker: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10
  },

  imagem: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20
  },

  nota: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  inputComentario: {
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#06402B',
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
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30
  }

});

export default estilos;