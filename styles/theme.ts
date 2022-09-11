import { createGlobalStyle } from "styled-components";

export const theme = {
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },

  colors: {
    header: "#0E0E0E",
    body: "#FAFAFA",
    footer: "#101010",

    primary: "#D87D4A",
    secondary: "#ffffff",
    tertiary: "#F1F1F1",
    outlined: "transparent",
    primaryHovered: "#FBAF85",
    outlinedHovered: "#000000",

    error: "#CD2C2C",

    black: "#000000",
    white: "#ffffff",

    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  },

  fonts: {
    fontBold: "700",
    fontNormal: "500",
  },
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }: any) => theme.colors.body};
  font-size: 15px;
  line-height: 25px;
}

header {
  background-color: ${({ theme }: any) => theme.colors.header};
  color: ${({ theme }: any) => theme.colors.white};
}

footer {
  background-color: ${({ theme }: any) => theme.colors.footer};
  color: ${({ theme }: any) => theme.colors.white};
}

section {
  width: min(100%, 1220px);
  padding: 0 165px;
}

h1 {
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: capitalize;
}

h2 {
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.5px;
  text-transform: capitalize;
}

h3 {
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.15px;
  text-transform: capitalize;
}

h4 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: capitalize;
}

h5 {
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 1.7px;
  text-transform: capitalize;
}

h6 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.3px;
  text-transform: capitalize;
}

.overline {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: capitalize;
}

.subTitle {
  margin-top: 32px;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: capitalize;
}

.copyright {
  font-size: 15px;
}
`;
