import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

type CategoryType = {
  label: string;
  total: number;
  color: string;
};

const data: CategoryType[] = [
  {label: 'inbox', total: 2, color: '#EBEFF5'},
  {label: 'work', total: 2, color: '#61DEA4'},
  {label: 'Shopping', total: 3, color: '#F45E6D'},
  {label: 'Family', total: 1, color: '#FFE761'},
  {label: 'Personal', total: 4, color: '#B678FF'},
];

const CategoryItem = ({label, total, color}: CategoryType) => {
  return (
    <View style={[styles.item, {backgroundColor: color}]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.total}>{total} task</Text>
    </View>
  );
};

export const Categories = () => {
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({item}) => <CategoryItem {...item} />}
      keyExtractor={(_, index) => `item-${index}`}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
    paddingRight: 24,
    borderRadius: 8,
    margin: 4,
    minWidth: 120,
  },
  label: {
    color: '#252A31',
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    color: '#252A31',
    fontSize: 12,
    opacity: 0.5,
  },
});
