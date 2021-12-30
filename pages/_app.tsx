import type { AppProps } from "next/app";
import { GlobalStyle } from "theme/global.state";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
