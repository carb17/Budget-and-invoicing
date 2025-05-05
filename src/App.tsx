import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Login } from "./Pages/Login.tsx";
import { Menu } from "./Pages/Menu.tsx";
import { Usuarios } from "./Pages/Usuarios.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
