import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './stylesheet/estilos';

export default function ItemNoticia(props) {
  return (
    <View style={estilos.card}>

      <View style={{ flex: 1 }}>
        <Text style={estilos.categoria}>
          {props.titulo}
        </Text>

        <Text style={estilos.manchete}>
          {props.manchete}
        </Text>

        <Text style={estilos.data}>
          {props.data}
        </Text>
      </View>

      <Image source={props.imagem} style={estilos.imagem} />

    </View>
  );
}
