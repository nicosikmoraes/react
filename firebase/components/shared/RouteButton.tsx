import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import { ThemeContext } from "@/context/ThemeContext";

type RouteButtonProps = {
  title: string;
  route: string;
};

export default function RouteButton({ title, route }: RouteButtonProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Pressable
      style={[styles.btn, { backgroundColor: colors.background }]}
      onPress={() => router.push(route as any)}
    >
      <Text style={styles.btn_title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
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
