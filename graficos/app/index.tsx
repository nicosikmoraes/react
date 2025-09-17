import FormInput from '@/components/FormInput';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typography from '@/components/Typography';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function index() {
  return (
    <ScreenWrapper>
      <Typography title="Hello World!" />
      <Typography title="Hello my friend!" color={'orange'} />

      <FormInput label="Nome" error="Nome Errado!" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
