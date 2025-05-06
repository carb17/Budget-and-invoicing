import { Navbar } from "../../Components/Navbar/Navbar";
import { OpcionesMenu } from "../../Components/Menu/OpcionesMenu";
import { Footer } from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { InstanciaAxios } from "../../Services/InstanciaAxios";
import { Button } from "react-bootstrap";
import { USERS_API } from "../../Services/APIConfig";
import { USERS_REGISTER_API } from "../../Services/APIConfig";

export function FormUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.state?.usuario) {
      const { email, role } = location.state.usuario;
      setEmail(email);
      setPassword("");
      setRole(role);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        const data: any = { email, role };
        if (password.trim() !== "") {
          data.password = password;
        }
        await InstanciaAxios.put(`${USERS_API}/${id}`, data);
      } else {
        await InstanciaAxios.post(USERS_REGISTER_API, {
          email,
          password,
          role,
        });
      }
      navigate("/Usuarios");
    } catch (err) {
      console.error("Error al guardar usuario", err);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <OpcionesMenu></OpcionesMenu>
      <div className="container mt-4">
        <h2>{id ? "Editar Usuario" : "Agregar Usuario"}</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label className="form-label">Correo:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rol:</label>
            <input
              type="text"
              className="form-control"
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <Button type="submit" variant="primary" className="w-100">
            Guardar
          </Button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
