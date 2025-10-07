import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Shared/Title";
import Form from "./Form";

export default function Register() {
  return (
    <View style={styles.container}>
      <Title text="Register" fontSize={45} />

      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
