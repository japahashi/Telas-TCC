import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({ variant = "primary", icon, children, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={"bloom-button bloom-button-" + variant} onClick={onClick}>
      {icon && <IconSlot icon={icon} size={16} />}
      {children}
    </button>
  );
}

export default Button;
