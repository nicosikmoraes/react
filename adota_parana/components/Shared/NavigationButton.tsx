import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

type AppRoute = "/" | "/Pets" | "/Register";

type NavigationButtonProps = {
  color: string;
  text: string;
  route: AppRoute;
  params?: Record<string, any>;
  disabled?: boolean;
};

export default function NavigationButton({
  color,
  text,
  route,
  params,
  disabled = false,
}: NavigationButtonProps) {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: color,
          opacity: disabled ? 0.75 : 1,
        },
      ]}
      onPress={() => router.push({ pathname: route, params })}
      disabled={disabled}
    >
      {text}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Montserrat_400Regular",
    fontWeight: 700,
    borderRadius: 12,
  },
});
