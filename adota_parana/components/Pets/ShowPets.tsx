import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MOCK from "../../mocks/MOCK_DATA.json";
import Pets from "./Pets";

export default function ShowPets() {
  return (
    <FlatList
      style={{ marginTop: 20 }}
      data={MOCK}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Pets name={item.name} specie={item.specie} url={item.img} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({});
