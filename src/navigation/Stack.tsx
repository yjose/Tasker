import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from 'screens';
import TabNavigator from './Tab';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};
