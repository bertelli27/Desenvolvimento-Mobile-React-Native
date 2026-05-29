import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import estilos from '../styles/estilos';

export default function Minecraft() {

  return (

    <ScrollView>

      <View style={estilos.container}>

        <View style={estilos.card}>

          <Image
            source={require('../img/minecraft.png')}
            style={estilos.imagemJogo}
          />

          <Text style={estilos.texto}>
            Minecraft é um jogo de sobrevivência e construção
            extremamente popular. Os jogadores podem explorar,
            construir casas, criar itens e sobreviver em um
            mundo totalmente em blocos.
          </Text>

        </View>

      </View>

    </ScrollView>

  );

}