import { Footer } from '../../../layout/pages/Footer.tsx';
import { Button } from '../../../components/common/buttons/Buttons.tsx';
import { useState } from 'react';
import { useLogin } from '../hooks/UseLogin.tsx';
import { fncSweetAlert } from '../../../utils/alerts.ts';

import '../../styles/features.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, mensaje } = useLogin();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    fncSweetAlert('loading', 'Comprobando los datos ingresados');

    try {
      await handleLogin(email, password);
      fncSweetAlert('success', 'Inicio de sesión exitoso');
    } catch (error: any) {
      const mensajeError =
        error.message || error.response?.data?.message || 'Ocurrió un error';
      fncSweetAlert('error', mensajeError);
    } finally {
      fncSweetAlert('close', 'Cerrando sesión...');
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src='./BTO.jpeg' className='login__logo' />
        <h1 className='login__title'>Sistema de Gestión de Presupuestos</h1>
        <form onSubmit={onSubmit} className='login__form'>
          <div className='login__field'>
            <input
              type='email'
              className='login__input login__input--email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='InputEmail'
              placeholder='Correo'
              required
            />
          </div>
          <div className='login__field'>
            <input
              type='password'
              className='login__input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='InputPassword'
              placeholder='Contraseña'
              required
            />
          </div>
          <Button type='submit' className='login__btn' text='Ingresar' />
        </form>
        {mensaje && <div className=''>{mensaje}</div>}
      </div>
      <div className='login__footer'>
        <Footer />
      </div>
    </div>
  );
}
