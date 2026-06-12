import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const campeoes = [
  { country: 'Brasil', subtitle: '5 títulos', years: '1958, 1962, 1970, 1994, 2002' },
  { country: 'Alemanha', subtitle: '4 títulos', years: '1954, 1974, 1990, 2014' },
  { country: 'Itália', subtitle: '4 títulos', years: '1934, 1938, 1982, 2006' },
  { country: 'Argentina', subtitle: '3 títulos', years: '1978, 1986, 2022' },
  { country: 'França', subtitle: '2 títulos', years: '1998, 2018' },
  { country: 'Uruguai', subtitle: '2 títulos', years: '1930, 1950' },
  { country: 'Inglaterra', subtitle: '1 título', years: '1966' },
  { country: 'Espanha', subtitle: '1 título', years: '2010' },
];

export default function CampeoesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Campeões da Copa</Text>
      {campeoes.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.country}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          <Text style={styles.cardText}>{item.years}</Text>
        </View>
      ))}
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0D3A66',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 15,
    color: '#40739E',
  },
  cardText: {
    marginTop: 8,
    fontSize: 15,
    color: '#2D4B6A',
    lineHeight: 22,
  },
});