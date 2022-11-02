import styled from "styled-components";
import { InputProps } from "../../../types/InputType";

export const StyledTextInput = styled.label`
  font-weight: 500;
  font-size: 12px;
  position: relative;
  color: ${ ( { theme } ) => theme.colors.error };

  .error-message {
    position: absolute;
    right: 0;
    top: 1px;
    color: ${ ( { theme } ) => theme.colors.error };
  }

  .text-input {
    background-color: transparent;
    outline: none;
    min-width: 300px;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 14px;
    display: block;
    text-transform: capitalize;
    margin-top: 5px;
    cursor: text;

    &:active,
    :focus {
      border: 2px solid #d87d4a;
    }

    &:invalid {
      border: 2px solid #cd2c2c;
    }
  }
`;

export const StyledRadioInput = styled.label<InputProps>`
  outline: none;
  margin: 10px 0px;
  max-width: 300px;
  border: 1px solid ${ ( props ) => props.primary && "#F1F1F1" };
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
