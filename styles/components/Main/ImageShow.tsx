import {Image, StyleSheet, Text, View  } from 'react-native'
import React from 'react'

type imageProps = {
    image_url: string;
}

export default function ImageShow({image_url}: imageProps) {
  return (
    <Image
    style={{width: 100, height: 150}}
        source={{
            uri: image_url
        }}
    />
  )
}

const styles = StyleSheet.create({})