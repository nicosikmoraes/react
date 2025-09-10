import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconButton from './IconButton';

export default function Footer() {
  return (
    <View style={styles.bottom_container}>
      <IconButton icon="home" text="Início" active />
      <IconButton icon="disc" text="Jogos" />
      <IconButton icon="radio" text="Novidades" />
      <IconButton icon="user" text="Usuário" />
    </View>
  );
}

const styles = StyleSheet.create({
  bottom_container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#121212',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  footer_text: {
    color: 'white',
  },
});
