import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import estilos from '../style/estilos';

export default function Cabecalho() {

  return (
    <View style={estilos.cabecalho}>

      <Text style={estilos.titulo}>
        SECTIONLIST
      </Text>

      <Image
        source={require('../assets/checklist.png')}
        style={estilos.imagem}
      />

      <Text style={estilos.subtitulo}>
        Lista de Tarefas
      </Text>

    </View>
  );
}