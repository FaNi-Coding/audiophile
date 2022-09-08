import React from "react";
import styled from "styled-components";

interface Props {
  maxWidth?: string;
  margin?: string;
  primary?: string;
  name?: string;
  type?: string;
  value?: string;
}

type ButtonProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const StyledTextInput = styled.input<ButtonProps>`
  background-color: transparent;
  outline: none;
  min-width: 300px;
  border: 1px solid ${(props) => props.primary && "#F1F1F1"};
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  display: block;
  text-transform: capitalize;
  margin-top: 5px;
  cursor: text;

  &:active,
  :focus {
    border: 1px solid #d87d4a;
  }
`;

const StyledRadioInput = styled.label<ButtonProps>`
  outline: none;
  margin: 10px 0px;
  max-width: 300px;
  border: 1px solid ${(props) => props.primary && "#F1F1F1"};
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 700;
  display: block;
  display: flex;
  gap: 10px;

  :active,
  :focus {
    border: 1px solid #d87d4a;
  }

  input[type="radio"] {
    height: 15px;
    width: 15px;
    padding: 5px;

    :checked:after {
      background-color: #d87d4a;
    }
  }
`;

export default function Input({ name, type, value }: ButtonProps) {
  return (
    <>
      <div>
        {type === "text" && (
          <label htmlFor={name} style={{ fontWeight: "500", fontSize: "12px" }}>
            {name}
            <StyledTextInput
              type={type}
              id={name}
              placeholder={`insert your name`}
            />
          </label>
        )}
      </div>
      <div>
        {type === "radio" && (
          <StyledRadioInput htmlFor={value}>
            <input type={type} id={value} value={value} />
            {value}
          </StyledRadioInput>
        )}
      </div>
    </>
  );
}
