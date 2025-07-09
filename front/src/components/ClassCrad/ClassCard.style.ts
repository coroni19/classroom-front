import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";

export const useStyles = (theme: {color: string}) =>
  createStyles({
    card: {
      width: "200px",
      height: "188px",
      borderRadius: "4px",
      boxShadow: "0px 4px 4px 0px #00000040",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    className: {
      fontSize: "20px",
      fontWeight: "700",
    },
    seatsLeft: {
      fontSize: "16px",
    },
    outOf: {
      color: "#8F8F8F",
      fontSize: "14px",
    },
    studentsList: {
      color: "black",
      fontSize: "16px",
    },
    numbers: {
      fontWeight: "700",
      display: "inline-flex",
      fontSize: "inherit"
    },
    footer: {
      display: "flex",
      justifyContent: "center",
    },
    header: {
      padding: "0px 20px",
    },
    personIcon: {
      bgcolor: "#C4C4C4",
      color: "white",
    },
    icons: {
      ...theme,
      ...themes.transition
    },
  });
