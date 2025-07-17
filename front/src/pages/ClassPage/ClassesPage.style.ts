import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    classCardContainer: {
      display: "flex",
      gap: "6rem",
      flexWrap: "wrap",
      maxWidth: "95%",
    },
    personIcon: {
      bgcolor: "#C4C4C4",
      color: "white",
    },
    icons: {
      ...theme,
      ...themes.transition,
    },
  });
};
