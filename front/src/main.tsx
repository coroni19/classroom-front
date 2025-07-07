import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DarkThemeProvider from "./contexts/Theme.context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const theme = createTheme({
  typography: {
    fontFamily: `Heebo`,
    fontSize: 18,
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <DarkThemeProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </DarkThemeProvider>
);
