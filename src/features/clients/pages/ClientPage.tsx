import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useClients } from '../hooks/UseClients';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Clients() {
  const { clients, loading, error } = useClients();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando clientes...</div>
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
        <div className='clients'>
          <Button
            onClick={() => navigate('/Client')}
            className='clients__btn'
            text='Agregar cliente'
          ></Button>

          <table className='clients__table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id}>
                  <td>{client.name}</td>
                  <td>{client.surname}</td>
                  <td>{client.dni}</td>
                  <td>{client.address}</td>
                  <td>{client.phone_number}</td>
                  <td>{client.active ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <Button
                      type='button'
                      className='clients__btn clients__btn--edit'
                      icon={faEdit}
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
