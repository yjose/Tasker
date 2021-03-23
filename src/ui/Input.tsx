import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export const Input = ({style, ...props}: TextInputProps) => {
  return (
    <TextInput
      style={[styles.container, style]}
      placeholderTextColor="#A7B4C7"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F7',
    marginVertical: 6,
    padding: 18,
    borderRadius: 8,
    fontSize: 16,
  },
});
