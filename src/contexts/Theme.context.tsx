import { themes } from "../../themes";
import { createContext, useContext } from "react";
import { useEffect, type FC, type ReactNode } from "react";
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
    // document
    //   .querySelector('meta[name="theme-color"]')
    //   ?.setAttribute("content", theme.color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkThemeProvider;
