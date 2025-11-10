import { Layout } from '../../layout/pages/Layout';
import { useClients } from './hooks/UseClients';
import { Button } from '../../components/common/buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Clients() {
  const { clients, loading, error } = useClients();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className="text-center">Cargando clientes...</div>
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
              onClick={() => navigate('/Client')}
              className="btn btn-primary"
              text="Agregar cliente"
            ></Button>
          </div>
          <table className="table w-50 mx-auto mx-3">
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
                      icon={<FontAwesomeIcon icon={faEdit} />}
                      onClick={() => {
                        navigate(`/Client/${client._id}`, {
                          state: { client },
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
