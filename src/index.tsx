import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {API_URL} from '@env';
import {Button} from 'ui';

export const App = () => {
  return (
    <SafeAreaView>
      <Text> Hello World </Text>
      <Text> API_URL : {API_URL} </Text>
      <Button
        label="Button 1"
        onPress={() => console.log('Button 1 pressed ')}
      />
      <Button
        label="Button 2"
        onPress={() => console.log('Button 2 pressed ')}
      />
    </SafeAreaView>
  );
};
