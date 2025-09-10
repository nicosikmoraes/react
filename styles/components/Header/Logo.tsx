import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'data:image/png;base64,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',
        }}
        resizeMode="cover" // ou "contain", "stretch", etc.
      />

      <Text style={styles.text}>Início</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 700,
    marginTop: 5,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
