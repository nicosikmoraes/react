import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider, useAuth } from "../hooks/useAuth";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

function LayoutContent() {
  const router = useRouter();
  const { theme, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <Stack
      screenOptions={{
        title: "Firebase",
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleAlign: "center",
        headerRight: () => (
          <>
            {/* Botão de alternar tema */}
            <TouchableOpacity style={{ marginRight: 15 }} onPress={toggleTheme}>
              <Ionicons
                name={theme === "light" ? "moon-outline" : "sunny-outline"}
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>

            {/* Botão para ir à tela principal */}
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => router.push("/")}
            >
              <Ionicons name="home-outline" size={24} color={colors.text} />
            </TouchableOpacity>
          </>
        ),
      }}
    />
  );
}

export default function layout() {
  const router = useRouter();

  return (
    <AuthProvider>
      <ThemeProvider>
        <LayoutContent />
      </ThemeProvider>
    </AuthProvider>
  );
}
