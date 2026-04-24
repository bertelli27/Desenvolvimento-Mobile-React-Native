import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 30,
    paddingHorizontal: 15,
  },

  cabecalho: {
    backgroundColor: 'darkgreen',
    borderRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloCabecalho: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 10,
  },
  subtituloCabecalho: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  areaRolagem: {
    flex: 1,
  },
  cardPais: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  textoPais: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  rodape: {
    backgroundColor: 'darkgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
  },
  textoRodape: {
    color: 'white',
    fontWeight: 'bold',
  }
});