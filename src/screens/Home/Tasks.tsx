import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import {Check, UnCheck} from 'ui';
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
      <View style={styles.item}>
        {done ? <Check style={styles.done} /> : <UnCheck style={styles.done} />}
        <View style={[styles.itemContent, {opacity: done ? 0.3 : 1}]}>
          <Text style={styles.label}>{label}</Text>
          <View style={[styles.circle, {backgroundColor: color}]} />
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  label: {
    color: '#252A31',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter',
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  title: {
    color: '#252A31',
    fontSize: 34,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  done: {
    marginHorizontal: 16,
  },
});
