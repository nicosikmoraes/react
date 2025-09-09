import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme';

interface ScreenWrapperProps {
  children: React.ReactNode; // Definindo corretamente a tipagem para children
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />

        {children}
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: theme.backgroundColor
 } 
})