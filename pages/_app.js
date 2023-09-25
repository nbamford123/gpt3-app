import "../global.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
