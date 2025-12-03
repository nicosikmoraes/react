import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import NavigationButton from "../Shared/NavigationButton";
import { usePathname } from "expo-router";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/Login") {
      setUsername("");
    }
  }, [pathname]);

  useEffect(() => {
    if (username.length >= 3) {
      setUsernameIsValid(false);
    } else {
      setUsernameIsValid(true);
    }
  }, [username]);

  return (
    <View style={styles.form_container}>
      <TextInput
        style={styles.inp}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        testID="username-input"
      />

      <NavigationButton
        color={"orange"}
        text={"Send"}
        route="/Pets"
        disabled={usernameIsValid}
        params={{ username: username }}
        testID="send-button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 15,
  },
  inp: {
    borderWidth: 1,
    borderColor: "orange",
    width: 200,
    padding: 15,
    borderRadius: 12,
  },
});
