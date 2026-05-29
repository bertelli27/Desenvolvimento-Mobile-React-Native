import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import estilos from '../styles/estilos';

export default function Home({ navigation }) {

  return (

    <View style={estilos.container}>

      <Text style={estilos.titulo}>
        Mundo Gamer
      </Text>

      <Text style={estilos.subtitulo}>
        Stack Navigation
      </Text>

      <Image
        source={require('../img/gamer.png')}
        style={estilos.imagemPrincipal}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('GTA6')}
      >

        <Text style={estilos.textoBotao}>
          GTA 6
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Minecraft')}
      >

        <Text style={estilos.textoBotao}>
          Minecraft
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('EAFC26')}
      >

        <Text style={estilos.textoBotao}>
          EA FC 26
        </Text>

      </TouchableOpacity>

    </View>

  );

}