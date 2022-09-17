import { ButtonHTMLAttributes } from "react";
export interface ButtonPropsInterface {
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
  secondary?: boolean;
  href?: Object;
  onClick?: any;
}

export type ButtonProps = ButtonPropsInterface &
  ButtonHTMLAttributes<HTMLButtonElement>;
