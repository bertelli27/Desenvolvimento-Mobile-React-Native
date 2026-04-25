import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Conteudo() {

  const [enunciado, setEnunciado] = useState("Clique no botão para trocar a cor de fundo");
  const [descricao, setDescricao] = useState("");
  const [corFundo, setCorFundo] = useState("white");

  function alteraState() {

    // 🔥 ALERTA DO PROFESSOR
    Alert.alert("Olá");

    // 🔄 ALTERAÇÃO DE STATE
    if (corFundo === 'white') {
      setEnunciado("A cor do fundo foi trocada para cinza. Clique novamente para voltar.");
      setDescricao("Texto inserido em tempo real");
      setCorFundo('gray');
    } else {
      setEnunciado("Clique no botão para trocar a cor de fundo");
      setDescricao("");
      setCorFundo('white');
    }
  }

  return (
    <View style={[estilos.conteudo, { backgroundColor: corFundo }]}>

      <Text style={estilos.tituloConteudo}>
        TouchableHighlight
      </Text>

      <Text style={estilos.texto}>
        {enunciado}
      </Text>

      <TouchableHighlight
        style={estilos.botao}
        onPress={alteraState}
      >
        <Text style={estilos.textoBotao}>
          CLIQUE AQUI
        </Text>
      </TouchableHighlight>

      <Text style={estilos.texto}>
        {descricao}
      </Text>

    </View>
  );
}
