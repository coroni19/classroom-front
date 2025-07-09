import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    dialogTitle: {
      display: "flex",
      justifyContent: "center",
      fontSize: "23px"
    },
    deleteIcon: {
      color: "#3F50B5",
    },
    personIcon: {
      bgcolor: "#C4C4C4",
      color: "white",
    },
    avatar: {
      paddingLeft: "17px",
    },
    list: {
      pt: 0,
      padding: "15px",
    },
    studentName: {
      width: "140px",
      display: "flex",
      justifyContent: "center",
      fontSize: "18px"
    },
    studentInfo: {
        marginBottom: "25px"
    }
  });
