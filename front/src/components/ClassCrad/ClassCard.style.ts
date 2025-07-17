import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
    const { theme } = useThemeContext();

    return createStyles({
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
    errorToastify: {
      width: "28rem",
      backgroundColor: "#ecc8c5",
      color: "#c03e3d",
      fontFamily: "inherit"
    }
  });
}
  
