import * as React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'ui';

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
    <View
      margin="s"
      padding="s"
      paddingRight="l"
      borderRadius={8}
      style={{backgroundColor: color}}>
      <Text variant="subheader">{label}</Text>
      <Text fontSize={12} opacity={0.5}>
        {total} task
      </Text>
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
