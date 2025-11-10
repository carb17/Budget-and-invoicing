import { useState, useEffect } from 'react';

import { BudgetFormProps, ProductItem } from '../types/types';

import { Button } from '../../../components/common/buttons/Buttons';

import { useClients } from '../../clients/hooks/UseClients';
import { useProducts } from '../../products/hooks/UseProducts';

export function BudgetForm({ initialData, onSubmit }: BudgetFormProps) {
  const [client, setClient] = useState('');
  const [product, setProduct] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [status, setStatus] = useState<
    'pending' | 'approved' | 'expired' | 'invoiced'
  >('pending');
  const [expirationDate, setExpirationDate] = useState('');

  const { clients } = useClients();
  const { products } = useProducts();

  // ========= CARGAR DATOS SI SE ESTÁ EDITANDO =========
  useEffect(() => {
    if (initialData) {
      setClient(initialData.client);
      setSelectedProducts(initialData.products);
      setTotal(initialData.total);
      setStatus(initialData.status);
      setExpirationDate(
        initialData.expirationDate
          ? new Date(initialData.expirationDate).toISOString().split('T')[0]
          : ''
      );
    } else {
      setClient('');
      setSelectedProducts([]);
      setTotal(0);
      setStatus('pending');
      setExpirationDate('');
    }
  }, [initialData]);

  // ========= ACTUALIZA EL TOTAL AUTOMATICAMENTE =========
  useEffect(() => {
    const newTotal = selectedProducts.reduce(
      (acc, p) => acc + p.quantity * p.price,
      0
    );
    setTotal(newTotal);
  }, [selectedProducts]);

  // ========= AGREGAR EL PRODUCTO SELECCIONADO =========
  const handleAddProduct = (productId: string) => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const newProduct: ProductItem = {
        product: product._id!,
        quantity: 1,
        price: product.sale_price,
        subtotal: product.sale_price,
      };
      setSelectedProducts([...selectedProducts, newProduct]);
    }
  };

  // ========= CAMBIOS DE CANTIDAD =========
  const handleQuantityChange = (index: number, quantity: number) => {
    const updated = [...selectedProducts];
    updated[index].quantity = quantity;
    updated[index].subtotal = quantity * updated[index].price;
    setSelectedProducts(updated);
  };

  //   ========= ENVIAR FORMULARIO =========
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      client,
      products: selectedProducts,
      total,
      status,
      expirationDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='budgets__form'>
      {/* ========= CLIENTE ========= */}
      <div>
        <label className='budgets__label'>Cliente</label>
        <select
          className='budgets__select'
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        >
          <option value=''>Seleccionar...</option>
          {clients?.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name} {c.surname} {c.dni}
            </option>
          ))}
        </select>
      </div>
      {/* ========= PRODUCTO ========= */}
      <div>
        <label className='budgets__label'>Producto</label>
        <select
          className='budgets__select'
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          <option value=''>Seleccionar...</option>
          {products?.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name} {p.brand} {p.sale_price}
            </option>
          ))}
        </select>
        <Button
          type='button'
          text='Agregar producto'
          onClick={() => handleAddProduct(product)}
          className='budgets__btn budgets__btn--add'
        />
      </div>
      {/*  ========= PRODUCTOS SELECCIONADOS ========= */}
      {selectedProducts.map((p, index) => (
        <div key={index} className='budgets__product'>
          <span>{products.find((prod) => prod._id === p.product)?.name}</span>
          <input
            type='number'
            min='1'
            value={p.quantity}
            onChange={(e) =>
              handleQuantityChange(index, Number(e.target.value))
            }
          />
          <span>${p.subtotal.toFixed(2)}</span>
        </div>
      ))}
      {/* ========= TOTAL ========= */}
      <div>
        <label className='budgets__label'>Total</label>
        <input
          type='number'
          className='budgets__input'
          value={total}
          readOnly
        />
      </div>
      {/*  ========= ESTADO ========= */}
      <div className=''>
        <label className='budgets__label'>Estado</label>
        <select
          className='budgets__select'
          value={String(status)}
          onChange={(e) =>
            setStatus(
              e.target.value as 'pending' | 'approved' | 'expired' | 'invoiced'
            )
          }
          required
        >
          <option value=''>Seleccionar...</option>
          <option value='pending'> Pendiente</option>
          <option value='approved'> Aprobado</option>
          <option value='expired'> Vencido</option>
          <option value='invoiced'> Facturado</option>
        </select>
      </div>
      {/* ========= FECHA DE VENCIMIENTO ========= */}
      <div>
        <label className='budgets__label'>Fecha de vencimiento</label>
        <input
          type='date'
          className='budgets__input'
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />
      </div>
      {/* ========= BOTÓN ========= */}
      <Button
        type='submit'
        className='budgets__btn budgets__btn--save'
        text='Guardar'
      ></Button>
    </form>
  );
}
