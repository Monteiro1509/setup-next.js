import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "../../node_modules/next/app";

import GlobalStyle from "./ui/styles/global";
import theme from './ui/themes/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>{
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
