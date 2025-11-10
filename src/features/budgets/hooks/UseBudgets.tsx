import { useEffect, useState } from 'react';

import { BudgetProps } from '../types/types';

import { FetchBudgets } from '../services/BudgetService';

export function useBudgets() {
  const [budgets, setBudgets] = useState<BudgetProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getBudgets = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await FetchBudgets();
        setBudgets(data);
      } catch (err) {
        setError('No se pudieron cargar los presupuestos');
      } finally {
        setLoading(false);
      }
    };

    getBudgets();
  }, []);

  return { budgets, loading, error };
}
