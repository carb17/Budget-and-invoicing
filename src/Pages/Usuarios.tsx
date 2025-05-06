import { Navbar } from "../Components/Navbar/Navbar";
import { OpcionesMenu } from "../Components/Menu/OpcionesMenu";
import { Footer } from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { UsuarioProps } from "../Props/Props";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export function Usuarios() {
  const [users, setUsuarios] = useState<UsuarioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<UsuarioProps[]>("https://api-users-5dni.onrender.com/users/users")
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
              {users.map((users, index) => (
                <tr key={index}>
                  <td>{users.email}</td>
                  <td>{users.role}</td>
                  <td>
                    <Button type="submit">
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
