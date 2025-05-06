import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Login } from "./Pages/Login/Login.tsx";
import { PaginaPrincipal } from "./Pages/Index/PaginaPrincipal.tsx";
import { Usuarios } from "./Pages/Usuarios/Usuarios.tsx";
import { RutaPrivada } from "./Components/Rutas/RutaPrivada.tsx";

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
      </Routes>
    </Router>
  );
}

export default App;
