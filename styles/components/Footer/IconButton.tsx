import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

type IconButtonProps = {
    icon: ReactNode;
    text: string
}

export default function IconButton({icon, text}: IconButtonProps) {
  return (
    <Pressable style={styles.container}>
        {icon}
        <Text style={{color: 'white'}}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        color: 'white',
        display: 'flex',
        alignItems: 'center'
    }
})