import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const classificacao = [
  { id: "1", time: "Flamengo", pontos: 7 },
  { id: "2", time: "Palmeiras", pontos: 6 },
  { id: "3", time: "Botafogo", pontos: 4 },
  { id: "4", time: "Fluminense", pontos: 3 },
];

export default function Classificacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📊 Classificação - Times Brasileiros</Text>
      <FlatList
        data={classificacao}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.posicao}>{index + 1}º</Text>
            <Text style={styles.nome}>{item.time}</Text>
            <Text style={styles.pontos}>{item.pontos} pts</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 12 },
  posicao: { fontWeight: "bold", width: 30 },
  nome: { flex: 1, fontSize: 16 },
  pontos: { fontWeight: "600" },
});