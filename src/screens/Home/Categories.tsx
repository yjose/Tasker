import {useCategories} from 'api';
import * as React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'ui';

type CategoryType = {
  label: string;
  total: number;
  color: string;
};

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
  const {data} = useCategories();
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
