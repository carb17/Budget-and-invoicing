import { useEffect, useState } from "react";
import { UserProps } from "../types";
import { FetchUsers } from "../services/UserService";

export function useUsers() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await FetchUsers();
        setUsers(data);
      } catch (err) {
        setError("No se pudieron cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, loading, error };
}
