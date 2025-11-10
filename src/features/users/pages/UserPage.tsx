import { useNavigate } from 'react-router-dom';

import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useUsers } from '../hooks/UseUsers';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Users() {
  const { users, loading, error } = useUsers();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando usuarios...</div>
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
        <div className='users'>
          <Button
            onClick={() => navigate('/User')}
            text='Agregar usuario'
            className='users__btn'
          ></Button>
          <div className='users__content'></div>
          <table className='users__table'>
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
                      type='button'
                      className='users__btn users__btn--edit'
                      icon={faEdit}
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
