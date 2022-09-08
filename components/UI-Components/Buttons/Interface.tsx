import { ButtonHTMLAttributes } from "react";

export interface ButtonPropsInterface {
  className?: string;
  children?: React.ReactNode;
  weight?: "light" | "regular" | "medium" | " 700";
  primary?: boolean;
  outlined?: boolean;
  secondary?: boolean;
}
export type ButtonProps = ButtonPropsInterface &
  ButtonHTMLAttributes<HTMLButtonElement>;
