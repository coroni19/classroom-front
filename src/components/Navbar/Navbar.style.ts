import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    darkModeIcon: {
      color: "white",
      width: "1.875rem",
      height: "1.875rem",
    },
    appName: {
      fontSize: "2rem",
      fontWeight: "500",
      fontFamily: "Roboto !importent",
    },
    navbar: {
      top: 0,
      left: 0,
      right: 0,
      zIndex: "10",
      width: "100vw",
      position: "fixed",
      height: "6.0625rem",
      ...themes.transition,
      display: "inline-flex",
      justifyContent: "center",
      backgroundColor: theme.color,
    },
  });
};
