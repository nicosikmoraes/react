import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import Typography from './Typography';

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function FormInput({ label, error }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Typography title={label} />}
      <TextInput style={styles.input_container} />
      {error && <Typography title={error} color="red" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 5,
  },

  input_container: {
    backgroundColor: 'dimgray',
    borderRadius: 6,
    color: 'white',
    padding: 8,
  },
});
