import { useEffect, useState } from "react";
import { InstanciaAxios } from "../Services/InstanciaAxios";
import { UsuarioProps } from "../Props/UsuarioProps/UsuarioProps";
import { USERS_API } from "../Services/APIConfig";

export function useUsuarios() {
  const [users, setUsers] = useState<UsuarioProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await InstanciaAxios.get<UsuarioProps[]>(USERS_API);
        setUsers(response.data);
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
        setError("No se pudieron cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    obtenerUsuarios();
  }, []);

  return { users, loading, error };
}
