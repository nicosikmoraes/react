import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useAuth } from "../hooks/useAuth";
import NormalButton from "@/components/shared/NormalButton";
import { ThemeContext } from "@/context/ThemeContext";

export default function UserAuthentication() {
  const { colors } = useContext(ThemeContext);
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Erro", "As senhas não conferem");
    }

    try {
      setLoading(true);
      await registerUser(email, password);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.background }]}>
        Criar Conta
      </Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { borderColor: colors.background }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={[styles.input, { borderColor: colors.background }]}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={[styles.input, { borderColor: colors.background }]}
        secureTextEntry
      />

      <NormalButton
        title={loading ? "Cadastrando..." : "Cadastrar"}
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});
