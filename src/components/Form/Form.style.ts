import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    formTitle: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    alert: {
      width: "17rem",
      display: "flex",
      marginTop: "2rem",
      justifyContent: "start",
    },
    formContainer: {
      width: "22rem",
      display: "flex",
      alignItems: "center",
      margin: "0rem 12.5rem",
      flexDirection: "column",
    },
    button: {
      color: "white",
      width: "16rem",
      margin: "0.9375rem",
      ...themes.transition,
      backgroundColor: theme.color,
    },
    field: {
      width: "16rem",
      maxWidth: "25rem",
      marginTop: "0.625rem",
      "& .MuiInputLabel-root.Mui-focused": theme,
      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        borderColor: theme.color,
      },
    },
    noArrowsOnNumberFeild: {
      "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        margin: "0",
        WebkitAppearance: "none",
      },
    },
  });
};
