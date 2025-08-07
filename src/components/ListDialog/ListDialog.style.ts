import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    list: {
      pt: 0,
      padding: "0.9375rem",
    },
    avatar: {
      paddingLeft: "1.0625rem",
    },
    itemName: {
      display: "flex",
      width: "8.75rem",
      fontSize: "1.125rem",
      justifyContent: "center",
    },
    itemInfo: {
      marginBottom: "1.5625rem",
    },
    dialogTitle: {
      display: "flex",
      fontSize: "1.4375rem",
      justifyContent: "center",
    },
  });
