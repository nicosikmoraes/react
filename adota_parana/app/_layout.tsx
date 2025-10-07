import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        title: "Adota Paraná",
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => router.push("/")} // Vai para a rota principal
          >
            <Ionicons name="home-outline" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
