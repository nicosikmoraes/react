import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    if (password === passwordConfirmation) {
      setPasswordIsValid(validPassword(password));
    } else {
      setPasswordIsValid(false);
    }
  }, [password, passwordConfirmation]);

  function validPassword(p: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    return regex.test(p);
  }

  const handlePress = () => {
    if (username === "" || password === "") {
      alert("Valores inválidos!");
      return;
    }

    console.log("Username: ", username, " Password: ", password);
    setPassword("");
    setUsername("");
    setPasswordConfirmation("");
  };

  const handleResetPassword = () => {
    setPassword("");
    setPasswordConfirmation("");
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
        secureTextEntry
      />

      <View>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.reset_btn}
          disabled={!passwordIsValid}
          onPress={() => {
            alert("ola");
          }}
        >
          <Text style={styles.reset_text} onPress={handleResetPassword}>
            Resetar Senha
          </Text>
        </TouchableOpacity>
      </View>

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

  reset_btn: {
    backgroundColor: "transparent",
  },

  reset_text: {
    color: "#666",
    //textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: 700,
    marginLeft: 4,
    marginTop: 2,
  },
});
