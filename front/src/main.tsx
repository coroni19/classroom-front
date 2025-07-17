import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createRoot } from "react-dom/client";
import DarkThemeProvider from "./contexts/Theme.context.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `Heebo`,
    fontSize: 18,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {},
      },
    },
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
