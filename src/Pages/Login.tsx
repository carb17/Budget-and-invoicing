import { LoginLogo } from "../Components/Galery/Galery";
import { Footer } from "../Components/Footer/Footer";
export function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="text-center">
          <LoginLogo />
          <h1 className="text-center mb-3 mt-3 fs-3">
            Sistema de Gestión de Presupuestos
          </h1>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="InputUser"
                placeholder="Usuario"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                placeholder="Contraseña"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
