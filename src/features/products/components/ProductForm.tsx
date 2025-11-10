import { useState, useEffect } from 'react';

import { ProductFormProps } from '../types/types';

import { Button } from '../../../components/common/buttons/Buttons';

import { useCategories } from '../../categories/hooks/UseCategories';
import { useBrands } from '../../brands/hooks/UseBrands';

export function ProductForm({ initialData, onSubmit }: ProductFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [purchase_price, setPurchasePrice] = useState<number>(0);
  const [sale_price, setSalePrice] = useState<number>(0);
  const [current_stock, setCurrentStock] = useState<number>(0);
  const [min_stock, setMinStock] = useState<number>(1);
  const [unit_measurement, setUnitMeasurement] = useState('');
  const [code, setCode] = useState('');
  const [active, setActive] = useState<boolean>(false);

  const { categories } = useCategories();
  const { brands } = useBrands();

  // ========= CARGAR DATOS SI SE ESTÁ EDITANDO =========
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setBrand(initialData.brand);
      setPurchasePrice(initialData.purchase_price);
      setSalePrice(initialData.sale_price);
      setCurrentStock(initialData.current_stock);
      setMinStock(initialData.min_stock);
      setUnitMeasurement(initialData.unit_measurement);
      setCode(initialData.code);
      setActive(initialData.active);
    } else {
      setName('');
      setDescription('');
      setCategory('');
      setBrand('');
      setPurchasePrice(0);
      setSalePrice(0);
      setCurrentStock(0);
      setMinStock(1);
      setUnitMeasurement('');
      setCode('');
      setActive(false);
    }
  }, [initialData]);

  // ========= ENVIAR FORMULARIO =========
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      category: String(category),
      brand: String(brand),
      purchase_price,
      sale_price,
      current_stock,
      min_stock,
      unit_measurement,
      code,
      active,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='products__form'>
      <div className=''>
        <label className='products__label'>Nombre</label>
        <input
          type='text'
          className='products__input'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className='products__label'>Descripción</label>
        <input
          type='text'
          className='products__input'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className='products__label'>Categoría</label>
        <select
          className='products__select'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value=''>Seleccionar...</option>
          {categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className='products__label'>Marca</label>
        <select
          className='products__select'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        >
          <option value=''>Seleccionar...</option>
          {brands?.map((b) => (
            <option key={b._id} value={b._id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      <div className=''>
        <label className='products__label'>Precio de compra</label>
        <input
          type='text'
          className='products__input'
          value={purchase_price}
          required
          onChange={(e) => setPurchasePrice(Number(e.target.value))}
        />
      </div>

      <div className=''>
        <label className='products__label'>Precio de venta</label>
        <input
          type='text'
          className='products__input'
          value={sale_price}
          onChange={(e) => setSalePrice(Number(e.target.value))}
        />
      </div>

      <div className=''>
        <label className='products__label'>Stock actual</label>
        <input
          type='text'
          className='products__input'
          value={current_stock}
          onChange={(e) => setCurrentStock(Number(e.target.value))}
        />
      </div>

      <div className=''>
        <label className='products__label'>Stock minimo</label>
        <input
          type='text'
          className='products__input'
          value={min_stock}
          onChange={(e) => setMinStock(Number(e.target.value))}
        />
      </div>

      <div>
        <label className='products__label'>Unidad de medida</label>
        <select
          className='products__select'
          value={unit_measurement}
          onChange={(e) => setUnitMeasurement(e.target.value)}
          required
        >
          <option value=''>Seleccionar...</option>
          <option value='u'>Unidad</option>
          <option value='kg'>Kilogramo (kg)</option>
          <option value='g'>Gramo (g)</option>
          <option value='l'>Litro (L)</option>
          <option value='ml'>Mililitro (ml)</option>
          <option value='m'>Metro (m)</option>
          <option value='cm'>Centímetro (cm)</option>
        </select>
      </div>

      <div className=''>
        <label className='products__label'>Código</label>
        <input
          type='text'
          className='products__input'
          value={code}
          required
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='products__label'>Estado</label>
        <select
          className='products__select'
          value={String(active)}
          onChange={(e) => setActive(e.target.value === 'true')}
          required
        >
          <option value=''>Seleccionar...</option>
          <option value='true'>Activo</option>
          <option value='false'>Inactivo</option>
        </select>
      </div>

      <Button
        type='submit'
        className='products__btn products__btn--save'
        text='Guardar'
      ></Button>
    </form>
  );
}
