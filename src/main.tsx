import App from "./App.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import PaletteProvider from "./contexts/Theme.context.tsx";
import ErrorFallback from "./components/Fallback/Fallback.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: `Heebo`,
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PaletteProvider>
      <HashRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </ThemeProvider>
          </Provider>
        </ErrorBoundary>
      </HashRouter>
    </PaletteProvider>
  </StrictMode>
);
