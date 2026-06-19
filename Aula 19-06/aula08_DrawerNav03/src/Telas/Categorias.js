import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const categorias = [
  { id: "1", nome: "Peso Pesado", peso: "+ 120,2 kg" },
  { id: "2", nome: "Meio-Pesado", peso: "Até 93 kg" },
  { id: "3", nome: "Médio", peso: "Até 83,9 kg" },
  { id: "4", nome: "Leve", peso: "Até 70,3 kg" },
  { id: "5", nome: "Palha (Feminino)", peso: "Até 52,2 kg" },
];

export default function Categorias() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🥊 Categorias de Peso</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.peso}>{item.peso}</Text>
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
  peso: { fontSize: 14, color: "#666" },
});