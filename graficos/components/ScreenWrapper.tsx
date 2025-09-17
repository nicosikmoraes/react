import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type ScreenWrapperProps = {
  children: ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content_container}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  content_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
