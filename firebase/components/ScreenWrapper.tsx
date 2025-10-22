import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
});
