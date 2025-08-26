import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (username === "" || password === "") {
      alert("Valores inválidos!");
      return;
    }

    console.log("Username: ", username, " Password: ", password);
    setPassword("");
    setUsername("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.press_btn]}
        onPress={handlePress}
      >
        <Text style={styles.btn_text}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    padding: 10,
    textAlignVertical: "center",
  },

  btn: {
    backgroundColor: "#666",
    padding: 10,
    borderRadius: 4,
  },

  btn_text: {
    color: "#fff",
    fontWeight: 800,
    textAlign: "center",
  },

  press_btn: {
    color: "#494949ff",
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
});
