import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import New from './New'
import Sports from './Sports'

export default function Main() {
  return (
    <View style={styles.main_container}>
      <New />

      <Sports />
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },

  main_text: {
    color: 'white'
  }
})