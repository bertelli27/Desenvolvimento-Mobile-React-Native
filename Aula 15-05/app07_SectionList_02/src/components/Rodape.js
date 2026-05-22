import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import estilos from '../style/estilos';

export default function Rodape() {

  return (
    <View style={estilos.rodape}>

      <Image
        source={require('../assets/checklist.png')}
        style={estilos.logoRodape}
      />

      <Text style={estilos.textoRodape}>
        Bruno Bertelli
      </Text>

      <Text style={estilos.textoRodape}>
        21/05/2026
      </Text>

    </View>
  );
}