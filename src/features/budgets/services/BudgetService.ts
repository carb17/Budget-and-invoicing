import { InstanciaAxios } from '../../../lib/axios';
import { BUDGETS_ENDPOINT } from '../../../lib/apiConfig';

import { BudgetProps } from '../types/types';

export const FetchBudget = async (id: string): Promise<BudgetProps> => {
  const response = await InstanciaAxios.get<BudgetProps>(
    `${BUDGETS_ENDPOINT.base}${id}`
  );
  return response.data;
};

export const FetchBudgets = async (): Promise<BudgetProps[]> => {
  const response = await InstanciaAxios.get<BudgetProps[]>(
    BUDGETS_ENDPOINT.list
  );
  return response.data;
};

export const CreateBudget = async (data: Partial<BudgetProps>) => {
  const response = await InstanciaAxios.post(BUDGETS_ENDPOINT.register, data);
  return response.data;
};

export const UpdateBudget = async (id: string, data: Partial<BudgetProps>) => {
  const response = await InstanciaAxios.put(
    `${BUDGETS_ENDPOINT.base}${id}`,
    data
  );
  return response.data;
};
