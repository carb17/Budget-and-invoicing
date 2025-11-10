import { useEffect, useState } from 'react';
import { ProductProps } from '../types/types';
import {
  FetchProduct,
  CreateProduct,
  UpdateProduct,
} from '../services/ProductService';

export function useProduct(_id: string | undefined) {
  const [product, setProduct] = useState<ProductProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError('');
      if (_id) {
        try {
          const data = await FetchProduct(_id);
          setProduct(data);
        } catch (err) {
          console.error('Error al obtener producto:', err);
          setError('No se pudo cargar el producto.');
        }
      } else {
        setProduct(undefined);
      }
      setLoading(false);
    };

    getProduct();
  }, [_id]);

  const saveProduct = async (data: Partial<ProductProps>) => {
    try {
      if (_id) {
        await UpdateProduct(_id, data);
      } else {
        await CreateProduct(data);
      }
    } catch (err) {
      console.error('Error al guardar producto:', err);
      setError('No se pudo guardar el producto.');
    }
  };

  return { product, saveProduct, loading, error };
}
