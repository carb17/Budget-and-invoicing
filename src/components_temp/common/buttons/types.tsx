import { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
