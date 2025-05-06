import { LoginLogo } from "../../Components/Galery/Galery.tsx";
import { Footer } from "../../Components/Footer/Footer.tsx";
import { LoginProps } from "../../Props/Props.tsx";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { InstanciaAxios } from "../../Services/InstanciaAxios.tsx";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setMensaje("");
    try {
      const response = await InstanciaAxios.post<LoginProps>("/users/login", {
        email: email.trim(),
        password: password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        setMensaje("Inicio de sesión exitoso ✅");
        navigate("/PaginaPrincipal");
      } else {
        setMensaje("Credenciales incorrectas.");
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      if (error.response) {
        if (error.response.status === 401) {
          setMensaje("Correo o contraseña incorrectos.");
        } else if (error.response.status === 500) {
          setMensaje("Error interno del servidor.");
        } else {
          setMensaje(`Error: ${error.response.data?.message || "desconocido"}`);
        }
      } else if (error.request) {
        setMensaje("No se pudo conectar con el servidor.");
      } else {
        setMensaje("Ocurrió un error inesperado.");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <LoginLogo />
          <h1 className="text-center mb-3 mt-3 fs-4">
            Sistema de Gestión de Presupuestos
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="InputUser"
                placeholder="Usuario"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="InputPassword"
                placeholder="Contraseña"
                required
              />
            </div>
            <Button type="submit" className="w-100">
              Ingresar
            </Button>
          </form>
          {mensaje && <div>{mensaje}</div>}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
