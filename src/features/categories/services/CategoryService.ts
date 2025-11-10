import { InstanciaAxios } from '../../../lib/axios';
import { CATEGORIES_ENDPOINT } from '../../../lib/apiConfig';

import { CategoryProps } from '../types/types';

export const FetchCategory = async (id: string): Promise<CategoryProps> => {
  const response = await InstanciaAxios.get<CategoryProps>(
    `${CATEGORIES_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchCategories = async (): Promise<CategoryProps[]> => {
  const response = await InstanciaAxios.get<CategoryProps[]>(
    CATEGORIES_ENDPOINT.list
  );
  return response.data;
};

export const CreateCategory = async (data: Partial<CategoryProps>) => {
  const response = await InstanciaAxios.post(
    CATEGORIES_ENDPOINT.register,
    data
  );
  return response.data;
};

export const UpdateCategory = async (
  id: string,
  data: Partial<CategoryProps>
) => {
  const response = await InstanciaAxios.put(
    `${CATEGORIES_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
