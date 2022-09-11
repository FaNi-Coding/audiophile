import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
