import { useEffect, useState } from 'react';

import { BrandProps } from '../types/types';

import { FetchBrands } from '../services/BrandService';

export function useBrands() {
  const [brands, setBrands] = useState<BrandProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getBrands = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await FetchBrands();
        setBrands(data);
      } catch (err) {
        setError('No se pudieron cargar las marcas');
      } finally {
        setLoading(false);
      }
    };

    getBrands();
  }, []);

  return { brands, loading, error };
}
