import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from './IconButton'

export default function Footer() {
  return (
    <View style={styles.bottom_container}>
      <IconButton icon={"Netflix"} text={"press"} />
    </View>
  )
}

const styles = StyleSheet.create({
  bottom_container: {
    position: 'absolute',
    bottom: 0,
  },

  footer_text: {
    color: 'white'
  }
})