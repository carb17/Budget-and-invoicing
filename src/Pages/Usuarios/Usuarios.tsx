import { Navbar } from "../../Components/Navbar/Navbar";
import { OpcionesMenu } from "../../Components/Menu/OpcionesMenu";
import { Footer } from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { InstanciaAxios } from "../../Services/InstanciaAxios";
import { UsuarioProps } from "../../Props/Props";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export function Usuarios() {
  const [users, setUsuarios] = useState<UsuarioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    InstanciaAxios.get<UsuarioProps[]>("/users/users")
      .then((res) => {
        setUsuarios(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los usuarios");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <OpcionesMenu />
      <div className="m-3 p-3">
        <div className="d-flex justify-content-end mb-3">
          <Button onClick={() => navigate("/Usuario")}>Agregar usuario</Button>
        </div>
        {!error && (
          <table className="table w-50 mx-auto">
            <thead>
              <tr>
                <th>Email</th>
                <th>Rol</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button
                      type="button"
                      className="btn btn-warning"
                      onClick={() =>
                        navigate(`/usuario/${user._id}`, {
                          state: { usuario: user },
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
