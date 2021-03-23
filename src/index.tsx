import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box} />
      <View style={[styles.box, styles.boxBlue]} />
      <View style={[styles.box, styles.boxGreen]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {backgroundColor: 'red', width: 100, height: 100},
  boxBlue: {backgroundColor: 'blue'},
  boxGreen: {backgroundColor: 'green'},
});
