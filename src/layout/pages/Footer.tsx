import { PORTAFOLIO_CARLA } from '../../utils/config';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Accesorios Diamante. Todos los
          derechos reservados. Desarrollado por{' '}
          <a
            href={PORTAFOLIO_CARLA}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__item"
          >
            Beceiro Carla
          </a>
          , Tsiorlani Gianluca, Ordoñez Emanuel
        </p>
      </div>
    </footer>
  );
}
