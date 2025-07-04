import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Login } from "./features/auth/pages/Login";
import { Home } from "./pages/home/Home";
import { Users } from "./features/users/UserPage";
import { RutaPrivada } from "./routes/PrivateRoute";
import { UserFormPage } from "./features/users/pages/UserCreateEdit";
import { Clients } from "./features/clients/ClientPage";
import { ClientCreateEdit } from "./features/clients/pages/ClientCreateEdit";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
