import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Main() {
  return (
    <View style={styles.main_container}>
      <Text style={styles.main_text}>Main</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    display: 'flex',
  },

  main_text: {
    color: 'white'
  }
})