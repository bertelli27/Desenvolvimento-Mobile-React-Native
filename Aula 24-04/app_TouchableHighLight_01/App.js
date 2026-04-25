import React from 'react';
import { View } from 'react-native';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';
import estilos from './src/stylesheet/estilos';

export default function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
