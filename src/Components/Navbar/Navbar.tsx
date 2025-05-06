import { IconBTO } from "../Galery/Galery.tsx";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", {
      state: { mensaje: "Sesión cerrada correctamente ✅" },
    });
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <IconBTO />
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Bienvenido ...{" "}
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
