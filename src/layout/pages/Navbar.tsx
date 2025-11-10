import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileInvoice,
  faFileInvoiceDollar,
  faFlag,
  faPlus,
  faUser,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar__container'>
          <NavLink className='navbar__item' to='/Home'>
            Menú
          </NavLink>

          <NavLink className='navbar__item' to='/Users'>
            <FontAwesomeIcon className='navbar__icon' icon={faUser} /> Usuarios
          </NavLink>

          <NavLink className='navbar__item' to='/Clients'>
            <FontAwesomeIcon className='navbar__icon' icon={faUsers} /> Clientes
          </NavLink>

          <NavLink className='navbar__item' to='/Products'>
            <FontAwesomeIcon className='navbar__icon' icon={faWrench} />{' '}
            Productos
          </NavLink>

          <NavLink className='navbar__item' to='/Brands'>
            <FontAwesomeIcon className='navbar__icon' icon={faFlag} /> Marcas
          </NavLink>

          <NavLink className='navbar__item' to='/Budgets'>
            <FontAwesomeIcon
              className='navbar__icon'
              icon={faFileInvoiceDollar}
            />{' '}
            Presupuestos
          </NavLink>

          <NavLink className='navbar__item' to='/Invoices'>
            <FontAwesomeIcon className='navbar__icon' icon={faFileInvoice} />{' '}
            Facturas
          </NavLink>

          <hr className='navbar__divider' />
          <NavLink className='navbar__item' to='/NewBudget'>
            <FontAwesomeIcon className='navbar__icon' icon={faPlus} /> Nuevo
            presupuesto
          </NavLink>
          <hr className='navbar__divider' />
        </div>
      </div>
    </>
  );
}
