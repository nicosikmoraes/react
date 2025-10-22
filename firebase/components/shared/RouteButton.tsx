import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

type RouteButtonProps = {
  title: string;
  route: string;
};

export default function RouteButton({ title, route }: RouteButtonProps) {
  return (
    <Pressable style={styles.btn} onPress={() => router.push(route as any)}>
      <Text style={styles.btn_title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "orange",
    height: 50,
    width: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btn_title: {
    color: "white",
    fontWeight: 800,
  },
});
