import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    studentsList: {
      color: "black",
      fontSize: "1rem",
    },
    className: {
      fontWeight: "700",
      fontSize: "1.25rem",
    },
    seatsLeft: {
      fontSize: "1rem",
    },
    outOf: {
      color: "#8F8F8F",
      fontSize: "0.875rem",
    },
    header: {
      padding: "0rem 1.25rem",
    },
    icons: {
      ...theme,
      ...themes.transition,
    },
    footer: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      width: "12.5rem",
      height: "11.75rem",
      display: "flex",
      borderRadius: "0.25rem",
      flexDirection: "column",
      justifyContent: "space-around",
      boxShadow: "0rem 0.25rem 0.25rem 0rem #00000040",
    },
  });
};
