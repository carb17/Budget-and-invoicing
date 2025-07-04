import "../styles/styles.css";

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

export function Menu() {
  return (
    <>
      <nav className="sidebar d-none d-md-flex flex-column p-3">
        <Link className="nav-link fs-4 mb-3" aria-current="page" to="/Home">
          Menú
        </Link>

        <Link className="nav-link mb-3" aria-current="page" to="/Users">
          <FontAwesomeIcon icon={faUser} /> Usuarios
        </Link>
        <Link className="nav-link mb-3" aria-current="page" to="/Clients">
          <FontAwesomeIcon icon={faUsers} /> Clientes
        </Link>
        <Link className="nav-link mb-3" aria-current="page" to="/Products">
          <FontAwesomeIcon icon={faWrench} /> Productos
        </Link>
        <Link className="nav-link mb-3" aria-current="page" to="/Brands">
          <FontAwesomeIcon icon={faFlag} /> Marcas
        </Link>
        <Link className="nav-link mb-3" aria-current="page" to="/Budgets">
          <FontAwesomeIcon icon={faFileInvoiceDollar} /> Presupuestos
        </Link>
        <Link className="nav-link mb-3" aria-current="page" to="/Invoices">
          <FontAwesomeIcon icon={faFileInvoice} /> Facturas
        </Link>
        <hr />
        <Link className="nav-link mb-3" aria-current="page" to="/NewBudget">
          <FontAwesomeIcon icon={faPlus} /> Nuevo presupuesto
        </Link>
        <hr />
      </nav>
    </>
  );
}
