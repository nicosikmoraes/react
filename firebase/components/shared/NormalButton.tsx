import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function NormalButton({ title, onPress }: ButtonProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Pressable
      style={[styles.btn, { backgroundColor: colors.background }]}
      onPress={onPress}
    >
      <Text style={styles.btn_title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 220,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 15,
  },
  btn_title: {
    color: "white",
    fontWeight: 800,
  },
});
