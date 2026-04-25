import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [img, setImg] = useState(require('./src/image/Biscoito.png'));

  const frases = [
    'A sorte favorece os ousados.',
    'Grandes oportunidades estão a caminho.',
    'Você terá um dia incrível!',
    'Confie no seu potencial.',
    'Uma surpresa positiva te espera.',
    'Seja paciente, tudo vai dar certo.'
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require('./src/image/BiscoitoAberto.png'));
  }

  function novoBiscoito() {
    setTextoFrase('');
    setImg(require('./src/image/Biscoito.png'));
  }

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.titulo}>
          App Biscoito da Sorte
        </Text>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.areaBiscoito}>

        <Image
          source={img}
          style={styles.img}
        />

        <Text style={styles.frase}>
          {textoFrase}
        </Text>

        {/* BOTÃO */}
        {textoFrase === '' ? (

          <TouchableOpacity
            style={styles.botao}
            onPress={quebraBiscoito}
          >
            <Image
              source={require('./src/image/Btn_icone_01.png')}
              style={styles.icone}
            />
            <Text style={styles.textoBotao}>
              Quebrar Biscoito
            </Text>
          </TouchableOpacity>

        ) : (

          <TouchableOpacity
            style={styles.botao}
            onPress={novoBiscoito}
          >
            <Image
              source={require('./src/image/Btn_icone_01.png')}
              style={styles.icone}
            />
            <Text style={styles.textoBotao}>
              Novo Biscoito
            </Text>
          </TouchableOpacity>

        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    backgroundColor: '#f4a623',
    padding: 15,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  areaBiscoito: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    width: 250,
    height: 250,
    marginBottom: 20
  },

  frase: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4a623',
    padding: 12,
    borderRadius: 20
  },

  icone: {
    width: 20,
    height: 20,
    marginRight: 10
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }

});
