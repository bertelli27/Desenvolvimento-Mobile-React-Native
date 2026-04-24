import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Item(props) {
  return (
    <View style={[estilos.cardPais, { backgroundColor: props.corFundo }]}>

      <Image 
        source={props.bandeira} 
        style={{ width: 50, height: 30, marginBottom: 5 }} 
      />

      <Text style={[estilos.textoPais, { color: props.corTexto }]}>
        {props.nome}
      </Text>

      <Text style={{ color: props.corTexto }}>
        Habitantes: {props.habitantes}
      </Text>

      <Text style={{ color: props.corTexto }}>
        PIB: {props.pib}
      </Text>

    </View>
  );
}
