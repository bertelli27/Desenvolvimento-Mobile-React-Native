import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function Conteudo() {

  const [nome, setNome] = useState('');
  const [jogo, setJogo] = useState('GTA V');
  const [mensagem, setMensagem] = useState('');

  const [corInput, setCorInput] = useState('#fff');

  function mostrarMensagem() {

    if (nome === '') {

      setMensagem('Por favor, digite seu nome!');

    } else {

      setMensagem(
        `🎮 ${nome}, seu jogo favorito é ${jogo}`
      );

    }

  }

  // MUDA PARA LARANJA
  function corDeFoco() {

    setCorInput('orange');

  }

  // VOLTA PARA BRANCO
  function corOriginal() {

    setCorInput('#fff');

  }

  return (

    <View style={styles.conteudo}>

      <Text style={styles.tituloConteudo}>
        Escolha seu jogo favorito
      </Text>

      <TextInput
        placeholder="Digite seu nome"

        style={[
          styles.inputNome,
          { backgroundColor: corInput }
        ]}

        value={nome}

        onChangeText={setNome}

        onFocus={corDeFoco}

        onBlur={corOriginal}
      />

      <Text style={styles.textoConteudo}>
        Escolha um jogo:
      </Text>

      <Picker
        selectedValue={jogo}

        style={styles.picker}

        onValueChange={(itemValue) =>
          setJogo(itemValue)
        }
      >

        <Picker.Item label="GTA V" value="GTA V" />
        <Picker.Item label="Valorant" value="Valorant" />
        <Picker.Item label="Minecraft" value="Minecraft" />
        <Picker.Item label="FIFA" value="FIFA" />

      </Picker>

      <TouchableHighlight
        style={styles.botao}
        onPress={mostrarMensagem}
      >

        <Text style={styles.textoBotao}>
          Confirmar
        </Text>

      </TouchableHighlight>

      <Text style={styles.textoResultado}>
        {mensagem}
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  conteudo: {
    flex: 1,
    backgroundColor: '#d6ecff',
    padding: 20
  },

  tituloConteudo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#253D2C'
  },

  textoConteudo: {
    fontSize: 18,
    marginBottom: 10
  },

  inputNome: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff'
  },

  picker: {
    backgroundColor: '#fff',
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#253D2C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  textoResultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center'
  }

});