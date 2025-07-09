import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";

export const useStyles = (theme: { color: string }) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px 200px",
    },
    field: {
      marginTop: "10px",
      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        borderColor: theme.color,
      },
      "& .MuiInputLabel-root.Mui-focused": theme,
    },
    formTitle: {
      fontSize: "38px",
    },
    button: {
      backgroundColor: theme.color,
      ...themes.transition,
      color: "white",
      width: "250px",
      marginTop: "15px",
    },
  });
