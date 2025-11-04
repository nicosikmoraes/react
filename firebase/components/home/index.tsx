import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import RouteButton from "../shared/RouteButton";
import { ThemeContext } from "../../context/ThemeContext";

export default function Home() {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.background }]}>FIREBASE</Text>

      <RouteButton title="Adicionar Usuário" route="/Users" />
      <RouteButton title="Adicionar Livro" route="/Books" />
      <RouteButton title="Ver os Livro" route="/ShowBooks" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
  },
});
