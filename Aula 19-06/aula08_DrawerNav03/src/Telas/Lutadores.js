import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const lutadores = [
  { id: "1", nome: "Alex Poatan Pereira", categoria: "Meio-Pesado" },
  { id: "2", nome: "Charles do Bronx Oliveira", categoria: "Leve" },
  { id: "3", nome: "Jéssica Bate-Estaca Andrade", categoria: "Palha" },
  { id: "4", nome: "José Aldo", categoria: "Penas" },
  { id: "5", nome: "Amanda Lealzinha Lemos", categoria: "Palha" },
];

export default function Lutadores() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🥊 Lutadores Brasileiros</Text>
      <FlatList
        data={lutadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 10 },
  nome: { fontSize: 16, fontWeight: "600" },
  categoria: { fontSize: 14, color: "#666" },
});