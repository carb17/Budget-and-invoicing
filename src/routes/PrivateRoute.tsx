import { RutaPrivadaProps } from "./types/types";
import { Navigate } from "react-router-dom";

export function RutaPrivada({ children }: RutaPrivadaProps) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}
