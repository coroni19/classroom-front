import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    list: {
      pt: 0,
      padding: "15px",
    },
    deleteIcon: {
      color: "#3F50B5",
    },
    personIcon: {
      color: "white",
      bgcolor: "#C4C4C4",
    },
    avatar: {
      paddingLeft: "17px",
    },
    studentName: {
      width: "140px",
      display: "flex",
      fontSize: "18px",
      justifyContent: "center",
    },
    studentInfo: {
      marginBottom: "25px",
    },
    dialogTitle: {
      display: "flex",
      fontSize: "23px",
      justifyContent: "center",
    },
  });
