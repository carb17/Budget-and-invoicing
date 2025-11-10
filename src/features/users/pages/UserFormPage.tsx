import { Layout } from '../../../layout/pages/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { useUsuario } from '../hooks/UseUser';

export function UserFormPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { user, saveUser, loading } = useUsuario(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      console.log('ID recibido en UserForm:', _id);

      await saveUser(data);
    } else {
      await saveUser(data);
    }
    navigate('/Users');
  };

  return (
    <>
      <Layout>
        <div className='container mt-4'>
          <h2 className='text-center mb-3'>
            {_id ? 'Editar usuario' : 'Agregar usuario'}
          </h2>
          {loading ? (
            <Layout>
              <div>Cargando usuario...</div>
            </Layout>
          ) : (
            <UserForm initialData={user} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
