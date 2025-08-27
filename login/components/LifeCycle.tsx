import { StyleSheet, Text, TextInput, View, AppState } from "react-native";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  const [text, setText] = useState("");

  // Ele serve para rodar o código um número pré definido de vezes.
  useEffect(
    // Muito usado para chamar api's
    () => {
      console.log("Text: ", text);

      return () => {
        console.log("kill");
      };
    },
    [text] /* Se o array for vazio roda apenas uma vez! */
  );

  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      console.log("Estado do app:", nextAppState);
      setAppState(nextAppState);
    });

    console.log("AppState Iniciado!");

    return () => {
      subscription.remove();
      console.log("AppState Morto");
    };
  }, []);

  return (
    // Aula 4 - Life Cycle.
    <View style={styles.container}>
      <Text>LifeCycle</Text>

      <TextInput
        style={styles.input}
        placeholder=""
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    padding: 10,
    textAlignVertical: "center",
  },
});
