import React, { useState } from "react";
import { View, Text, Switch, TextInput, StyleSheet } from "react-native";

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [nomeTimeFavorito, setNomeTimeFavorito] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏀 Configurações</Text>

      <View style={styles.linha}>
        <Text style={styles.label}>Receber notificações de jogos</Text>
        <Switch value={notificacoes} onValueChange={setNotificacoes} />
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Modo escuro</Text>
        <Switch value={modoEscuro} onValueChange={setModoEscuro} />
      </View>

      <Text style={styles.label}>Seu time favorito:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do time"
        value={nomeTimeFavorito}
        onChangeText={setNomeTimeFavorito}
      />

      {nomeTimeFavorito !== "" && (
        <Text style={styles.resultado}>Time favorito: {nomeTimeFavorito} 🏆</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  linha: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  label: { fontSize: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 10, marginTop: 8 },
  resultado: { marginTop: 20, fontSize: 16, fontWeight: "bold" },
});