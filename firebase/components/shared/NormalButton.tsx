import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function NormalButton({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btn_title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "orange",
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
