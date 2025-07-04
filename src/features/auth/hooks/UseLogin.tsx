import { LoginService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLogin() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setMensaje("");

    try {
      const data = await LoginService(email, password);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        setMensaje("Inicio de sesión exitoso ✅");
        navigate("/Home");
      } else {
        setMensaje("Credenciales incorrectas.");
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);

      const mensajeError =
        error.message || error.response?.data?.message || "Ocurrió un error";
      setMensaje(mensajeError);
    }
  };

  return { handleLogin, mensaje };
}
