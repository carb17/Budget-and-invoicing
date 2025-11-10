import { useEffect, useState } from 'react';

import { BrandProps } from '../types/types';

import { FetchBrand, CreateBrand, UpdateBrand } from '../services/BrandService';

export function useBrand(_id: string | undefined) {
  const [brand, setBrand] = useState<BrandProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getBrand = async () => {
      setLoading(true);
      setError('');
      if (_id) {
        try {
          const data = await FetchBrand(_id);
          setBrand(data);
        } catch (err) {
          console.error('Error al obtener marca:', err);
          setError('No se pudo cargar la marca.');
        }
      } else {
        setBrand(undefined);
      }
      setLoading(false);
    };

    getBrand();
  }, [_id]);

  const saveBrand = async (data: Partial<BrandProps>) => {
    try {
      if (_id) {
        await UpdateBrand(_id, data);
      } else {
        await CreateBrand(data);
      }
    } catch (err) {
      console.error('Error al guardar marca:', err);
      setError('No se pudo guardar la marca.');
    }
  };

  return { brand, saveBrand, loading, error };
}
