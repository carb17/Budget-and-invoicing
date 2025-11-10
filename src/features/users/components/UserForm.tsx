import { Button } from '../../../components/common/buttons/Buttons';
import { useState, useEffect } from 'react';
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
    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
      <div className='mb-3'>
        <label className='form-label'>Correo:</label>
        <input
          type='email'
          className='form-control'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Contraseña:</label>
        <input
          type='password'
          className='form-control'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Rol:</label>
        <input
          type='text'
          className='form-control'
          value={role}
          required
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <Button
        type='submit'
        text='Guardar'
        className='btn btn-primary w-100'
      ></Button>
    </form>
  );
}
