import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router/build/hooks";
import Title from "../Shared/Title";
import ShowPets from "./ShowPets";

export default function Pets() {
  const params = useSearchParams();
  const username = params.get?.("username") || "Visitante";

  return (
    <View style={styles.container}>
      <Title text={"Welcome, " + username + "!"} fontSize={25} />

      <ShowPets />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // importante para ocupar a tela inteira
    padding: 10,
    alignItems: "center",
  },
});
