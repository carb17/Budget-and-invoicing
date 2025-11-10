import { InstanciaAxios } from '../../../lib/axios';
import { PRODUCTS_ENDPOINT } from '../../../lib/apiConfig';

import { ProductProps } from '../types/types';

export const FetchProduct = async (id: string): Promise<ProductProps> => {
  const response = await InstanciaAxios.get<ProductProps>(
    `${PRODUCTS_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchProducts = async (): Promise<ProductProps[]> => {
  const response = await InstanciaAxios.get<ProductProps[]>(
    PRODUCTS_ENDPOINT.list
  );
  return response.data;
};

export const CreateProduct = async (data: Partial<ProductProps>) => {
  const response = await InstanciaAxios.post(PRODUCTS_ENDPOINT.register, data);
  return response.data;
};

export const UpdateProduct = async (
  id: string,
  data: Partial<ProductProps>
) => {
  const response = await InstanciaAxios.put(
    `${PRODUCTS_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
