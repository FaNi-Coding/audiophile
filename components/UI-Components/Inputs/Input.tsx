import React from "react";
//styles
import { StyledTextInput, StyledRadioInput } from "./InputStyles";
//props
import { Props } from "../../../types/InputType";

export default function Input({ name, type, value }: Props) {
  return (
    <>
      <form style={{ width: "min(300px, 100%)" }}>
        {type === "email" && (
          <StyledTextInput htmlFor={name}>
            {name}
            <span className="error-message">Wrong format</span>
            <input
              required
              aria-invalid="true"
              className="text-input"
              type={type}
              id={name}
              placeholder={`insert your name`}
            />
          </StyledTextInput>
        )}
      </form>
      <form>
        {type === "radio" && (
          <StyledRadioInput htmlFor={value}>
            <input type={type} id={value} value={value} />
            {value}
          </StyledRadioInput>
        )}
      </form>
    </>
  );
}
