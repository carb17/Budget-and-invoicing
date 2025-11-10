import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useCategories } from '../hooks/UseCategories';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Categories() {
  const { categories, loading, error } = useCategories();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando categorias...</div>
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
        <div className='categories'>
          <Button
            onClick={() => navigate('/Category')}
            className='categories__btn'
            text='Agregar categoria'
          ></Button>

          <table className='categories__table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Código</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.active ? 'Activo' : 'Inactivo'}</td>
                  <td>{category.code}</td>
                  <td>
                    <Button
                      type='button'
                      className='categories__btn categories__btn--edit'
                      icon={faEdit}
                      onClick={() => {
                        navigate(`/Category/${category._id}`, {
                          state: { category },
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
