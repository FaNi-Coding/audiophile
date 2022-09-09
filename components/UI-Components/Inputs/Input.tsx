import React from "react";
//styles
import { StyledTextInput, StyledRadioInput } from "./InputStyles";
//props
import { Props } from "../../../interfaces/InputInterfaces";

export default function Input({ name, type, value }: Props) {
  return (
    <>
      <form>
        {type === "email" && (
          <label htmlFor={name} style={{ fontWeight: "500", fontSize: "12px" }}>
            {name}
            <StyledTextInput
              type={type}
              id={name}
              placeholder={`insert your name`}
            />
          </label>
        )}
      </form>
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
