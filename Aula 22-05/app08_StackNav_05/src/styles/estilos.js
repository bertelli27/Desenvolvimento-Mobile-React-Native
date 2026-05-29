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
    color: '#06402B',
    marginTop: 20
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },

  imagemPrincipal: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#06402B',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginTop: 15
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },

  scroll: {
    flex: 1,
    backgroundColor: '#fff'
  },

  conteudo: {
    padding: 20
  },

  imagemSelecao: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20
  },

  tituloTela: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#06402B',
    marginBottom: 20,
    textAlign: 'center'
  },

  topico: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#06402B',
    marginTop: 20,
    marginBottom: 10
  },

  texto: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 28
  }

});

export default estilos;