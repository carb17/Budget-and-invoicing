import { Navbar } from "../../Components/Navbar/Navbar";
import { OpcionesMenu } from "../../Components/Menu/OpcionesMenu";
import { Footer } from "../../Components/Footer/Footer";
import { useUsuarios } from "../../Hooks/useUsuarios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export function Usuarios() {
  const { users, loading, error } = useUsuarios();
  const navigate = useNavigate();

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <OpcionesMenu />
      <div className="m-3 p-3">
        <div className="d-flex justify-content-end mb-3">
          <Button onClick={() => navigate("/Usuario")}>Agregar usuario</Button>
        </div>
        <table className="table w-50 mx-auto">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      navigate(`/Usuario/${user._id}`, {
                        state: { user },
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
