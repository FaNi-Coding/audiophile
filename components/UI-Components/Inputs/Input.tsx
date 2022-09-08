import React from "react";
import styled from "styled-components";

interface Props {
  maxWidth?: string;
  margin?: string;
  fontSize?: string;
  primary?: string;
  secondary?: string;
  name?: string;
  type?: string;
}

type ButtonProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<ButtonProps>`
  background-color: "#fafafa";
  outline: none;
  /* border: none; */
  border: 1px solid ${(props) => props.primary && "#F1F1F1"};
  border-radius: 8px;
  padding: 12px 10px;
`;

export default function Input({ name, type }: ButtonProps) {
  return (
    <>
      {type === "text" && (
        <label htmlFor={name}>
          <StyledInput
            type={type}
            id={name}
            placeholder={`insert your ${name}`}
          />
        </label>
      )}
    </>
  );
}
