export interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
}
