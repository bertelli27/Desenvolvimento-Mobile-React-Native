import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import dadosAlunos from './src/dados/alunos.json';
import estilos1 from './src/styleSheet/estilos1';

export default function App() {
  function mostrarDetalhes(aluno) {
    const mensagem =
      `CPF: ${aluno.cpf}\n` +
      `Nascimento: ${aluno.nascimento}\n` +
      `Ano: ${aluno.ano}`;

    if (Platform.OS === 'web') {
      alert(`${aluno.nome}\n\n${mensagem}`);
    } else {
      Alert.alert(aluno.nome, mensagem);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={estilos1.item}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.7}
      >
        <Text style={estilos1.itemText}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  function renderSectionHeader({ section }) {
    return (
      <View style={estilos1.sectionHeader}>
        <Text style={estilos1.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  }

  return (
    <View style={estilos1.container}>
      <Text style={estilos1.title}>Lista de Alunos por Curso</Text>
      <SectionList
        sections={dadosAlunos}
        keyExtractor={(item) => item.cpf}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={estilos1.separator} />}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}
