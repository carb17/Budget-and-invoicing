import { Layout } from '../../../layout/pages/Layout';

import { useNavigate, useParams } from 'react-router-dom';

import { CategoryForm } from '../components/CategoryForm';

import { useCategory } from '../hooks/UseCategory';

export function CategoryFormPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { category, saveCategory, loading } = useCategory(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await saveCategory(data);
    } else {
      await saveCategory(data);
    }
    navigate('/Categories');
  };

  return (
    <>
      <Layout>
        <div className='container mt-4'>
          <h2 className='text-center mb-3'>
            {_id ? 'Editar categoria' : 'Agregar categoria'}
          </h2>
          {loading ? (
            <div>Cargando categoria...</div>
          ) : (
            <CategoryForm initialData={category} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
