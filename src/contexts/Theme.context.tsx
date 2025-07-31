import { themes } from "../../themes";
import { type FC, type ReactNode } from "react";
import type { TTheme } from "../types/theme.type";
import { createContext, useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/keys.const";
import type { IThemeContext } from "../interfaces/theme.interface";
import usePersistantState from "../hooks/use-persistant-state.hook";

interface IProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);

const DarkThemeProvider: FC<IProviderProps> = ({ children }) => {
  const [theme, setTheme] = usePersistantState<TTheme>(
    LOCAL_STORAGE_THEME_KEY,
    themes.dark
  );

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme.color);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkThemeProvider;
