import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    formContainer: {
      gap: "4rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  });
