import styled from "styled-components";
import { ButtonPropsInterface } from "./Interface";

export const DefaultButton = styled.button<ButtonPropsInterface>`
  background: ${(props) =>
    props.primary ? "#D87D4A" : props.outlined ? "#ffffff" : "#ffffff"};
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
  color: ${(props) =>
    props.primary ? "#ffffff" : props.outlined && "#000000"};
  border: ${(props) => (props.outlined ? "1px solid black" : "none")};
  width: 160px;
  height: 40px;
  font-family: "Manrope";
  font-style: normal;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.primary ? "#FBAF85" : props.outlined ? "#000000" : "#ffffff"};
    color: ${(props) =>
      props.primary
        ? "#ffffff"
        : props.outlined
        ? "#ffffff"
        : props.secondary
        ? "#d87d4a"
        : "#000000"};
    border: ${(props) => (props.outlined ? "1px solid black" : "none")};
  }
`;
