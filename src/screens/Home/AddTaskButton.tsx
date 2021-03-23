import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Plus} from 'ui';

export const AddTaskButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Plus />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
