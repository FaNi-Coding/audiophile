import styled from "styled-components";
import { ButtonProps } from "./ButtonInterface";

const icon = `url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.32178 1L6.32178 6L1.32178 11' stroke='%23D87D4A' stroke-width='2'/%3E%3C/svg%3E%0A")`;

export const DefaultButton = styled.button<ButtonProps>`
  position: relative;
  background: ${({ primary, outlined, secondary, theme: { button } }) =>
    primary
      ? button.primary
      : outlined
      ? button.outlined
      : secondary && button.secondary};
  font-weight: ${({
    theme: {
      fonts: { fontBold },
    },
  }) => fontBold};
  color: ${(props) =>
    props.primary
      ? "#ffffff"
      : props.outlined
      ? "#000000"
      : props.secondary && "#00000080"};
  border: ${(props) => (props.outlined ? "1px solid black" : "none")};
  width: min(160px, 100%);
  height: 48px;
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
    top: 15px;
    content: ${(props) => props.secondary && icon};
    width: 5px;
    height: 10px;
    padding-left: 18.32px;
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
