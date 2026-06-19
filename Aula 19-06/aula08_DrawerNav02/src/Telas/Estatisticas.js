import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function Estatisticas() {
  const [jogador, setJogador] = useState("LeBron James");
  const [pontos, setPontos] = useState(25);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏀 Estatísticas</Text>

      <Text style={styles.label}>Selecione o jogador:</Text>
      <Picker selectedValue={jogador} onValueChange={(value) => setJogador(value)}>
        <Picker.Item label="LeBron James" value="LeBron James" />
        <Picker.Item label="Stephen Curry" value="Stephen Curry" />
        <Picker.Item label="Jayson Tatum" value="Jayson Tatum" />
        <Picker.Item label="Nikola Jokic" value="Nikola Jokic" />
      </Picker>

      <Text style={styles.label}>
        Média de pontos por jogo: {pontos.toFixed(0)}
      </Text>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={50}
        step={1}
        value={pontos}
        onValueChange={(value) => setPontos(value)}
        minimumTrackTintColor="#1d3557"
        maximumTrackTintColor="#ccc"
      />

      <Text style={styles.resultado}>
        {jogador} está marcando {pontos.toFixed(0)} pontos por jogo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, justifyContent: "center" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontSize: 16, marginTop: 16, fontWeight: "600" },
  resultado: { marginTop: 24, fontSize: 16, textAlign: "center", fontStyle: "italic" },
});