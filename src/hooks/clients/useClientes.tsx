import { useEffect, useState } from "react";
import { InstanciaAxios } from "../../services/InstanciaAxios";
import { ClienteProps } from "../../props/client props/ClienteProps";
import { CLIENTS_API } from "../../services/APIConfig";

export function useClientes() {
  const [clients, setClients] = useState<ClienteProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const response = await InstanciaAxios.get<ClienteProps[]>(CLIENTS_API);
        setClients(response.data);
      } catch (err) {
        console.error("Error al obtener clientes:", err);
        setError("No se pudieron cargar los clientes");
      } finally {
        setLoading(false);
      }
    };

    obtenerClientes();
  }, []);

  return { clients, loading, error };
}
