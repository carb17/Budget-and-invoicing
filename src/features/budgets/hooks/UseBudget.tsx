import { useEffect, useState } from 'react';
import { BudgetProps } from '../types/types';
import {
  FetchBudget,
  CreateBudget,
  UpdateBudget,
} from '../services/BudgetService';

export function useBudget(_id: string | undefined) {
  const [budget, setBudget] = useState<BudgetProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getBudget = async () => {
      setLoading(true);
      setError('');
      if (_id) {
        try {
          const data = await FetchBudget(_id);
          setBudget(data);
        } catch (err) {
          console.error('Error al obtener el presupuesto:', err);
          setError('No se pudo cargar el presupuesto.');
        }
      } else {
        setBudget(undefined);
      }
      setLoading(false);
    };

    getBudget();
  }, [_id]);

  const saveBudget = async (data: Partial<BudgetProps>) => {
    try {
      if (_id) {
        await UpdateBudget(_id, data);
      } else {
        await CreateBudget(data);
      }
    } catch (err) {
      console.error('Error al guardar el presupuesto:', err);
      setError('No se pudo guardar el presupuesto.');
    }
  };

  return { budget, saveBudget, loading, error };
}
