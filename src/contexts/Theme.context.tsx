import { themes } from "../../themes";
import { type FC, type ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/keys.const";
import usePersistantState from "../hooks/use-persistant-state.hook";
import { createContext, useContext, useInsertionEffect } from "react";

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
  // const meta = useRef<HTMLMetaElement | null>(null);

  const [theme, setTheme] = usePersistantState<TTheme>(
    LOCAL_STORAGE_THEME_KEY,
    themes.dark
  );

  useInsertionEffect(() => {
    // if (!meta.current) {
    //   meta.current = document.createElement("meta");
    // }

    // meta.current.name = "theme-color";
    // meta.current.content = theme.color;
    // meta.current.id = "theme"

    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.color)
    // document.head.remove
    // document.head.append(meta.current);
  }, [theme.color]);

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
