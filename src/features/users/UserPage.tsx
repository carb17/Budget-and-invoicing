import { Layout } from "../../layout/Layout";
import { useUsers } from "./hooks/UseUsers";
import { Button } from "../../components/common/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export function Users() {
  const { users, loading, error } = useUsers();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className="text-center">Cargando usuarios...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <div className="m-3 p-3">
          <div className="d-flex justify-content-end mb-3">
            <Button
              onClick={() => navigate("/User")}
              text="Agregar usuario"
              className="btn btn-primary"
            ></Button>
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
                      icon={<FontAwesomeIcon icon={faEdit} />}
                      onClick={() => {
                        navigate(`/User/${user._id}`, {
                          state: { user },
                        });
                      }}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
