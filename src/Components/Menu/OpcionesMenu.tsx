import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faFileInvoiceDollar,
  faFlag,
  faPlus,
  faUser,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
export function OpcionesMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed vh-100">
        <div className="container-fluid d-flex flex-column">
          <Link
            className="nav-link active fs-4 mt-3"
            aria-current="page"
            to="/Menu"
          >
            Menú
          </Link>
          <div
            className="collapse navbar-collapse show"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav flex-column">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Usuarios"
              >
                <FontAwesomeIcon icon={faUser} /> Usuarios
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Clientes"
              >
                <FontAwesomeIcon icon={faUsers} /> Clientes
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Productos"
              >
                <FontAwesomeIcon icon={faWrench} /> Productos
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Marcas"
              >
                <FontAwesomeIcon icon={faFlag} /> Marcas
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Presupuestos"
              >
                <FontAwesomeIcon icon={faFileInvoiceDollar} /> Presupuestos
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Facturas"
              >
                <FontAwesomeIcon icon={faFileInvoice} /> Facturas
              </Link>
              <hr />
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Nuevopresupuesto"
              >
                <FontAwesomeIcon icon={faPlus} /> Nuevo presupuesto
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
