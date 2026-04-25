import React from 'react';
import { View, Text } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.textoRodape}>
        Bruno Bertelli - 24/04/2026
      </Text>
    </View>
  );
}
