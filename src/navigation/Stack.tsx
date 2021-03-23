import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from 'screens';
import TabNavigator from './Tab';
import {useAuth} from 'core';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {status} = useAuth();
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}>
      {status === 'signIn' ? (
        <Stack.Screen name="Home" component={TabNavigator} />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
