import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetalhesClube({ route }) {
  const { clube } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏆 {clube.nome}</Text>
      <View style={styles.card}>
        <Text style={styles.label}>País:</Text>
        <Text style={styles.valor}>{clube.pais}</Text>

        <Text style={styles.label}>Grupo:</Text>
        <Text style={styles.valor}>{clube.grupo}</Text>

        <Text style={styles.label}>Participação:</Text>
        <Text style={styles.valor}>Copa do Mundo de Clubes FIFA 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#f5f5f5", borderRadius: 10, padding: 16 },
  label: { fontSize: 14, color: "#666", marginTop: 10 },
  valor: { fontSize: 18, fontWeight: "600" },
});