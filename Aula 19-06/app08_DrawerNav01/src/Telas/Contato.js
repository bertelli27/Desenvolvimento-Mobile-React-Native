import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0678a6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});