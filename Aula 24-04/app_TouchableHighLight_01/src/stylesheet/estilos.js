import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  fundo: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#eee'
  },

  cabecalho: {
    backgroundColor: '#016d55',
    alignItems: 'center',
    padding: 20
  },

  logo: {
    width: 120,
    height: 60,
    marginBottom: 10
  },

  titulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  tituloConteudo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  texto: {
    textAlign: 'center',
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#016d55',
    padding: 15,
    borderRadius: 20,
    marginTop: 10
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  },

  rodape: {
    backgroundColor: '#016d55',
    padding: 15,
    alignItems: 'center'
  },

  textoRodape: {
    color: 'white'
  }

});
