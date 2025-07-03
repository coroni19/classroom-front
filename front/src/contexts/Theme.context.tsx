import { createContext, useContext } from "react";
import { useState, type FC, type ReactNode } from "react";

export const themes = {
  light: {
    color: "#F50057",
  },
  dark: {
    color: "#3F50B5",
  },
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
  const [theme, setTheme] = useState(themes.dark);

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
