import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './features/auth/pages/Login';
import { Home } from './features/home/Home';
import { Users } from './features/users/pages/UserPage';
import { RutaPrivada } from './routes/PrivateRoute';
import { UserFormPage } from './features/users/pages/UserFormPage';
import { Clients } from './features/clients/pages/ClientPage';
import { ClientCreateEdit } from './features/clients/pages/ClientCreateEdit';

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
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
      <Route
        path='/Client/:_id'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />

      {/* ========== CATEGORIES ========== */}
      <Route
        path='/Categories'
        element={
          <RutaPrivada>
            <Clients />
          </RutaPrivada>
        }
      />
      <Route
        path='/Category/'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
      <Route
        path='/Category/:_id'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />

      {/* ========== BRANDS ========== */}
      <Route
        path='/Brands'
        element={
          <RutaPrivada>
            <Clients />
          </RutaPrivada>
        }
      />
      <Route
        path='/Brand/'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
      <Route
        path='/Brand/:_id'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />

      {/* ========== PRODUCTS ========== */}
      <Route
        path='/Products'
        element={
          <RutaPrivada>
            <Clients />
          </RutaPrivada>
        }
      />
      <Route
        path='/Product/'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
      <Route
        path='/Product/:_id'
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />

      {/* ========== USUARIOS ========== */}

      <Route path='/*' element={<Navigate to='/' replace />} />
    </Routes>
  </BrowserRouter>
);
