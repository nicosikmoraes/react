import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import MOCK from '../mocks/MOCK_DATA.json';
import MobileApp from '@/components/MobileApp';

export default function index() {
  return (
    <View style={styles.container}>
      {/* {MOCK.map(
        (
          item, // O Map é ideal quando se tem poucos itens para lidar
        ) => (
          <MobileApp title={item.title} platform={item.platform} metacritic={item.metacritic} />
        ),
      )} */}

      <FlatList
        data={MOCK}
        renderItem={({ item }) => (
          <MobileApp title={item.title} platform={item.platform} metacritic={item.metacritic} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
