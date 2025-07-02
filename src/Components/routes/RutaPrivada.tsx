import { RutaPrivadaProps } from "../../props/private route props/RutaPrivadaProps";
import { Navigate } from "react-router-dom";

export function RutaPrivada({ children }: RutaPrivadaProps) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}
