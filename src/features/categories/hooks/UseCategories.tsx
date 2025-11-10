import { useEffect, useState } from 'react';
import { CategoryProps } from '../types/types';
import { FetchCategories } from '../services/CategoryService';

export function useCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await FetchCategories();
        setCategories(data);
      } catch (err) {
        setError('No se pudieron cargar las categorias');
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  return { categories, loading, error };
}
