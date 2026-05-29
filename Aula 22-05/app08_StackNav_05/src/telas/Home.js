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
        Copa do Mundo
      </Text>

      <Text style={estilos.subtitulo}>
        Curiosidades das maiores seleções do futebol mundial
      </Text>

      <Image
        source={require('../img/futebol.png')}
        style={estilos.imagemPrincipal}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Brasil')}
      >

        <Text style={estilos.textoBotao}>
          Seleção Brasileira
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Argentina')}
      >

        <Text style={estilos.textoBotao}>
          Seleção Argentina
        </Text>

      </TouchableOpacity>

    </View>

  );

}