import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useProducts } from '../hooks/UseProducts';
import { useCategories } from '../../categories/hooks/UseCategories';
import { useBrands } from '../../brands/hooks/UseBrands';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function Products() {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  const { categories } = useCategories();
  const { brands } = useBrands();

  const getCategoryName = (categoryId: string) => {
    const category = categories?.find((cat) => cat._id === categoryId);
    return category ? category.name : '—';
  };

  const getBrandName = (brandId: string) => {
    const brand = brands?.find((b) => b._id === brandId);
    return brand ? brand.name : '—';
  };

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando productos...</div>
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
        <div className='products'>
          <Button
            onClick={() => navigate('/Product')}
            className='products__btn'
            text='Agregar producto'
          ></Button>

          <table className='products__table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Marca</th>
                <th>Precio de compra</th>
                <th>Precio de venta</th>
                <th>Stock actual</th>
                <th>Stock minimo</th>
                <th>Unidad</th>
                <th>Código</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{getCategoryName(product.category)}</td>
                  <td>{getBrandName(product.brand)}</td>
                  <td>{product.purchase_price}</td>
                  <td>{product.sale_price}</td>
                  <td>{product.current_stock}</td>
                  <td>{product.min_stock}</td>
                  <td>{product.unit_measurement}</td>
                  <td>{product.code}</td>
                  <td>{product.active ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <Button
                      type='button'
                      className='products__btn products__btn--edit'
                      icon={faEdit}
                      onClick={() => {
                        navigate(`/Product/${product._id}`, {
                          state: { product },
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
