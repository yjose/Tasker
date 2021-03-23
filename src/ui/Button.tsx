import * as React from 'react';
import {Text, Pressable} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({label, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text> {label} </Text>
    </Pressable>
  );
};
