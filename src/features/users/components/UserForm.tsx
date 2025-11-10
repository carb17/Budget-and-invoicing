import { useState, useEffect } from 'react';

import { Button } from '../../../components/common/buttons/Buttons';

import { UserFormProps } from '../types/types';

export function UserForm({ initialData, onSubmit }: UserFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log('Datos recibidos en UserForm:', initialData);
    if (initialData) {
      setEmail(initialData.email);
      setPassword('');
      setRole(initialData.role);
    } else {
      setEmail('');
      setRole('');
      setPassword('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, role });
  };

  return (
    <form onSubmit={handleSubmit} className='users__form'>
      <div className=''>
        <label className='users__label'>Correo</label>
        <input
          type='email'
          className='users__input'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className=''>
        <label className='users__label'>Contraseña</label>
        <input
          type='password'
          className='users__input'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=''>
        <label className='users__label'>Rol</label>
        <input
          type='text'
          className='users__input'
          value={role}
          required
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <Button
        type='submit'
        text='Guardar'
        className='users__btn users__btn--save'
      ></Button>
    </form>
  );
}
