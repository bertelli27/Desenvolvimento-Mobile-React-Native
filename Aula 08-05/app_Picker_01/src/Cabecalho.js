import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Cabecalho() {

  return (

    <View style={styles.header}>

      <Text style={styles.titulo}>
        🎮 Componente Picker
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#253D2C',
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }

});