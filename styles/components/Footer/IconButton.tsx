import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import Feather from '@expo/vector-icons/Feather';

type IconButtonProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
};

export default function IconButton({ icon, text, active }: IconButtonProps) {
  const color = active ? 'white' : 'grey';

  return (
    <TouchableOpacity style={styles.container}>
      <Feather name={icon as any} size={35} color={color} />

      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },

  text: {
    fontSize: 10,
  },
});
