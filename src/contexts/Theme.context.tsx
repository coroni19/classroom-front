import { themes } from "../../themes";
import { type FC, type ReactNode } from "react";
import { createContext, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/keys.const";
import usePersistantState from "../hooks/use-persistant-state.hook";

type TTheme = {
  color: string;
};

interface IThemeContext {
  theme: { color: string };
  toggleTheme: () => void;
}

interface IProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);

const DarkThemeProvider: FC<IProviderProps> = ({ children }) => {
  const [theme, setTheme] = usePersistantState<TTheme>(LOCAL_STORAGE_THEME_KEY, themes.dark);

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
