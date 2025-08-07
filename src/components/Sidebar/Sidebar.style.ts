import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    menuIcon: {
      color: "white",
    },
    selectedPage: {
      opacity: "0.62",
    },
    pages: {
      color: "black",
      fontSize: "1.125rem",
      textDecoration: "none",
      display: "inline-flex",
      justifyContent: "center",
      textTransform: "capitalize",
      padding: "0.9375rem 3.125rem 0.3125rem 3.125rem",
    },
  });
