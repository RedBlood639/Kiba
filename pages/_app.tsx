import type { AppProps } from "next/app";
import { GlobalStyle } from "theme/global.state";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "theme";
import Layout from "ui/layouts/App_Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
