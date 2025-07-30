import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    darkModeIcon: {
      width: "30px",
      height: "30px",
      color: "white",
    },
    appName: {
      fontSize: "32px",
      fontFamily: "Roboto !importent",
    },
    navbar: {
      top: 0,
      left: 0,
      right: 0,
      zIndex: "10",
      height: "97px",
      width: "100vw",
      position: "fixed",
      ...themes.transition,
      display: "inline-flex",
      justifyContent: "center",
      backgroundColor: theme.color,
    },
  });
};
