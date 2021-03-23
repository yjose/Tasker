import * as React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
};

export const Button = ({label, onPress, variant = 'primary'}: Props) => {
  const isPrimary = variant === 'primary';
  const containerStyle = isPrimary
    ? styles.container
    : {...styles.container, ...styles.outline};
  const labelStyle = isPrimary
    ? styles.label
    : {...styles.label, ...styles.label_outline};

  return (
    <Pressable onPress={onPress}>
      <View style={containerStyle}>
        <Text style={labelStyle}> {label} </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#006CFF',
    marginVertical: 6,
    borderRadius: 8,
  },
  outline: {
    backgroundColor: '#FFF',
    // border: 1px solid #006CFF;
    borderWidth: 1,
    borderColor: '#006CFF',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  label_outline: {
    color: '#006CFF',
  },
});
