import { useEffect, useState } from "react";
import { InstanciaAxios } from "../../Services/InstanciaAxios";
import { ClienteProps } from "../../Props/ClienteProps/ClienteProps";
import { CLIENT_API, CLIENTS_REGISTER_API } from "../../Services/APIConfig";

export function useCliente(_id: string | undefined) {
  const [client, setClient] = useState<ClienteProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const obtenerCliente = async () => {
      setLoading(true);
      setError("");
      if (_id) {
        const url = `${CLIENT_API}${_id}`;
        try {
          const response = await InstanciaAxios.get<ClienteProps>(url);
          setClient(response.data);
        } catch (err) {
          console.error("Error al obtener cliente:", err);
          setError("No se pudo cargar el cliente.");
        } finally {
          setLoading(false);
        }
      } else {
        setClient(undefined);
      }
      setLoading(false);
    };

    obtenerCliente();
  }, [_id]);

  const guardarCliente = async (data: Partial<ClienteProps>) => {
    try {
      if (_id) {
        await InstanciaAxios.put(`${CLIENT_API}${_id}`, data);
      } else {
        await InstanciaAxios.post(CLIENTS_REGISTER_API, data);
      }
    } catch (err) {
      console.error("Error al guardar cliente:", err);
    }
  };

  return { client, guardarCliente, loading, error };
}
