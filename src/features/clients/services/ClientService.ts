import { InstanciaAxios } from "../../../lib/axios";
import { CLIENTS_ENDPOINT } from "../../../lib/apiConfig";

import { ClientProps } from "../types";

export const FetchClient = async (id: string): Promise<ClientProps> => {
  const response = await InstanciaAxios.get<ClientProps>(
    `${CLIENTS_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchClients = async (): Promise<ClientProps[]> => {
  const response = await InstanciaAxios.get<ClientProps[]>(
    CLIENTS_ENDPOINT.list
  );
  return response.data;
};

export const CreateClient = async (data: Partial<ClientProps>) => {
  const response = await InstanciaAxios.post(CLIENTS_ENDPOINT.register, data);
  return response.data;
};

export const UpdateClient = async (id: string, data: Partial<ClientProps>) => {
  const response = await InstanciaAxios.put(
    `${CLIENTS_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
