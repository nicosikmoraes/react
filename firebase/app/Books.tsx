import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BookForm from "@/components/BookForm";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

export default function BookView() {
  const { bookId } = useLocalSearchParams();

  const bookIdParam = Array.isArray(bookId) ? bookId[0] : bookId;
  return (
    <ScreenWrapper>
      <BookForm bookId={bookIdParam} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
