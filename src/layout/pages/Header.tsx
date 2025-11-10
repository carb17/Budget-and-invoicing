import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fncSweetAlert } from '../../utils/alerts';
import { Button } from '../../components/common/buttons/Buttons';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || '';
    setUserEmail(email);
  }, []);

  const handleLogout = async () => {
    const confirmed = await fncSweetAlert(
      'confirm',
      '¿Está seguro que desea cerrar sesión?'
    );

    if (confirmed) {
      fncSweetAlert('loading', 'Cerrando sesión...');
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        fncSweetAlert('success', 'Sesión cerrada correctamente');
        window.location.href = '/';
      }, 1000);
    }
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <NavLink to='/Home'>
          <img src='./BTO.jpeg' className='header__logo' />
        </NavLink>

        <div className='header__dropdown'>
          <Button
            className='header__btn'
            onClick={() => setIsOpen(!isOpen)}
            text={`Bienvenido ${userEmail ? userEmail : '!'}`}
          />

          {isOpen && (
            <ul className='header__menu'>
              <li className='header__menu-item'>
                <Button
                  onClick={handleLogout}
                  className='header__btn header__btn--item'
                  text='Salir'
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
