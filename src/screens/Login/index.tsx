import * as React from 'react';
import {Button, Input, Text, View} from 'ui';

export const Login = () => {
  return (
    <View flex={1} justifyContent="center" padding="m">
      <Text variant="header" textAlign="center" marginHorizontal="m">
        Sign In
      </Text>
      <View marginVertical="xl">
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Text color="grey" textAlign="right">
          FORGOT?
        </Text>
      </View>
      <Button label="Sign in" onPress={() => {}} />
      <Button label="Create account" onPress={() => {}} variant="outline" />
      <Button label="Delete Account" onPress={() => {}} variant="secondary" />
    </View>
  );
};
