import React, { ReactNode } from 'react';
import { ColorValue, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type TypographyProps = {
    title: ReactNode;
    color?: ColorValue;
}

export default function Typography({title, color}: TypographyProps) {
    const style: StyleProp<TextStyle> = {
        color: color || "white"
    }
  
    return (
    
      <Text style={style}>{title}</Text>
    
  )
}

const styles = StyleSheet.create({})