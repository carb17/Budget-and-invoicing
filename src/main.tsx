import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './features/auth/pages/Login';
import { RutaPrivada } from './routes/PrivateRoute';

import { Home } from './features/home/Home';

import { Users } from './features/users/pages/UserPage';
import { UserFormPage } from './features/users/pages/UserFormPage';

import { Clients } from './features/clients/pages/ClientListPage';
import { ClientFormPage } from './features/clients/pages/ClientFormPage';

import { Categories } from './features/categories/pages/CategoryListPage';
import { CategoryFormPage } from './features/categories/pages/CategoryFormPage';

import { Brands } from './features/brands/pages/BrandListPage';
import { BrandFormPage } from './features/brands/pages/BrandFormPage';

import { Products } from './features/products/pages/ProductListPage';
import { ProductFormPage } from './features/products/pages/ProductFormPage';

import { Budgets } from './features/budgets/pages/BudgetListPage';
import { BudgetFormPage } from './features/budgets/pages/BudgetFormPage';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route
        path='/Home'
        element={
          <RutaPrivada>
            <Home />
          </RutaPrivada>
        }
      />

      {/* ========== USERS ========== */}
      <Route
        path='/Users'
        element={
          <RutaPrivada>
            <Users />
          </RutaPrivada>
        }
      />
      <Route
        path='/User/'
        element={
          <RutaPrivada>
            <UserFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/User/:_id'
        element={
          <RutaPrivada>
            <UserFormPage />
          </RutaPrivada>
        }
      />

      {/* ========== CLIENTS ========== */}
      <Route
        path='/Clients'
        element={
          <RutaPrivada>
            <Clients />
          </RutaPrivada>
        }
      />
      <Route
        path='/Client/'
        element={
          <RutaPrivada>
            <ClientFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/Client/:_id'
        element={
          <RutaPrivada>
            <ClientFormPage />
          </RutaPrivada>
        }
      />

      {/* ========== CATEGORIES ========== */}
      <Route
        path='/Categories'
        element={
          <RutaPrivada>
            <Categories />
          </RutaPrivada>
        }
      />
      <Route
        path='/Category/'
        element={
          <RutaPrivada>
            <CategoryFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/Category/:_id'
        element={
          <RutaPrivada>
            <CategoryFormPage />
          </RutaPrivada>
        }
      />

      {/* ========== BRANDS ========== */}
      <Route
        path='/Brands'
        element={
          <RutaPrivada>
            <Brands />
          </RutaPrivada>
        }
      />
      <Route
        path='/Brand/'
        element={
          <RutaPrivada>
            <BrandFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/Brand/:_id'
        element={
          <RutaPrivada>
            <BrandFormPage />
          </RutaPrivada>
        }
      />

      {/* ========== PRODUCTS ========== */}
      <Route
        path='/Products'
        element={
          <RutaPrivada>
            <Products />
          </RutaPrivada>
        }
      />
      <Route
        path='/Product/'
        element={
          <RutaPrivada>
            <ProductFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/Product/:_id'
        element={
          <RutaPrivada>
            <ProductFormPage />
          </RutaPrivada>
        }
      />

      {/* ========== BUDGETS ========== */}
      <Route
        path='/Budgets'
        element={
          <RutaPrivada>
            <Budgets />
          </RutaPrivada>
        }
      />
      <Route
        path='/Budget/'
        element={
          <RutaPrivada>
            <BudgetFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path='/Budget/:_id'
        element={
          <RutaPrivada>
            <BudgetFormPage />
          </RutaPrivada>
        }
      />

      <Route path='/*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);
