import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import PersonName from "./PersonName";
import Title from "@/components/Title";

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Title title_text="Person Name And Age" />

      <Link href="/PersonName" style={styles.btn}>
        Nome
      </Link>

      <Pressable
        style={styles.btn}
        onPress={() => {
          router.push({
            pathname: "/PersonAge",
            params: { idade: "20" },
          });
        }}
      >
        <Text style={styles.pressable_text}>Idade</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 30,
    color: "orange",
    fontWeight: 900,
  },

  btn: {
    backgroundColor: "orange",
    color: "#fff",
    padding: 8,
    width: 90,
    fontWeight: 900,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  pressable_text: {
    color: "#fff",
    fontWeight: 900,
  },
});
