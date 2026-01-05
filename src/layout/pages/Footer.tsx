import { PORTAFOLIO_CARLA } from '../../utils/config';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          © {new Date().getFullYear()} Accesorios Diamante · Desarrollo web:{' '}
          <a
            href={PORTAFOLIO_CARLA}
            target='_blank'
            rel='noopener noreferrer'
            className='footer__item'
          >
            Beceiro Carla
          </a>
        </p>
      </div>
    </footer>
  );
}
