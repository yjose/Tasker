import * as React from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';
import {Check, Text, UnCheck, View} from 'ui';
import {Header} from './Header';

type TaskType = {
  label: string;
  done: boolean;
  color: string;
};

const data: TaskType[] = [
  {label: 'Start making a presentation', done: false, color: '#EBEFF5'},
  {label: 'Pay for rent', done: false, color: '#61DEA4'},
  {label: 'Buy a milk', done: false, color: '#F45E6D'},
  {label: 'Buy a chocolate for Charlotte', done: false, color: '#B678FF'},
  {label: 'Pay for rent', done: false, color: '#61DEA4'},
  {label: 'Buy a milk', done: false, color: '#F45E6D'},
  {label: 'Buy a chocolate for Charlotte', done: false, color: '#B678FF'},
];

const TaskItem = ({label, done: d, color}: TaskType) => {
  const [done, setDone] = React.useState(d);
  return (
    <Pressable onPress={() => setDone(!done)}>
      <View flexDirection="row" alignItems="center">
        {done ? <Check style={styles.done} /> : <UnCheck style={styles.done} />}
        <View
          flex={1}
          paddingVertical="l"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor="grey"
          opacity={done ? 0.3 : 1}>
          <Text variant="subheader" style={{flex: 1}}>
            {label}
          </Text>
          <View
            width={12}
            height={12}
            borderRadius={12}
            marginHorizontal="m"
            style={{backgroundColor: color}}
          />
        </View>
      </View>
    </Pressable>
  );
};

export const Tasks = () => {
  return (
    <FlatList
      ListHeaderComponent={() => <Header />}
      data={data}
      renderItem={({item}) => <TaskItem {...item} />}
      keyExtractor={(_, index) => `item-${index}`}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  done: {
    marginHorizontal: 16,
  },
});
