import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleAddBook = async () => {
    console.log("DB conectado:", db);
    if (!title || !author || !price) {
      alert("Preencha todos os campos");
      return;
    }

    const priceNumber = parseFloat(price);

    try {
      await addDoc(collection(db, "books"), {
        title,
        author,
        price: priceNumber,
      });
      alert("Livro adicionado com sucesso!");
      setTitle("");
      setAuthor("");
      setPrice("");
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error);
      alert("Erro ao adicionar livro");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione um livro</Text>
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

      <Pressable style={styles.btn} onPress={handleAddBook}>
        <Text style={styles.btn_text}> Adicionar Livro </Text>
      </Pressable>
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
    borderColor: "orange",
    borderRadius: 5,
    padding: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "orange",
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    cursor: "pointer",
  },
  btn_text: {
    color: "white",
    fontWeight: 800,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    color: "orange",
  },
});
