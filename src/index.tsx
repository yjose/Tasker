import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {API_URL} from '@env';

export const App = () => {
  return (
    <SafeAreaView>
      <Text> Hello World </Text>
      <Text> API_URL : {API_URL} </Text>
    </SafeAreaView>
  );
};
