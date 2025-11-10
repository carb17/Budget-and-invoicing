import { Button } from '../../../components/common/buttons/Buttons';
import { useState, useEffect } from 'react';
import { ClientFormProps } from '../types/types';

export function ClientForm({ initialData, onSubmit }: ClientFormProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dni, setDNI] = useState<number>(0);
  const [address, setAddress] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setSurname(initialData.surname);
      setDNI(initialData.dni);
      setAddress(initialData.address);
      setPhone_number(initialData.phone_number);
      setActive(initialData.active);
    } else {
      setName('');
      setSurname('');
      setDNI(0);
      setAddress('');
      setPhone_number('');
      setActive(false);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      surname,
      dni,
      address,
      phone_number,
      active,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='clients__form'>
      <div className=''>
        <label className='clients__label'>Nombre</label>
        <input
          type='text'
          className='clients__input'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='clients__label'>Apellido</label>
        <input
          type='text'
          className='clients__input'
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='clients__label'>DNI</label>
        <input
          type='text'
          className='clients__input'
          value={dni}
          required
          onChange={(e) => setDNI(Number(e.target.value))}
        />
      </div>

      <div className=''>
        <label className='clients__label'>Dirección</label>
        <input
          type='text'
          className='clients__input'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='clients__label'>Número de teléfono</label>
        <input
          type='text'
          className='clients__input'
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
      </div>

      <div className=''>
        <label className='clients__label'>Estado</label>
        <select
          className='clients__select'
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
        className='clients__btn clients__btn--save'
        text='Guardar'
      ></Button>
    </form>
  );
}
