import React from 'react';
import { View } from 'react-native';
import estilos from './src/stylesheet/estilos';

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

export default function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
