import React, { useState, useEffect, useContext } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { db } from "../firebaseConfig";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import NormalButton from "./shared/NormalButton";
import { ThemeContext } from "@/context/ThemeContext";

type BookFormProps = {
  bookId?: string; // se for editar, passamos o id do livro
};

export default function BookForm({ bookId }: BookFormProps) {
  const { colors } = useContext(ThemeContext);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  // Se bookId existir, carregamos os dados do livro
  useEffect(() => {
    if (!bookId) return;

    const loadBook = async () => {
      try {
        const bookRef = doc(db, "books", bookId);
        const bookSnap = await getDoc(bookRef);

        if (bookSnap.exists()) {
          const data = bookSnap.data();
          setTitle(data.title);
          setAuthor(data.author);
          setPrice(String(data.price));
        } else {
          alert("Livro não encontrado");
        }
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar livro");
      }
    };

    loadBook();
  }, [bookId]);

  const handleSaveBook = async () => {
    if (!title || !author || !price) {
      alert("Preencha todos os campos");
      return;
    }

    const priceNumber = parseFloat(price);

    try {
      if (bookId) {
        // Atualizar livro existente
        const bookRef = doc(db, "books", bookId);
        await updateDoc(bookRef, { title, author, price: priceNumber });
        alert("Livro atualizado!");
      } else {
        // Adicionar novo livro
        await addDoc(collection(db, "books"), {
          title,
          author,
          price: priceNumber,
        });
        alert("Livro adicionado!");
        setTitle("");
        setAuthor("");
        setPrice("");
      }
    } catch (error) {
      console.error("Erro ao salvar livro: ", error);
      alert("Erro ao salvar livro");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.background }]}>
        {bookId ? "Editar Livro" : "Adicionar Livro"}
      </Text>

      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={[styles.input, { borderColor: colors.background }]}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Dom Casmurro"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Autor:</Text>
      <TextInput
        style={[styles.input, { borderColor: colors.background }]}
        value={author}
        onChangeText={setAuthor}
        placeholder="Ex: Machado de Assis"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Preço:</Text>
      <TextInput
        style={[styles.input, { borderColor: colors.background }]}
        value={price}
        onChangeText={setPrice}
        placeholder="Ex: 29.90"
        keyboardType="numeric"
      />

      <NormalButton
        title={bookId ? "Atualizar Livro" : "Adicionar Livro"}
        onPress={handleSaveBook}
      />
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
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
});
