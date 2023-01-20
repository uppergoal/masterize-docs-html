import { ThemeProvider } from "next-themes";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
