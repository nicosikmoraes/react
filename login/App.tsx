import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";

export default function App() {
  const [childVisible, setChildVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Login />

      {childVisible && <LifeCycle />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 100,
  },
});
