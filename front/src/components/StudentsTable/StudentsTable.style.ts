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
      fontSize: "35px",
      ...themes.transition,
    },
    buttons: {
      ...theme,
      margin: "15px 0px",
      ...themes.transition,
      outline: `1px solid ${theme.color}`,
    },
    table: {
      border: "1px solid #D1D1D1",
      boxShadow: "0px 4px 4px 0px #00000040",
    },
  });
};
