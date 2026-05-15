import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import estilos from './estilos';

export default function Conteudo() {

  const [nome, setNome] = useState('');

  const [produto, setProduto] = useState('Ração');

  const [observacao, setObservacao] = useState('');

  const [resultado, setResultado] = useState('');

  const imagens = {

    'Ração': require('./img/racao.png'),

    'Brinquedo': require('./img/brinquedo.png'),

    'Caminha': require('./img/caminha.png')

  };

  function fazerPedido() {

    if (nome === '') {

      alert('Digite seu nome!');

    } else {

      setResultado(

        `Pedido de: ${nome}

Produto: ${produto}

Observação:
${observacao}`

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
        Escolha um produto:
      </Text>

      <Picker
        selectedValue={produto}

        style={estilos.picker}

        onValueChange={(itemValue) =>
          setProduto(itemValue)
        }
      >

        <Picker.Item
          label="Ração"
          value="Ração"
        />

        <Picker.Item
          label="Brinquedo"
          value="Brinquedo"
        />

        <Picker.Item
          label="Caminha"
          value="Caminha"
        />

      </Picker>

      <Image
        source={imagens[produto]}
        style={estilos.imagem}
      />

      <TextInput
        style={estilos.inputObs}

        placeholder="Observações"

        value={observacao}

        onChangeText={setObservacao}

        multiline={true}
      />

      <TouchableHighlight
        style={estilos.botao}

        underlayColor="#1d2e22"

        onPress={fazerPedido}
      >

        <Text style={estilos.textoBotao}>
          Fazer Pedido
        </Text>

      </TouchableHighlight>

      <Text style={estilos.resultado}>
        {resultado}
      </Text>

    </ScrollView>

  );

}