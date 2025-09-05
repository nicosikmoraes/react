import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="PersonAge"
        options={{
          title: "Person Age",
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
