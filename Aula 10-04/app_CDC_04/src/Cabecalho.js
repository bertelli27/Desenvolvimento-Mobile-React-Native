import React from 'react';
import { View, Text } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>

      <Text style={estilos.nomePortal}>
        BERTELLI NEWS
      </Text>

      <View style={estilos.botao}>
        <Text style={estilos.textoBotao}>
          VEJA MAIS NO PORTAL
        </Text>
      </View>

      <Text style={estilos.subtitulo}>
        CADASTRE-SE, COMENTE, SAIBA MAIS
      </Text>

    </View>
  );
}
