import React from 'react';
import { View, Text } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Rodape(props) {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.textoRodape}>{props.nome}</Text>
      <Text style={estilos.textoRodape}>{props.data}</Text>
    </View>
  );
}
