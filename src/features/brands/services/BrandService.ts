import { InstanciaAxios } from '../../../lib/axios';
import { BRANDS_ENDPOINT } from '../../../lib/apiConfig';

import { BrandProps } from '../types/types';

export const FetchBrand = async (id: string): Promise<BrandProps> => {
  const response = await InstanciaAxios.get<BrandProps>(
    `${BRANDS_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchBrands = async (): Promise<BrandProps[]> => {
  const response = await InstanciaAxios.get<BrandProps[]>(BRANDS_ENDPOINT.list);
  return response.data;
};

export const CreateBrand = async (data: Partial<BrandProps>) => {
  const response = await InstanciaAxios.post(BRANDS_ENDPOINT.register, data);
  return response.data;
};

export const UpdateBrand = async (id: string, data: Partial<BrandProps>) => {
  const response = await InstanciaAxios.put(
    `${BRANDS_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
