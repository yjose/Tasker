import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 34,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#252A31',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  form: {
    marginVertical: 30,
  },
  forgot: {
    color: '#BFC8D6',
    fontSize: 12,
    textAlign: 'right',
  },
});

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sign In</Text>
      <View style={styles.form}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Text style={styles.forgot}> FORGOT?</Text>
      </View>
      <Button label="Sign in" onPress={() => {}} />
      <Button label="Create account" onPress={() => {}} variant="outline" />
    </View>
  );
};
