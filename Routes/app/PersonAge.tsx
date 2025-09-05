import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Title from "@/components/Title";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function PersonAge() {
  const router = useRouter();
  const { idade } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Title style={{ color: "green" }} title_text={`Age: ${idade}`} />

      <Link style={styles.btn} href="/PersonName">
        Nome
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
    backgroundColor: "green",
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
