import React from 'react';

import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

import estilos from '../styles/estilos';

export default function Argentina() {

  return (

    <ScrollView style={estilos.scroll}>

      <View style={estilos.conteudo}>

        <Image
          source={require('../img/argentina.png')}
          style={estilos.imagemSelecao}
        />

        <Text style={estilos.tituloTela}>
          Seleção Argentina
        </Text>

        <Text style={estilos.topico}>
          Títulos
        </Text>

        <Text style={estilos.texto}>
          A Argentina possui 3 títulos mundiais conquistados
          em 1978, 1986 e 2022.
        </Text>

        <Text style={estilos.topico}>
          Curiosidades
        </Text>

        <Text style={estilos.texto}>
          A campanha da Copa de 1986 ficou marcada pelas
          atuações históricas de Diego Maradona.
        </Text>

        <Text style={estilos.topico}>
          Maiores Jogadores
        </Text>

        <Text style={estilos.texto}>
          Maradona, Messi, Batistuta e Di María são alguns
          dos maiores nomes da história argentina.
        </Text>

      </View>

    </ScrollView>

  );

}