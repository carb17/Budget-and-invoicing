import { InstanciaAxios } from '../../../lib/axios';
import { USERS_ENDPOINT } from '../../../lib/apiConfig';
import { UserProps } from '../types/types';

export const FetchUser = async (id: string): Promise<UserProps> => {
  const response = await InstanciaAxios.get<UserProps>(
    `${USERS_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchUsers = async (): Promise<UserProps[]> => {
  const response = await InstanciaAxios.get<UserProps[]>(USERS_ENDPOINT.list);
  return response.data;
};

export const CreateUser = async (data: Partial<UserProps>) => {
  const response = await InstanciaAxios.post(USERS_ENDPOINT.register, data);
  return response.data;
};

export const UpdateUser = async (id: string, data: Partial<UserProps>) => {
  const response = await InstanciaAxios.put(
    `${USERS_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
