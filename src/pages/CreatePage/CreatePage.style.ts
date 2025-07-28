import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    alert: {
      width: "17rem",
      display: "flex",
      marginTop: "2rem",
      marginLeft: "14rem",
      justifyContent: "start",
    },
    formContainer: {
      gap: "4rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  });
