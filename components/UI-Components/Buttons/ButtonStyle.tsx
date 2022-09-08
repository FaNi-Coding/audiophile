import styled from "styled-components";
import { ButtonPropsInterface } from "./Interface";

export const DefaultButton = styled.button<ButtonPropsInterface>`
  position: relative;
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
  
 

  &::after {
     position: absolute;
     top: 12px;
     content:${(props) => props.secondary && `url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.32178 1L6.32178 6L1.32178 11' stroke='%23D87D4A' stroke-width='2'/%3E%3C/svg%3E%0A")`};
     width: 5px;
     height: 10px;
     padding-left:18.32px;
     vertical-align: top;
  }
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
