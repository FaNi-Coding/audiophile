import { ButtonHTMLAttributes } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

/**                      Props                      */
interface Props {
  className?: string;
  children?: React.ReactNode;
  weight?: "light" | "regular" | "medium" | " 700";
  primary?: boolean;
  outlined?: boolean;
  secondary?: boolean;
}
type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const DefaultButton = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "#D87D4A" : "#ffffff")};
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
  color: ${(props) =>
    props.primary ? "#ffffff" : props.outlined && "#000000"};
  border: ${(props) =>
    props.primary ? "none" : props.outlined && "1px solid #000000"};
  width: 160px;
  height: 40px;
  font-family: "Manrope";
  font-style: normal;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
`;

/**
 *
 * @param {Boolean} primary   - Default button
 * @param {Boolean} outlined  - Outlined button
 * @param {Boolean} secondary - Text with icon to the right
 */
const Button: NextPage<Props> = ({ className, children, ...props }) => {
  return (
    <DefaultButton className={className} {...props}>
      {children}
    </DefaultButton>
  );
};

export default Button;
