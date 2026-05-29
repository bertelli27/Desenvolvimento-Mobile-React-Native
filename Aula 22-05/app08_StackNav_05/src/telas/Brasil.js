import React from 'react';

import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

import estilos from '../styles/estilos';

export default function Brasil() {

  return (

    <ScrollView style={estilos.scroll}>

      <View style={estilos.conteudo}>

        <Image
          source={require('../img/brasil.png')}
          style={estilos.imagemSelecao}
        />

        <Text style={estilos.tituloTela}>
          Seleção Brasileira
        </Text>

        <Text style={estilos.topico}>
          Títulos
        </Text>

        <Text style={estilos.texto}>
          O Brasil é a maior seleção da história da Copa do Mundo,
          com 5 títulos mundiais conquistados em 1958, 1962,
          1970, 1994 e 2002.
        </Text>

        <Text style={estilos.topico}>
          Curiosidades
        </Text>

        <Text style={estilos.texto}>
          O Brasil é a única seleção que participou de todas
          as edições da Copa do Mundo.
        </Text>

        <Text style={estilos.topico}>
          Maiores Jogadores
        </Text>

        <Text style={estilos.texto}>
          Pelé, Ronaldo Fenômeno, Ronaldinho Gaúcho,
          Romário e Neymar marcaram gerações na seleção.
        </Text>

      </View>

    </ScrollView>

  );

}