import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

export default function Actions() {
  return (
    <View style={styles.actions_contaier}>
      <TouchableOpacity>
        <Feather name="download" size={35} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Feather name="search" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actions_contaier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
