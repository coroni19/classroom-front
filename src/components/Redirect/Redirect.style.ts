import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    studentsTableContainer: {
      width: "70vw",
      maxWidth: "90vw",
    },
    noStudentsText: {
      fontSize: "3rem",
      fontFamily: "roboto !importent",
    },
    navigationButton: {
      ...theme,
      width: "17rem",
      border: "solid 2px",
      borderColor: theme.color,
    },
    messageContainer: {
      gap: "2rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "18rem",
    },
  });
};
