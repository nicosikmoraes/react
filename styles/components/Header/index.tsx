import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'
import Actions from './Actions'

export default function Header() {
  return (
    <View style={styles.container_header}>
      <Logo />

      <Actions />
    </View>
  )
}

const styles = StyleSheet.create({
  container_header: {
    position: 'absolute',
    top: 0,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    padding: 8
  },
})