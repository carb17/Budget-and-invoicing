import { Navbar } from "../../components/layout/navbar/Navbar";
import { OpcionesMenu } from "../../components/layout/menu/OpcionesMenu";
import { Footer } from "../../components/layout/footer/Footer";
import { useClientes } from "../../hooks/clients/useClientes";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export function Clientes() {
  const { clients, loading, error } = useClientes();
  const navigate = useNavigate();

  if (loading) {
    return <div>Cargando clientes...</div>;
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
          <Button onClick={() => navigate("/Cliente")}>Agregar cliente</Button>
        </div>
        <table className="table w-50 mx-auto">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td>{client.dni}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.birth}</td>
                <td>{client.address}</td>
                <td>{client.phone_number}</td>
                <td>{client.email}</td>

                <td>
                  <Button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      navigate(`/Cliente/${client._id}`, {
                        state: { client },
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
