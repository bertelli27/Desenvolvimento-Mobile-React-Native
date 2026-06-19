import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const clubes = [
  { id: "1", nome: "Flamengo", pais: "Brasil", grupo: "Grupo D" },
  { id: "2", nome: "Palmeiras", pais: "Brasil", grupo: "Grupo A" },
  { id: "3", nome: "Fluminense", pais: "Brasil", grupo: "Grupo F" },
  { id: "4", nome: "Botafogo", pais: "Brasil", grupo: "Grupo B" },
  { id: "5", nome: "Real Madrid", pais: "Espanha", grupo: "Grupo H" },
  { id: "6", nome: "Manchester City", pais: "Inglaterra", grupo: "Grupo G" },
];

export default function Clubes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏆 Clubes - Mundial 2025</Text>
      <FlatList
        data={clubes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes do Clube", { clube: item })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>{item.pais} • {item.grupo}</Text>
          </TouchableOpacity>
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