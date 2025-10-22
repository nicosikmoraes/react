import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BookForm from "@/components/BookForm";

export default function BookView() {
  return (
    <ScreenWrapper>
      <BookForm />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
