import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import estilos from '../styles/estilos';

export default function GTA6() {

  return (

    <ScrollView>

      <View style={estilos.container}>

        <View style={estilos.card}>

          <Image
            source={require('../img/gta6.png')}
            style={estilos.imagemJogo}
          />

          <Text style={estilos.texto}>
            GTA 6 é um dos jogos mais aguardados da história.
            O game será lançado pela Rockstar Games e contará
            com gráficos avançados, mundo aberto gigante
            e diversas novidades.
          </Text>

        </View>

      </View>

    </ScrollView>

  );

}