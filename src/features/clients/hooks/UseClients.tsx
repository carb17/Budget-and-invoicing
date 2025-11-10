import { useEffect, useState } from "react";
import { ClientProps } from "../types/types";
import { FetchClients } from "../services/ClientService";

export function useClients() {
  const [clients, setClients] = useState<ClientProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getClients = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await FetchClients();
        setClients(data);
      } catch (err) {
        setError("No se pudieron cargar los clientes");
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, []);

  return { clients, loading, error };
}
