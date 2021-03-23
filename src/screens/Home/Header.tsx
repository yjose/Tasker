import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Categories} from './Categories';

export const Header = () => {
  return (
    <View>
      <Text style={styles.title}> Today </Text>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#252A31',
    marginHorizontal: 20,
    textAlign: 'left',
    paddingVertical: 30,
  },
});
