import React from 'react';

import { View } from 'react-native';

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';

export default function App() {

  return (

    <View style={{ flex: 1 }}>

      <Cabecalho />
      <Conteudo />

    </View>

  );

}