import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import Title from "@/components/Title";

export default function PersonName() {
  const router = useRouter();
  const name = "Nicolas";

  return (
    <View style={styles.container}>
      <Title title_text={`Olá, ${name}`} />

      <Link style={styles.btn} href="/PersonAge?idade=23">
        Idade
      </Link>

      <Link style={styles.btn} href="/">
        Menu
      </Link>

      <Pressable style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.pressable_text}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  btn: {
    backgroundColor: "orange",
    padding: 8,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 900,
    borderRadius: 8,
  },

  pressable_text: {
    color: "#fff",
    fontWeight: 900,
  },
});
