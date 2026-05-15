import React from "react";
import { View } from "react-native";
import Cabecalho from "./src/Cabecalho";
import Conteudo from "./src/Conteudo";
import estilos from "./src/estilos";

export default function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}