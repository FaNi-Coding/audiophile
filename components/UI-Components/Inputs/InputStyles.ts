import styled from "styled-components";
import { InputProps } from "../../../interfaces/InputInterfaces";

export const StyledTextInput = styled.input<InputProps>`
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
  position: relative;

  &:active,
  :focus {
    border: 2px solid #d87d4a;
  }

  &:invalid {
    border: 2px solid #cd2c2c;
  }
`;

export const StyledRadioInput = styled.label<InputProps>`
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
    border: 2px solid #d87d4a;
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
