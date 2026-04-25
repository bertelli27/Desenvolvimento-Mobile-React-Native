import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.footer}>
      <Text>Bruno Rabelo</Text>
      <Text>24/04/2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
