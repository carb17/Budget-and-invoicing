import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useBrands } from '../hooks/UseBrands';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Brands() {
  const { brands, loading, error } = useBrands();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando marcas...</div>
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
        <div className='brands'>
          <Button
            onClick={() => navigate('/Brand')}
            className='brands__btn'
            text='Agregar marca'
          ></Button>

          <table className='brands__table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand._id}>
                  <td>{brand.name}</td>
                  <td>{brand.description}</td>
                  <td>{brand.active ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <Button
                      type='button'
                      className='brands__btn brands__btn--edit'
                      icon={faEdit}
                      onClick={() => {
                        navigate(`/Brand/${brand._id}`, {
                          state: { brand },
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
