import "../styles/styles.css";

import { Link } from "react-router-dom";
import { IconBTO } from "../../components/galery/Galery";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { fncSweetAlert } from "../../utils/alerts";

export function Navbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "";
    setUserEmail(email);
  }, []);

  const handleLogout = async () => {
    const confirmed = await fncSweetAlert(
      "confirm",
      "¿Está seguro que desea cerrar sesión?"
    );
    if (confirmed) {
      fncSweetAlert("loading", "Cerrando sesión...");
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        fncSweetAlert("success", "Sesión cerrada correctamente");
        navigate("/", {
          state: { mensaje: "Sesión cerrada correctamente" },
        });
      }, 1000);
    }
  };

  return (
    <nav className="navbar top-navbar">
      <div className="container-fluid">
        <Link to="/Home">
          <IconBTO />
        </Link>

        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Bienvenido {userEmail ? userEmail : "!"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} /> Salir
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
