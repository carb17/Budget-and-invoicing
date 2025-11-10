import { useEffect, useState } from 'react';

import { CategoryProps } from '../types/types';

import {
  FetchCategory,
  CreateCategory,
  UpdateCategory,
} from '../services/CategoryService';

export function useCategory(_id: string | undefined) {
  const [category, setCategory] = useState<CategoryProps | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      setError('');
      if (_id) {
        try {
          const data = await FetchCategory(_id);
          setCategory(data);
        } catch (err) {
          console.error('Error al obtener categoria:', err);
          setError('No se pudo cargar la categoria.');
        }
      } else {
        setCategory(undefined);
      }
      setLoading(false);
    };

    getCategory();
  }, [_id]);

  const saveCategory = async (data: Partial<CategoryProps>) => {
    try {
      if (_id) {
        await UpdateCategory(_id, data);
      } else {
        await CreateCategory(data);
      }
    } catch (err) {
      console.error('Error al guardar categoria:', err);
      setError('No se pudo guardar la categoria.');
    }
  };

  return { category, saveCategory, loading, error };
}
