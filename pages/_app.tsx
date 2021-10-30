import { AppProps } from "next/app";
import { ThemeProvider } from "theme";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />;
        </ThemeProvider>
    );
};

export default App;
