import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const eventos = [
  { id: "1", nome: "UFC 300", local: "Las Vegas, EUA" },
  { id: "2", nome: "UFC Rio", local: "Rio de Janeiro, Brasil" },
  { id: "3", nome: "UFC São Paulo", local: "São Paulo, Brasil" },
  { id: "4", nome: "UFC Fight Night Brasília", local: "Brasília, Brasil" },
];

export default function Eventos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🥊 Próximos Eventos</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.local}>📍 {item.local}</Text>
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
  local: { fontSize: 14, color: "#666" },
});