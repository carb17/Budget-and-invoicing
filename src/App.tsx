import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Login } from "./pages/login/Login";
import { PaginaPrincipal } from "./pages/index/PaginaPrincipal";
import { Usuarios } from "./pages/users/Usuarios";
import { RutaPrivada } from "./components/routes/RutaPrivada";
import { FormUsuario } from "./pages/users/FormUsuario";
import { Clientes } from "./pages/clients/Clientes";
import { FormCliente } from "./pages/clients/FormCliente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/PaginaPrincipal"
          element={
            <RutaPrivada>
              <PaginaPrincipal />
            </RutaPrivada>
          }
        />
        <Route
          path="/Usuarios"
          element={
            <RutaPrivada>
              <Usuarios />
            </RutaPrivada>
          }
        />
        <Route
          path="/Usuario/"
          element={
            <RutaPrivada>
              <FormUsuario />
            </RutaPrivada>
          }
        />
        <Route
          path="/Usuario/:_id"
          element={
            <RutaPrivada>
              <FormUsuario />
            </RutaPrivada>
          }
        />
        <Route
          path="/Clientes"
          element={
            <RutaPrivada>
              <Clientes />
            </RutaPrivada>
          }
        />
        <Route
          path="/Cliente/"
          element={
            <RutaPrivada>
              <FormCliente />
            </RutaPrivada>
          }
        />
        <Route
          path="/Cliente/:_id"
          element={
            <RutaPrivada>
              <FormCliente />
            </RutaPrivada>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
