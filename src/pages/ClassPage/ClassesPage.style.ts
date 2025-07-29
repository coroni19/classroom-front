import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    classCardContainer: {
      gap: "6rem",
      display: "flex",
      maxWidth: "95%",
      flexWrap: "wrap",
      position: "absolute",
      left: "6rem",
    },
    personIcon: {
      color: "white",
      bgcolor: "#C4C4C4",
    },
    icons: {
      ...theme,
      ...themes.transition,
    },
  });
};
