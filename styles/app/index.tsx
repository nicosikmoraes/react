import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function Index() {
  return (
<ScreenWrapper>
    <Header />

    <Main />

    <Footer />
</ScreenWrapper>
  )
}
