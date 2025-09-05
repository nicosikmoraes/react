import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type Props = {
  title_text: string;
  style?: TextStyle;
};

export default function Title({ title_text, style }: Props) {
  return (
    <View>
      <Text style={[styles.title, style]}>{title_text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "orange",
    fontWeight: 900,
  },
});
