import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Home from "@/components/Home";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function index() {
  return (
    <ActionSheetProvider>
      <ScreenWrapper>
        <Home />
      </ScreenWrapper>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({});
