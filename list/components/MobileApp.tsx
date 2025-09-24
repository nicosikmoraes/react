import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MobileAppProps {
  title: string;
  platform: string;
  metacritic: number;
}

export default function MobileApp({ title, platform, metacritic }: MobileAppProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{platform}</Text>
      <Text>{metacritic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
