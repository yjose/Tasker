import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'ui';
import {Categories} from './Categories';

export const Header = () => {
  return (
    <View>
      <Text variant="header" margin="l">
        Today
      </Text>
      <Categories />
    </View>
  );
};
