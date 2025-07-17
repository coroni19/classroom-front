import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
    const { theme } = useThemeContext();
  
  return createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px 200px",
    },
    field: {
      width: "16rem",
      maxWidth: "25rem",
      marginTop: "10px",
      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        borderColor: theme.color,
      },
      "& .MuiInputLabel-root.Mui-focused": theme,
    },
    formTitle: {
      fontSize: "40px",
      marginBottom: "1rem"
    },
    button: {
      backgroundColor: theme.color,
      ...themes.transition,
      color: "white",
      width: "16rem",
      margin: "15px",
    },
    noArrowsOnNumberFeild: {
      "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: "0"
      }
    }
  });}
