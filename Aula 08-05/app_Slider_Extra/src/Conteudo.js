import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import estilos from "./estilos";

export default function Conteudo() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [etapa, setEtapa] = useState(1);
  const [respostas, setRespostas] = useState(Array(10).fill(3));

  const perguntas = [
    "O conteúdo é claro",
    "Consigo acompanhar as aulas",
    "O professor explica bem",
    "As atividades ajudam no aprendizado",
    "O ritmo é adequado",
    "Me sinto motivado",
    "Consigo tirar dúvidas",
    "Materiais são úteis",
    "A disciplina é interessante",
    "Estou satisfeito com o curso"
  ];

  const atualizar = (i, valor) => {
    const copia = [...respostas];
    copia[i] = valor;
    setRespostas(copia);
  };

  const resultado = () => {
    const total = respostas.reduce((a, b) => a + b, 0);

    if (total <= 20) return "Baixo engajamento";
    if (total <= 35) return "Médio engajamento";
    return "Alto engajamento";
  };

  if (etapa === 2) {
    return (
      <View style={estilos.container}>
        <Text style={estilos.resultado}>Nome: {nome}</Text>
        <Text style={estilos.resultado}>Curso: {curso}</Text>
        <Text style={estilos.resultado}>
          Pontuação: {respostas.reduce((a,b)=>a+b,0)}
        </Text>
        <Text style={estilos.resultado}>
          Classificação: {resultado()}
        </Text>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => setEtapa(1)}
        >
          <Text style={estilos.textoBotao}>Refazer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={estilos.label}>Curso</Text>
      <Picker
        selectedValue={curso}
        onValueChange={setCurso}
        style={estilos.picker}
      >
        <Picker.Item label="Selecione o curso" value="" />
        <Picker.Item label="ADS" value="ADS" />
        <Picker.Item label="Engenharia" value="Engenharia" />
        <Picker.Item label="Direito" value="Direito" />
      </Picker>

      {perguntas.map((q, i) => (
        <View key={i} style={estilos.card}>
          <Text>{q}</Text>

          <Slider
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={respostas[i]}
            onValueChange={(v) => atualizar(i, v)}
            minimumTrackTintColor="#06402B"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#06402B"
          />

          <Text>Nota: {respostas[i]}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => setEtapa(2)}
      >
        <Text style={estilos.textoBotao}>Ver Resultado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}