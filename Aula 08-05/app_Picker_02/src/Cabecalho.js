import React from 'react';

import {
  View,
  Text
} from 'react-native';

import estilos from './estilos';

export default function Cabecalho() {

  return (

    <View style={estilos.header}>

      <Text style={estilos.titulo}>
        🐾 Mundo Pet
      </Text>

    </View>

  );

}