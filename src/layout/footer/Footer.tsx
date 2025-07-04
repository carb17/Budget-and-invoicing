import { PORTAFOLIO_CARLA } from "../../utils/config";

export function Footer() {
  return (
    <footer className="text-secondary py-2">
      <div className="container d-flex justify-content-center">
        <p className="mb-0 text-center">
          &copy; {new Date().getFullYear()} Accesorios Diamante. Desarrollado
          por{" "}
          <a
            href={PORTAFOLIO_CARLA}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-danger developer-name"
          >
            Beceiro Carla
          </a>
          , Gianluca Tsiorlani, Ordoñez Emanuel
        </p>
      </div>
    </footer>
  );
}
