import {useAuth} from 'core';
import * as React from 'react';
import {Text, View} from 'ui';
import {LoginForm} from './LoginForm';

export const Login = () => {
  const {signIn} = useAuth();
  return (
    <View flex={1} justifyContent="center" padding="m">
      <Text
        variant="header"
        textAlign="center"
        marginHorizontal="m"
        testID="title">
        Sign In
      </Text>
      <LoginForm login={() => signIn('my-token')} />
    </View>
  );
};
