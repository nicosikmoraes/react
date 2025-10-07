import { StyleSheet, Text, View } from "react-native";
import React from "react";

type TitleProps = {
  text: string;
  fontSize: number;
};

export default function Title({ text, fontSize }: TitleProps) {
  return <Text style={[styles.title, { fontSize: fontSize }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "orange",
    fontFamily: "Montserrat_700Bold",
    marginTop: 80,
  },
});
