import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import Slider from '@react-native-community/slider';

import { Picker } from '@react-native-picker/picker';

import estilos from './estilos';

export default function Conteudo() {

  const [nome, setNome] = useState('');

  const [filme, setFilme] = useState('Vingadores');

  const [nota, setNota] = useState(5);

  const [comentario, setComentario] = useState('');

  const [resultado, setResultado] = useState('');

  function avaliarFilme() {

    if (nome === '') {

      alert('Digite seu nome!');

    } else {

      setResultado(

        `Nome: ${nome}

Filme: ${filme}

Nota: ${nota.toFixed(1)}

Comentário:
${comentario}`

      );

    }

  }

  return (

    <ScrollView style={estilos.container}>

      <TextInput
        style={estilos.input}

        placeholder="Digite seu nome"

        value={nome}

        onChangeText={setNome}
      />

      <Text style={estilos.label}>
        Escolha o filme:
      </Text>

      <Picker
        selectedValue={filme}

        style={estilos.picker}

        onValueChange={(itemValue) =>
          setFilme(itemValue)
        }
      >

        <Picker.Item
          label="Vingadores"
          value="Vingadores"
        />

        <Picker.Item
          label="Velozes e Furiosos"
          value="Velozes e Furiosos"
        />

        <Picker.Item
          label="Homem-Aranha"
          value="Homem-Aranha"
        />

      </Picker>

      <Image
        source={require('./img/medalha.png')}
        style={estilos.imagem}
      />

      <Text style={estilos.nota}>
        Nota: {nota.toFixed(1)}
      </Text>

      <Slider
        minimumValue={0}
        maximumValue={10}

        value={nota}

        onValueChange={(valor) =>
          setNota(valor)
        }

        minimumTrackTintColor="#FFD700"

        maximumTrackTintColor="#999"
      />

      <TextInput
        style={estilos.inputComentario}

        placeholder="Faça um comentário"

        multiline={true}

        value={comentario}

        onChangeText={setComentario}
      />

      <TouchableHighlight
        style={estilos.botao}

        underlayColor="#3b215e"

        onPress={avaliarFilme}
      >

        <Text style={estilos.textoBotao}>
          Avaliar
        </Text>

      </TouchableHighlight>

      <Text style={estilos.resultado}>
        {resultado}
      </Text>

    </ScrollView>

  );

}