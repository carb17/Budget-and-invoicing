export function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="InputUser"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}
