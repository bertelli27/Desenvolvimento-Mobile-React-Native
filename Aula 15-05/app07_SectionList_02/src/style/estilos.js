import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 20
  },

  cabecalho: {
    alignItems: 'center',
    marginBottom: 20
  },

  titulo: {
    color: '#06402B',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  },

  imagem: {
    width: 90,
    height: 90
  },

  subtitulo: {
    color: '#06402B',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  conteudo: {
    flex: 1
  },

  input: {
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderColor: '#06402B',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },

  botao: {
    backgroundColor: '#06402B',
    padding: 12,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  dataBox: {
    backgroundColor: '#D7E7E0',
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },

  dataTexto: {
    color: '#06402B',
    fontWeight: 'bold',
    fontSize: 16
  },

  item: {
    backgroundColor: '#F9F9F9',
    padding: 18,
    borderRadius: 8,
    marginTop: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#06402B'
  },

  textoItem: {
    fontSize: 16,
    color: '#333333'
  },

  rodape: {
    backgroundColor: '#D7E7E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 8
  },

  logoRodape: {
    width: 45,
    height: 45,
    borderRadius: 50
  },

  textoRodape: {
    color: '#06402B',
    fontSize: 14,
    fontWeight: 'bold'
  }

});