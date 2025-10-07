import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";

// Mapeamento de imagens locais
const images: { [key: string]: any } = {
  "boboMarley.jpg": require("../../assets/images/boboMarley.jpg"),
  "garfield.jpg": require("../../assets/images/garfield.jpg"),
  "nemo.jpg": require("../../assets/images/nemo.jpg"),
  "pataco.jpg": require("../../assets/images/pataco.jpg"),
};

interface PetsProps {
  name: string;
  specie: string;
  url: any;
}

export default function Pets({ name, specie, url }: PetsProps) {
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = () => {
    const options = ["Cancel", "Adopt"];
    const cancelButtonIndex = 0;
    const destructiveButtonIndex = 0;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          alert("Congratulations, you have adopt " + name + "!");
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[url]}
        style={{
          width: 300,
          height: 300,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.text_container} onPress={handlePress}>
        <Text style={styles.mainText}>{name}</Text>
        <Text style={styles.minorText}>{specie}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
  },
  text_container: {
    borderWidth: 1,
    borderColor: "#474747ff",
  },
  mainText: {
    paddingTop: 20,
    textAlign: "center",
    fontWeight: 800,
    fontSize: 18,
    color: "#474747ff",
  },
  minorText: {
    textAlign: "center",
    padding: 8,
    paddingBottom: 20,
    fontWeight: 800,
    fontSize: 14,
    color: "#474747ff",
  },
});
