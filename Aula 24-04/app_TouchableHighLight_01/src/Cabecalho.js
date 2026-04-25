import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Image
        source={require('../img/logo.png')}
        style={estilos.logo}
      />
      <Text style={estilos.titulo}>DSV - MOBILE</Text>
    </View>
  );
}
