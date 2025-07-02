import { LoginLogo } from "../../components/galery/Galery.tsx";
import { Footer } from "../../components/layout/footer/Footer.tsx";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/users/useLogin.tsx";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, mensaje } = useLogin();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin(email, password);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <LoginLogo />
          <h1 className="text-center mb-3 mt-3 fs-4">
            Sistema de Gestión de Presupuestos
          </h1>
          <form onSubmit={onSubmit}>
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
