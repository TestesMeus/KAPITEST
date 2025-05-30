import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Rotas() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Em breve: Rotas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // fundo branco
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
