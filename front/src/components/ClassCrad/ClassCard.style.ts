import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    studentsList: {
      color: "black",
      fontSize: "16px",
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
    personIcon: {
      color: "white",
      bgcolor: "#C4C4C4",
    },
    header: {
      padding: "0px 20px",
    },
    icons: {
      ...theme,
      ...themes.transition,
    },
    footer: {
      display: "flex",
      justifyContent: "center",
    },
    errorToastify: {
      width: "28rem",
      color: "#c03e3d",
      fontFamily: "inherit",
      backgroundColor: "#ecc8c5",
    },
    card: {
      width: "200px",
      height: "188px",
      display: "flex",
      borderRadius: "4px",
      flexDirection: "column",
      justifyContent: "space-around",
      boxShadow: "0px 4px 4px 0px #00000040",
    },
  });
};
