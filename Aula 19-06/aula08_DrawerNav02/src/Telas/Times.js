import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const times = [
  { id: "1", nome: "Los Angeles Lakers", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" },
  { id: "2", nome: "Golden State Warriors", logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg" },
  { id: "3", nome: "Boston Celtics", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg" },
  { id: "4", nome: "Chicago Bulls", logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg" },
  { id: "5", nome: "Miami Heat", logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg" },
];

export default function Times() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏀 Times da NBA</Text>
      <FlatList
        data={times}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { flexDirection: "row", alignItems: "center", marginBottom: 16, borderBottomWidth: 1, borderColor: "#eee", paddingBottom: 8 },
  logo: { width: 50, height: 50, marginRight: 12 },
  nome: { fontSize: 16 },
});