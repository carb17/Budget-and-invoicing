import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Login } from "./Pages/Login/Login";
import { PaginaPrincipal } from "./Pages/Index/PaginaPrincipal";
import { Usuarios } from "./Pages/Usuarios/Usuarios";
import { RutaPrivada } from "./Components/Rutas/RutaPrivada";
import { FormUsuario } from "./Pages/Usuarios/FormUsuario";
import { Clientes } from "./Pages/Clientes/Clientes";
import { FormCliente } from "./Pages/Clientes/FormCliente";

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
