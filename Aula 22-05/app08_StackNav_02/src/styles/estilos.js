import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#06402B'
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 20
  },

  imagemPrincipal: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginVertical: 20
  },

  botao: {
    backgroundColor: '#06402B',
    width: 220,
    padding: 12,
    borderRadius: 10,
    marginVertical: 8
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center'
  },

  imagemJogo: {
    width: 280,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20
  },

  texto: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#333'
  }

});

export default estilos;