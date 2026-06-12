import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const sedes = [
  '1930 - Uruguai',
  '1934 - Itália',
  '1938 - França',
  '1950 - Brasil',
  '1954 - Suíça',
  '1958 - Suécia',
  '1962 - Chile',
  '1966 - Inglaterra',
  '1970 - México',
  '1974 - Alemanha Ocidental',
  '1978 - Argentina',
  '1982 - Espanha',
  '1986 - México',
  '1990 - Itália',
  '1994 - Estados Unidos',
  '1998 - França',
  '2002 - Japão e Coreia do Sul',
  '2006 - Alemanha',
  '2010 - África do Sul',
  '2014 - Brasil',
  '2018 - Rússia',
  '2022 - Catar',
  '2026 - Estados Unidos, Canadá e México',
];

export default function SedesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Sedes das Copas</Text>
      <View style={styles.card}>
        {sedes.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            • {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D3A66',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  itemText: {
    fontSize: 15,
    color: '#2D4B6A',
    lineHeight: 24,
    marginBottom: 10,
  },
});