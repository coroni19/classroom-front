import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    noStudentsText: {
      maxWidth: "95vw",
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
      marginTop: "15%",
      alignItems: "center",
      flexDirection: "column",
    },
  });
};
