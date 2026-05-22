import React from 'react';

import {
  View,
  Text
} from 'react-native';

import estilos from '../styleSheet/estilos';

export default function Cabecalho() {

  return (

    <View style={estilos.header}>

      <Text style={estilos.titulo}>
        Equipes Fórmula 1 2026
      </Text>

    </View>

  );

}