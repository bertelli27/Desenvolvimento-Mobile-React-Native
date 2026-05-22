import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
  Alert,
  Platform
} from 'react-native';

import estilos from '../style/estilos';

export default function Conteudo() {

  const [tarefa, setTarefa] = useState('');
  const [data, setData] = useState('');

  const [lista, setLista] = useState([]);

  function adicionar() {

    if (tarefa === '' || data === '') {
      alert('Preencha todos os campos');
      return;
    }

    const novaLista = [...lista];

    const existeData = novaLista.find(
      item => item.title === data
    );

    if (existeData) {

      existeData.data.push({
        id: Date.now().toString(),
        nome: tarefa
      });

    } else {

      novaLista.push({
        title: data,

        data: [
          {
            id: Date.now().toString(),
            nome: tarefa
          }
        ]
      });

    }

    novaLista.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    setLista(novaLista);

    setTarefa('');
    setData('');
  }

  function remover(itemSelecionado) {

    const mensagem = 'Deseja excluir esta tarefa?';

    if (Platform.OS === 'web') {

      const confirmar = window.confirm(mensagem);

      if (confirmar) {
        excluir(itemSelecionado);
      }

    } else {

      Alert.alert(
        'Excluir',
        mensagem,
        [
          {
            text: 'Não'
          },

          {
            text: 'Sim',
            onPress: () => excluir(itemSelecionado)
          }
        ]
      );
    }
  }

  function excluir(itemSelecionado) {

    const novaLista = lista

      .map(secao => {

        return {

          ...secao,

          data: secao.data.filter(
            item => item.id !== itemSelecionado.id
          )

        };

      })

      .filter(secao => secao.data.length > 0);

    setLista(novaLista);
  }

  function renderItem({ item }) {

    return (
      <TouchableOpacity
        style={estilos.item}
        onPress={() => remover(item)}
      >

        <Text style={estilos.textoItem}>
          {item.nome}
        </Text>

      </TouchableOpacity>
    );
  }

  function renderSectionHeader({ section }) {

    return (
      <View style={estilos.dataBox}>

        <Text style={estilos.dataTexto}>
          {section.title}
        </Text>

      </View>
    );
  }

  return (
    <View style={estilos.conteudo}>

      <TextInput
        style={estilos.input}
        placeholder="Digite a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TextInput
        style={estilos.input}
        placeholder="Data (ex: 10/05/2026)"
        value={data}
        onChangeText={setData}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={adicionar}
      >

        <Text style={estilos.textoBotao}>
          Adicionar
        </Text>

      </TouchableOpacity>

      <SectionList
        sections={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />

    </View>
  );
}