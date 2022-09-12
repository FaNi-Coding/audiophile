import { ButtonHTMLAttributes } from "react";

export interface ButtonPropsInterface {
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
  secondary?: boolean;
  url?: string;
}

export type ButtonProps = ButtonPropsInterface &
  ButtonHTMLAttributes<HTMLButtonElement>;
