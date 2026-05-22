import React from 'react';
import { View } from 'react-native';

import Cabecalho from './src/components/Cabecalho';
import Conteudo from './src/components/Conteudo.js';
import Rodape from './src/components/Rodape';

import estilos from './src/style/estilos';

export default function App() {

  return (
    <View style={estilos.container}>

      <Cabecalho />

      <Conteudo />

      <Rodape />

    </View>
  );
}