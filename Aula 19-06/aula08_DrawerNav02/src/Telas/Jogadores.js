import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const jogadores = [
  {
    title: "Los Angeles Lakers",
    data: ["LeBron James", "Anthony Davis", "Austin Reaves"],
  },
  {
    title: "Golden State Warriors",
    data: ["Stephen Curry", "Draymond Green", "Klay Thompson"],
  },
  {
    title: "Boston Celtics",
    data: ["Jayson Tatum", "Jaylen Brown", "Derrick White"],
  },
];

export default function Jogadores() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏀 Jogadores por Time</Text>
      <SectionList
        sections={jogadores}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  header: { fontSize: 18, fontWeight: "bold", backgroundColor: "#eee", padding: 6, marginTop: 10 },
  item: { fontSize: 16, paddingVertical: 6, paddingLeft: 10 },
});