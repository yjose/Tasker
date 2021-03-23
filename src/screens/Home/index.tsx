import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {AddTaskButton} from './AddTaskButton';
import {Tasks} from './Tasks';

export const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tasks />
      <AddTaskButton />
    </SafeAreaView>
  );
};
