import { Layout } from '../../../layout/pages/Layout';

import { useNavigate, useParams } from 'react-router-dom';

import { ProductForm } from '../components/ProductForm';

import { useProduct } from '../hooks/UseProduct';

export function ProductFormPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { product, saveProduct, loading } = useProduct(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await saveProduct(data);
    } else {
      await saveProduct(data);
    }
    navigate('/Products');
  };

  return (
    <>
      <Layout>
        <div className='container mt-4'>
          <h2 className='text-center mb-3'>
            {_id ? 'Editar producto' : 'Agregar producto'}
          </h2>
          {loading ? (
            <div>Cargando producto...</div>
          ) : (
            <ProductForm initialData={product} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
