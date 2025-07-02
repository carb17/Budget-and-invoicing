import { useEffect, useState } from "react";
import { InstanciaAxios } from "../../services/InstanciaAxios";
import { UsuarioProps } from "../../props/user props/UsuarioProps";
import { USER_API, USERS_REGISTER_API } from "../../services/APIConfig";

export function useUsuario(_id: string | undefined) {
  const [user, setUser] = useState<UsuarioProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const obtenerUsuario = async () => {
      setLoading(true);
      setError("");
      if (_id) {
        console.log("Obteniendo datos para el usuario con ID:", _id);
        const url = `${USER_API}${_id}`;
        console.log("URL utilizada:", url);
        try {
          const response = await InstanciaAxios.get<UsuarioProps>(url);
          setUser(response.data);
        } catch (err) {
          console.error("Error al obtener usuario:", err);
          setError("No se pudo cargar el usuario");
        } finally {
          setLoading(false);
        }
      } else {
        setUser(undefined);
      }
      setLoading(false);
    };

    obtenerUsuario();
  }, [_id]);

  const guardarUsuario = async (data: Partial<UsuarioProps>) => {
    try {
      if (_id) {
        await InstanciaAxios.put(`${USER_API}${_id}`, data);
      } else {
        await InstanciaAxios.post(USERS_REGISTER_API, data);
      }
    } catch (err) {
      console.error("Error al guardar usuario:", err);
    }
  };

  return { user, guardarUsuario, loading, error };
}
