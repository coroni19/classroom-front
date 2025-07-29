import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    body: {
      top: "6rem",
      width: "80%",
      height: "80vh",
      display: "flex",
      position: "absolute",
    },
    wrapper: {
      width: 200,
      height: 60,
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      ...themes.transition,
      transformOrigin: "50%",
      backgroundColor: theme.color,
      position: "absolute" as const,
    },
    shadow: {
      top: 62,
      width: 18,
      height: 4,
      zIndex: -1,
      filter: "blur(1px)",
      borderRadius: "50%",
      position: "absolute",
      transformOrigin: "50%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
      top: 75,
      ...theme,
      left: "15%",
      fontSize: 20,
      letterSpacing: 12,
      fontWeight: "bolder",
      ...themes.transition,
      position: "absolute",
      textTransform: "uppercase",
      fontFamily: "Roboto !importent",
    },
  });
};
