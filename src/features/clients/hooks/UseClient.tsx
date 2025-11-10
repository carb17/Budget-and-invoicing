import { useEffect, useState } from "react";
import { ClientProps } from "../types/types";
import {
  FetchClient,
  CreateClient,
  UpdateClient,
} from "../services/ClientService";

export function useClient(_id: string | undefined) {
  const [client, setClient] = useState<ClientProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getClient = async () => {
      setLoading(true);
      setError("");
      if (_id) {
        try {
          const data = await FetchClient(_id);
          setClient(data);
        } catch (err) {
          console.error("Error al obtener cliente:", err);
          setError("No se pudo cargar el cliente.");
        }
      } else {
        setClient(undefined);
      }
      setLoading(false);
    };

    getClient();
  }, [_id]);

  const saveClient = async (data: Partial<ClientProps>) => {
    try {
      if (_id) {
        await UpdateClient(_id, data);
      } else {
        await CreateClient(data);
      }
    } catch (err) {
      console.error("Error al guardar cliente:", err);
      setError("No se pudo guardar el cliente.");
    }
  };

  return { client, saveClient, loading, error };
}
