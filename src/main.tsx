import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './features/auth/pages/Login';
import { Home } from './features/home/Home';
import { Users } from './features/users/pages/UserPage';
import { RutaPrivada } from './routes/PrivateRoute';
import { UserFormPage } from './features/users/pages/UserFormPage';
import { Clients } from './features/clients/ClientPage';
import { ClientCreateEdit } from './features/clients/pages/ClientCreateEdit';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Home"
        element={
          <RutaPrivada>
            <Home />
          </RutaPrivada>
        }
      />
      <Route
        path="/Users"
        element={
          <RutaPrivada>
            <Users />
          </RutaPrivada>
        }
      />
      <Route
        path="/User/"
        element={
          <RutaPrivada>
            <UserFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path="/User/:_id"
        element={
          <RutaPrivada>
            <UserFormPage />
          </RutaPrivada>
        }
      />
      <Route
        path="/Clients"
        element={
          <RutaPrivada>
            <Clients />
          </RutaPrivada>
        }
      />
      <Route
        path="/Client/"
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
      <Route
        path="/Client/:_id"
        element={
          <RutaPrivada>
            <ClientCreateEdit />
          </RutaPrivada>
        }
      />
    </Routes>
  </BrowserRouter>
);
