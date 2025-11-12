import { Layout } from '../../../layout/pages/Layout';

import { Button } from '../../../components/common/buttons/Buttons';

import { useNavigate } from 'react-router-dom';

import { useBudgets } from '../hooks/UseBudgets';

import {
  faEdit,
  faEye,
  faFileInvoice,
  faSignal,
} from '@fortawesome/free-solid-svg-icons';
import { useClients } from '../../clients/hooks/UseClients';
// import { useProducts } from '../../products/hooks/UseProducts';

export function Budgets() {
  const { budgets, loading, error } = useBudgets();
  const navigate = useNavigate();

  const { clients } = useClients();
  // const { products } = useProducts();

  // ============ FUNCION PARA OBTENER DATOS DE CLIENTES ============
  const getClientName = (clientId: string) => {
    const client = clients?.find((c) => c._id === clientId);
    return client ? ` ${client.name} ${client.surname}` : '—';
  };

  // ============ FUNCION PARA OBTENER DATOS DE PRODUCTOS ============
  // const getProductName = (productId: string) => {
  //   const product = products?.find((p) => p._id === productId);
  //   return product ? product.name : '—';
  // };

  const statusLabels: Record<string, string> = {
    pending: 'Pendiente',
    approved: 'Aprobado',
    expired: 'Vencido',
    invoiced: 'Facturado',
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
                    <td>{getClientName(budget.client)} </td>
                    {/* <td>
                      {budget.products
                        .map((p) => getProductName(p.product))
                        .join(', ')}
                    </td>
                    <td>{budget.products.map((p) => p.quantity).join(', ')}</td>
                    <td>
                      {budget.products
                        .map((p) => p.subtotal.toFixed(2))
                        .join(', ')}
                    </td> */}
                    <td>{budget.total}</td>
                    <td>
                      {new Date(budget.expirationDate).toLocaleDateString()}
                    </td>
                    <td>{statusLabels[budget.status] || budget.status}</td>
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
                      {'  '}
                      <Button
                        type='button'
                        className='budgets__btn budgets__btn--see'
                        icon={faEye}
                        onClick={() => {
                          navigate(`/Budget/${budget._id}`, {
                            state: { budget },
                          });
                        }}
                      />
                      {'  '}
                      <Button
                        type='button'
                        className='budgets__btn budgets__btn--status'
                        icon={faSignal}
                        onClick={() => {
                          navigate(`/Budget/${budget._id}`, {
                            state: { budget },
                          });
                        }}
                      />
                      {'  '}
                      <Button
                        type='button'
                        className='budgets__btn budgets__btn--invoice'
                        icon={faFileInvoice}
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
