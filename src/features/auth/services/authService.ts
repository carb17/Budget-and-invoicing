import { USERS_ENDPOINT } from "../../../lib/apiConfig";
import { InstanciaAxios } from "../../../lib/axios";
import { LoginProps } from "../types/types";

export const LoginService = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email y contraseña son obligatorios");
  }

  try {
    const response = await InstanciaAxios.post<LoginProps>(
      USERS_ENDPOINT.login,
      {
        email: email.trim(),
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    const mensaje = error?.response?.data?.message || "Error al iniciar sesión";
    throw new Error(mensaje);
  }
};
