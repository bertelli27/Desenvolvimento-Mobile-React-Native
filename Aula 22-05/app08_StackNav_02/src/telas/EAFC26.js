import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import estilos from '../styles/estilos';

export default function EAFC26() {

  return (

    <ScrollView>

      <View style={estilos.container}>

        <View style={estilos.card}>

          <Image
            source={require('../img/eafc26.png')}
            style={estilos.imagemJogo}
          />

          <Text style={estilos.texto}>
            EA FC 26 é o novo jogo de futebol da EA Sports.
            O game possui gráficos realistas, novos modos
            de jogo, times licenciados e melhorias na jogabilidade.
          </Text>

        </View>

      </View>

    </ScrollView>

  );

}