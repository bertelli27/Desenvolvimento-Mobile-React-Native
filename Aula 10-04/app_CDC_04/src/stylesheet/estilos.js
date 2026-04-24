import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 30
  },

  cabecalho: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10
  },

  nomePortal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#06402B'
  },

  botao: {
    backgroundColor: '#06402B',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  subtitulo: {
    marginTop: 10,
    color: 'gray'
  },

  conteudo: {
    padding: 10
  },

  leiaMais: {
    fontSize: 22,
    fontWeight: 'bold',
    borderLeftWidth: 4,
    borderLeftColor: '#06402B',
    paddingLeft: 10,
    marginBottom: 10
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 10
  },

  categoria: {
    color: '#06402B',
    fontWeight: 'bold',
    marginBottom: 5
  },

  manchete: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  data: {
    fontSize: 12,
    color: 'gray'
  },

  imagem: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 5
  },

  rodape: {
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc'
  },

  textoRodape: {
    color: 'gray',
    marginBottom: 10
  },

  icones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150
  },

  icone: {
    width: 30,
    height: 30
  }

});
