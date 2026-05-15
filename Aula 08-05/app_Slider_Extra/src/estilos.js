import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },

  cabecalho: {
    backgroundColor: "#06402B",
    padding: 20,
    alignItems: "center"
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  label: {
    marginTop: 10,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  picker: {
    marginBottom: 20
  },

  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 15,
    borderRadius: 10
  },

  botao: {
    backgroundColor: "#06402B",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center"
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold"
  },

  resultado: {
    fontSize: 18,
    marginBottom: 10
  }
});