import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
    const { theme } = useThemeContext();
 
  return createStyles({
    buttons: {
      ...theme,
      ...themes.transition,
      margin: "15px 0px",
      outline: `1px solid ${theme.color}`,
    },
    classIcon: {
      bgcolor: "#C4C4C4",
      color: "white",
    },
    addIcon: {
      ...theme,
      ...themes.transition,
      fontSize: "35px",
    },
    table: {
      border: "1px solid #D1D1D1",
      boxShadow: "0px 4px 4px 0px #00000040",
    },
  });}
