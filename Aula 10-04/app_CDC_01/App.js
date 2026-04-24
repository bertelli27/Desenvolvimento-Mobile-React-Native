import React from 'react';
import { View } from 'react-native';
import estilos from './src/stylesheet/estilos';

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

export default function App() {
  return (
    <View style={estilos.fundo}>

      <Cabecalho imagem={require('./img/logo2.png')} />

      <Conteudo />

      <Rodape nome="Bruno Rabelo" data="10/04/2026" />

    </View>
  );
}
