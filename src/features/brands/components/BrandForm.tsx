import { useState, useEffect } from 'react';

import { Button } from '../../../components/common/buttons/Buttons';

import { BrandFormProps } from '../types/types';

export function BrandForm({ initialData, onSubmit }: BrandFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setActive(initialData.active);
    } else {
      setName('');
      setDescription('');
      setActive(false);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      active,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='brands__form'>
      <div className=''>
        <label className='brands__label'>Nombre</label>
        <input
          type='text'
          className='brands__input'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className='brands__label'>Descripción</label>
        <input
          type='text'
          className='brands__input'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='brands__label'>Estado</label>
        <select
          className='brands__select'
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
        className='brands__btn brands__btn--save'
        text='Guardar'
      ></Button>
    </form>
  );
}
