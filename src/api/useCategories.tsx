import {useQuery} from 'react-query';
import {client} from './client';

type CategoryType = {
  label: string;
  total: number;
  color: string;
};

const getCategories = async () => {
  const {data} = await client.get('/categories');
  return data;
};

export function useCategories() {
  return useQuery<CategoryType[]>('Categories', getCategories);
}
