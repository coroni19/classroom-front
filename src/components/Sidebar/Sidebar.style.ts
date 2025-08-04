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
      fontSize: "18px",
      textDecoration: "none",
      display: "inline-flex",
      justifyContent: "center",
      textTransform: "capitalize",
      padding: "20px 50px 5px 50px",
    },
  });
