import { createGlobalStyle } from "styled-components";

export const theme = {
  body: "#FAFAFA",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",

  colors: {
    header: "#0E0E0E",
    body: "#FAFAFA",
    footer: "#101010",

    primary: "#ffffff",
    secondary: "#00000080",
    outlined: "#000000",
  },

  button: {
    primary: "#D87D4A",
    secondary: "#ffffff",
    outlined: "#ffffff",
  },

  fonts: {
    fontBold: "700",
    fontNormal: "500",
  },
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }: any) => theme.body};
}

section {
  width: min(100%, 1220px);
  padding: 0 165px;
}

`;
