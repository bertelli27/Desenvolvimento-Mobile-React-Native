import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Copa2026Screen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Copa do Mundo 2026</Text>
        <Text style={styles.subtitle}>
          A edição de 2026 reúne 48 seleções em uma Copa histórica com três países-sede.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Visão geral</Text>
        <Text style={styles.cardText}>• Explicação da Copa: o maior torneio de seleções do planeta.</Text>
        <Text style={styles.cardText}>• 48 seleções participantes pela primeira vez.</Text>
        <Text style={styles.cardText}>• Países-sede: Estados Unidos, Canadá e México.</Text>
        <Text style={styles.cardText}>• Período: junho e julho de 2026.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Destaques</Text>
        <Text style={styles.cardText}>
          Esta edição será a primeira Copa do Mundo com três países-sede e a maior competição em número de seleções da história.
        </Text>
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
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D3A66',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#2D4B6A',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0D3A66',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#2D4B6A',
    lineHeight: 24,
    marginBottom: 8,
  },
});