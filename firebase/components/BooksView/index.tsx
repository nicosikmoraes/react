import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { db } from "../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import NormalButton from "../shared/NormalButton";
import { router } from "expo-router";
import { ThemeContext } from "@/context/ThemeContext";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
};

export default function index({ navigation }: any) {
  const { colors } = useContext(ThemeContext);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const booksRef = collection(db, "books");

    const unsubscribe = onSnapshot(
      booksRef,
      (snapshot) => {
        const list: Book[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Book[];
        setBooks(list);
      },
      (error) => {
        console.error(error);
        Alert.alert("Erro ao carregar livros");
      }
    );

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }: { item: Book }) => (
    <View style={[styles.bookItem, { borderColor: colors.background }]}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Autor: {item.author}</Text>
        <Text>Preço: R$ {item.price.toFixed(2)}</Text>
      </View>

      <NormalButton
        title="Editar"
        onPress={() =>
          router.push({ pathname: "/Books", params: { bookId: item.id } })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colors.background }]}>
        Lista de Livros
      </Text>

      {books.length === 0 ? (
        <Text style={styles.noBooks}>Nenhum livro encontrado.</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "orange",
    marginBottom: 20,
    textAlign: "center",
  },
  noBooks: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
  bookItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },
});
