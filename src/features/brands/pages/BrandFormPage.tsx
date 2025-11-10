import { Layout } from '../../../layout/pages/Layout';

import { useNavigate, useParams } from 'react-router-dom';

import { BrandForm } from '../components/BrandForm';

import { useBrand } from '../hooks/UseBrand';

export function BrandFormPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { brand, saveBrand, loading } = useBrand(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await saveBrand(data);
    } else {
      await saveBrand(data);
    }
    navigate('/Brands');
  };

  return (
    <>
      <Layout>
        <div className='container mt-4'>
          <h2 className='text-center mb-3'>
            {_id ? 'Editar marca' : 'Agregar marca'}
          </h2>
          {loading ? (
            <div>Cargando marca...</div>
          ) : (
            <BrandForm initialData={brand} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
