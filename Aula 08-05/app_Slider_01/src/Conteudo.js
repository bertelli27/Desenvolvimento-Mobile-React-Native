import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Slider from '@react-native-community/slider';

export default function Conteudo() {

  const [nome, setNome] = useState('');

  const [volume, setVolume] = useState(50);

  const [sensibilidade, setSensibilidade] = useState(5);

  function verificar() {

    if (nome === '') {

      alert('Digite seu nome!');

    } else {

      alert(
        `Configurações Salvas

Jogador: ${nome}

Volume: ${volume}

Sensibilidade: ${sensibilidade}`
      );

    }

  }

  return (

    <View style={styles.container}>

      <Text style={styles.descricao}>
        Ajuste as configurações gamer
      </Text>

      <Text style={styles.label}>
        Digite seu nome:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        🔊 Volume: {volume}
      </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        value={volume}

        onValueChange={(valor) =>
          setVolume(parseInt(valor))
        }

        minimumTrackTintColor="green"

        maximumTrackTintColor="red"
      />

      <Text style={styles.label}>
        🎯 Sensibilidade: {sensibilidade}
      </Text>

      <Slider
        minimumValue={1}
        maximumValue={10}
        value={sensibilidade}

        onValueChange={(valor) =>
          setSensibilidade(parseInt(valor))
        }

        minimumTrackTintColor="blue"

        maximumTrackTintColor="gray"
      />

      <TouchableHighlight
        style={styles.botao}

        underlayColor="#1b2e20"

        onPress={verificar}
      >

        <Text style={styles.textoBotao}>
          SALVAR
        </Text>

      </TouchableHighlight>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d6ecff',
    padding: 20
  },

  descricao: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold'
  },

  label: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10
  },

  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10
  },

  botao: {
    marginTop: 30,
    backgroundColor: '#253D2C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }

});