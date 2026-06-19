import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const jogos = [
  { id: "1", confronto: "Flamengo x Chelsea", fase: "Oitavas de Final" },
  { id: "2", confronto: "Palmeiras x Botafogo", fase: "Quartas de Final" },
  { id: "3", confronto: "Fluminense x Real Madrid", fase: "Fase de Grupos" },
  { id: "4", confronto: "Botafogo x PSG", fase: "Fase de Grupos" },
];

export default function Jogos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚽ Jogos do Mundial</Text>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.confronto}</Text>
            <Text style={styles.info}>{item.fase}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 12 },
  nome: { fontSize: 16, fontWeight: "600" },
  info: { fontSize: 14, color: "#666" },
});