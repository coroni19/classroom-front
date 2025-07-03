import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    navbar: {
   
      width: "100vw",
      height: "97px",
      position: "absolute ",
      top: 0,
      left: 0,
      right: 0,
      display: "inline-flex",
      justifyContent: "center"
    },
    appName: {
      fontFamily: "Roboto",
      fontSize: "32px",
    },
    darkModeIcon: {
      width: "30px",
      height: "30px",
      color: "white"
    },
  });
