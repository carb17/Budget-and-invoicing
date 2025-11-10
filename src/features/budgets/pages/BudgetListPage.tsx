import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useBudgets } from '../hooks/UseBudgets';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useClients } from '../../clients/hooks/UseClients';
import { useProducts } from '../../products/hooks/UseProducts';

export function Budgets() {
  const { budgets, loading, error } = useBudgets();
  const navigate = useNavigate();

  const { clients } = useClients();
  const { products } = useProducts();

  // ============ FUNCION PARA OBTENER DATOS DE CLIENTES ============
  const getClientName = (clientIds: string | string[]) => {
    if (!clients) return '—';

    if (Array.isArray(clientIds)) {
      const names = clientIds.map((id) => {
        const client = clients.find((c) => c._id === id);
        return client ? client.name : '—';
      });
      return names.join(', ');
    }

    const client = clients.find((c) => c._id === clientIds);
    return client ? client.name : '—';
  };

  // ============ FUNCION PARA OBTENER DATOS DE PRODUCTOS ============
  const getProductName = (productId: string) => {
    const product = products?.find((p) => p._id === productId);
    return product ? product.name : '—';
  };

  if (loading) {
    return (
      <Layout>
        <div className='text-center'>Cargando presupuestos...</div>
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
        <div className='budgets'>
          <Button
            onClick={() => navigate('/Budget')}
            className='budgets__btn'
            text='Nuevo presupuesto'
          ></Button>

          <table className='budgets__table'>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>total</th>
                <th>Vencimiento</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {budgets.length > 0 ? (
                budgets.map((budget) => (
                  <tr key={budget._id}>
                    <td>{getClientName(budget.client)}</td>
                    <td>
                      {budget.products
                        .map((p) => getProductName(p.product))
                        .join(', ')}
                    </td>
                    <td>{budget.products.map((p) => p.quantity).join(', ')}</td>
                    <td>
                      {budget.products
                        .map((p) => p.subtotal.toFixed(2))
                        .join(', ')}
                    </td>
                    <td>{budget.total}</td>
                    <td>{budget.status}</td>
                    <td>
                      {new Date(budget.expirationDate).toLocaleDateString()}
                    </td>
                    <td>
                      <Button
                        type='button'
                        className='budgets__btn budgets__btn--edit'
                        icon={faEdit}
                        onClick={() => {
                          navigate(`/Budget/${budget._id}`, {
                            state: { budget },
                          });
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No hay presupuestos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
