import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Pets from "@/components/Pets";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function PetsView() {
  return (
    <ActionSheetProvider>
      <ScreenWrapper>
        <Pets />
      </ScreenWrapper>
    </ActionSheetProvider>
  );
}
