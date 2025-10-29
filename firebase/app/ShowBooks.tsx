import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BooksView from "@/components/BooksView";

export default function ShowBooks() {
  return (
    <ScreenWrapper>
      <BooksView />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
