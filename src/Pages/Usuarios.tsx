import { useEffect, useState } from "react";
import axios from "axios";

interface Usuario {
  _id: string;
  email: string;
  role: string;
}

export function Usuarios() {
  const [users, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<Usuario[]>("https://api-users-5dni.onrender.com/users/users")
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
    <div className="m-3 p-3">
      <table className="table w-50 mx-auto">
        <thead>
          <tr>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{users.email}</td>
              <td>{users.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
