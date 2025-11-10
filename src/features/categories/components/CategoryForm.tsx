import { Button } from '../../../components/common/buttons/Buttons';
import { useState, useEffect } from 'react';
import { CategoryFormProps } from '../types/types';

export function CategoryForm({ initialData, onSubmit }: CategoryFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCode(initialData.code);
      setActive(initialData.active);
    } else {
      setName('');
      setDescription('');
      setCode('');
      setActive(false);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
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
