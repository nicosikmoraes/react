import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import NavigationButton from "../Shared/NavigationButton";
import Title from "../Shared/Title";

export default function Home() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <View>
      <Title text={"Adota Paraná"} fontSize={45} />

      <View style={styles.btn_container}>
        <NavigationButton
          color={"orange"}
          text={"Register"}
          route={"/Register"}
        />
        <NavigationButton color={"orange"} text={"Pets"} route={"/Pets"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    gap: 20,
  },
});
