import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    classIcon: {
      color: "white",
      bgcolor: "#C4C4C4",
    },
    addIcon: {
      ...theme,
      ...themes.transition,
      fontSize: "2.1875rem",
    },
    buttons: {
      ...theme,
      ...themes.transition,
      margin: "0.9375rem 0rem",
      outline: `0.0625rem solid ${theme.color}`,
    },
    table: {
      border: "0.0625rem solid #D1D1D1",
      boxShadow: "0rem 0.25rem 0.25rem 0rem #00000040",
    },
  });
};
