import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

type AppRoute = "/" | "/Pets" | "/Login";

type NavigationButtonProps = {
  color: string;
  text: string;
  route: AppRoute;
  params?: Record<string, any>;
  disabled?: boolean;
  testID?: string;
};

export default function NavigationButton({
  color,
  text,
  route,
  params,
  disabled = false,
  testID,
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
      testID={testID}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center", // IMPORTANTE para centralizar o Text
    borderRadius: 12,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
});
