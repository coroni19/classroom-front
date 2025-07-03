import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DarkThemeProvider from "./contexts/Theme.context.tsx";

const theme = createTheme({
  typography: {
    fontFamily: `Heebo`,
    fontSize: 18,
  },
});

createRoot(document.getElementById("root")!).render(
<DarkThemeProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
 </DarkThemeProvider>
);
