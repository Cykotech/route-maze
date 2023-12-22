import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  buttonType?: "primary" | "white" | "colored";
  handleClick?: () => void;
}
