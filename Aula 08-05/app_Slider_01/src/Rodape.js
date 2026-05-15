import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Rodape() {

  return (

    <View style={styles.footer}>

      <Text>Bruno Rabelo</Text>

      <Text>08/05/2026</Text>

    </View>

  );

}

const styles = StyleSheet.create({

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#eee'
  }

});