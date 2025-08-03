import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    list: {
      pt: 0,
      padding: "15px",
    },
    avatar: {
      paddingLeft: "17px",
    },
    itemName: {
      width: "140px",
      display: "flex",
      fontSize: "18px",
      justifyContent: "center",
    },
    itemInfo: {
      marginBottom: "25px",
    },
    dialogTitle: {
      display: "flex",
      fontSize: "23px",
      justifyContent: "center",
    },
  });
