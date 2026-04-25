import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Conteudo() {

  const jogadores = [
    { nome: 'Neymar', img: require('./img/neymar.png') },
    { nome: 'Messi', img: require('./img/messi.png') },
    { nome: 'Cristiano Ronaldo', img: require('./img/cr7.png') }
  ];

  const [indice, setIndice] = useState(
    Math.floor(Math.random() * jogadores.length)
  );

  const [resposta, setResposta] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificar() {
    if (resposta.toLowerCase() === jogadores[indice].nome.toLowerCase()) {
      setMensagem('🔥 Boa! Você acertou!');
    } else {
      setMensagem('❌ Errou! Tente novamente.');
    }
  }

  function proximo() {
    let novoIndice = Math.floor(Math.random() * jogadores.length);
    setIndice(novoIndice);
    setResposta('');
    setMensagem('');
  }

  return (
    <View style={styles.container}>

      <Image
        source={jogadores[indice].img}
        style={styles.img}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do jogador"
        value={resposta}
        onChangeText={setResposta}
      />

      <TouchableOpacity style={styles.btnVerificar} onPress={verificar}>
        <Text style={styles.textoBtn}>Verificar</Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      <TouchableOpacity style={styles.btnProximo} onPress={proximo}>
        <Text style={styles.textoBtn}>Próximo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4ffeb'
  },

  img: {
    width: 200,
    height: 200,
    marginBottom: 15
  },

  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },

  btnVerificar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  btnProximo: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8
  },

  textoBtn: {
    color: '#fff',
    fontWeight: 'bold'
  },

  mensagem: {
    marginBottom: 10,
    fontSize: 16
  }

});
