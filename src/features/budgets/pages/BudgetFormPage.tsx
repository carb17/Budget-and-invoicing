import { Layout } from '../../../layout/pages/Layout';

import { useNavigate, useParams } from 'react-router-dom';

import { BudgetForm } from '../components/BudgetForm';

import { useBudget } from '../hooks/UseBudget';
import { Button } from '../../../components/common/buttons/Buttons';

export function BudgetFormPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { budget, saveBudget, loading } = useBudget(_id);

  const handleSubmit = async (data: any) => {
    if (_id) {
      await saveBudget(data);
    } else {
      await saveBudget(data);
    }
    navigate('/Budgets');
  };

  return (
    <>
      <Layout>
        <div className='container mt-4'>
          <Button
            onClick={() => navigate('/Budgets')}
            className='budgets__btn'
            text='Volver atrás'
          ></Button>
          <h2 className='text-center mb-3'>
            {_id ? 'Editar presupuesto' : 'Nuevo presupuesto'}
          </h2>
          {loading ? (
            <div>Cargando presupuesto...</div>
          ) : (
            <BudgetForm initialData={budget} onSubmit={handleSubmit} />
          )}
        </div>
      </Layout>
    </>
  );
}
