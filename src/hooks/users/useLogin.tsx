import { loginService } from "../../services/ServicioAutenticacion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLogin() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setMensaje("");
    try {
      const data = await loginService(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setMensaje("Inicio de sesión exitoso ✅");
        navigate("/PaginaPrincipal");
      } else {
        setMensaje("Credenciales incorrectas.");
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      setMensaje(error.response?.data?.message || "Ocurrió un error");
    }
  };

  return { handleLogin, mensaje };
}
