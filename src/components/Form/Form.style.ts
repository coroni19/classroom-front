import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    formTitle: {
      fontSize: "40px",
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
      margin: "0px 200px",
      alignItems: "center",
      flexDirection: "column",
    },
    button: {
      color: "white",
      margin: "15px",
      width: "16rem",
      ...themes.transition,
      backgroundColor: theme.color,
    },
    field: {
      width: "16rem",
      maxWidth: "25rem",
      marginTop: "10px",
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
