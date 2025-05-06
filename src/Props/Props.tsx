import type { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
}

export interface UsuarioProps {
  _id: string;
  email: string;
  role: string;
}

export interface LoginProps {
  success: boolean;
  token: string;
  mensaje?: string;
}

export interface RutaPrivadaProps {
  children: ReactNode;
}
