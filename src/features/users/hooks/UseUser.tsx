import { useEffect, useState } from "react";
import { UserProps } from "../types";
import { FetchUser, CreateUser, UpdateUser } from "../services/UserService";

export function useUsuario(_id: string | undefined) {
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      setError("");
      if (_id) {
        try {
          const data = await FetchUser(_id);
          setUser(data);
        } catch (err) {
          console.error("Error al obtener usuario:", err);
          setError("No se pudo cargar el usuario");
        }
      } else {
        setUser(undefined);
      }
      setLoading(false);
    };

    getUser();
  }, [_id]);

  const saveUser = async (data: Partial<UserProps>) => {
    try {
      if (_id) {
        await UpdateUser(_id, data);
      } else {
        await CreateUser(data);
      }
    } catch (err) {
      console.error("Error al guardar usuario:", err);
      setError("No se pudo guardar el usuario.");
    }
  };

  return { user, saveUser, loading, error };
}
