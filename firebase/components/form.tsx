import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleAddBook = async () => {
    if (!title || !author || !price) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    const priceNumber = parseFloat(price);

    if (isNaN(priceNumber)) {
      Alert.alert("Preço inválido");
      return;
    }

    try {
      await addDoc(collection(db, "books"), {
        title,
        author,
        price: priceNumber,
      });
      Alert.alert("Livro adicionado com sucesso!");
      setTitle("");
      setAuthor("");
      setPrice("");
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error);
      Alert.alert("Erro ao adicionar livro");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Dom Casmurro"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Autor:</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Ex: Machado de Assis"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Preço:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Ex: 29.90"
        keyboardType="numeric"
      />

      <Button title="Adicionar Livro" onPress={handleAddBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});
