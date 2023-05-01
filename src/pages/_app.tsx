import "~/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "~/components/Header";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E1B601",
      },
    },
    typography: {
      allVariants: {
        fontFamily: "Play, sans-serif",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            paddingTop: 15,
            paddingBottom: 15,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Elias Castro </title>
      </Head>

      <Header />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
