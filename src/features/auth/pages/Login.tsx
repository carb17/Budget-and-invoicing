import { LoginLogo } from "../../../components/galery/Galery.tsx";
import { Footer } from "../../../layout/footer/Footer.tsx";
import { Button } from "../../../components/common/buttons/Buttons.tsx";
import { useState } from "react";
import { useLogin } from "../hooks/UseLogin.tsx";
import { fncSweetAlert } from "../../../utils/alerts.ts";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, mensaje } = useLogin();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    fncSweetAlert("loading", "Comprobando los datos ingresados");

    try {
      await handleLogin(email, password);
      fncSweetAlert("success", "Inicio de sesión exitoso");
    } catch (error: any) {
      const mensajeError =
        error.message || error.response?.data?.message || "Ocurrió un error";
      fncSweetAlert("error", mensajeError);
    } finally {
      fncSweetAlert("close", "Cerrando sesión...");
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
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="InputEmail"
                placeholder="Correo"
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
            <Button
              type="submit"
              className="btn btn-primary w-100"
              text="Ingresar"
            ></Button>
          </form>
          {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
