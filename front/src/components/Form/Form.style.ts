import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0px 200px",
    },
    field: {
      marginTop: "10px",
    },
    formTitle: {
      fontSize: "38px",
    },
    button: {
      color: "white",
      width: "250px",
      marginTop: "15px",
    },
  });
