import * as React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StackNavigator} from './Stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#006CFF',
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
