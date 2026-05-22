import React from 'react';

import {
  View,
  Text,
 FlatList,
  Image
} from 'react-native';

import estilos from '../styleSheet/estilos';

import dados from '../dados/equipes.json';

const imagens = {

  redbull: require('../img/redbull.png'),

  ferrari: require('../img/ferrari.png'),

  mercedes: require('../img/mercedes.png'),

  mclaren: require('../img/mclaren.png'),

  astonmartin: require('../img/astonmartin.png'),

  alpine: require('../img/alpine.png'),

  haas: require('../img/haas.png'),

  rb: require('../img/rb.png'),

  sauber: require('../img/sauber.png'),

  williams: require('../img/williams.png')

};

export default function Conteudo() {

  return (

    <FlatList

      data={dados}

      keyExtractor={(item) => item.id}

      style={estilos.lista}

      renderItem={({ item }) => (

        <View style={estilos.card}>

          <Image
            source={imagens[item.imagem]}
            style={estilos.imagem}
          />

          <View style={estilos.areaTexto}>

            <Text style={estilos.nome}>
              {item.equipe}
            </Text>

            <Text style={estilos.info}>
              Piloto 1: {item.piloto1}
            </Text>

            <Text style={estilos.info}>
              Piloto 2: {item.piloto2}
            </Text>

            <Text style={estilos.info}>
              Motor: {item.motor}
            </Text>

          </View>

        </View>

      )}

    />

  );

}