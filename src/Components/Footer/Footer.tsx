export function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-2 fixed-bottom">
      <div className="container-fluid">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Gestor de Presupuestos. Todos los
          derechos reservados. Hecho por Carla Beceiro, Gianluca Tsiorlani,
          Ordoñez Emanuel
        </p>
      </div>
    </footer>
  );
}
