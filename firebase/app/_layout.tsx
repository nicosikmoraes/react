import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider, useAuth } from "../hooks/useAuth";

export default function layout() {
  const router = useRouter();

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          title: "Firebase",
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
    </AuthProvider>
  );
}
