import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Cabecalho(props) {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.tituloCabecalho}>FUNDAMENTOS II</Text>

      <Image 
        source={props.imagem} // 🔥 AGORA É DINÂMICO
        style={estilos.logo} 
      />

      <Text style={estilos.subtituloCabecalho}>DSV MOBILE</Text>
    </View>
  );
}
