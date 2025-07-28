import { createStyles } from "../../styles/createStyle";
import { useThemeContext } from "../../contexts/Theme.context";

export const useStyles = () => {
  const { theme } = useThemeContext();

  return createStyles({
    errorNum: {
      fontSize: "13.2em",
      marginBottom: "0.5rem",
    },
    eyesContainer: {
      width: "900px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-6rem",
      marginBottom: "-2rem",
    },
    eye: {
      color: "white",
      width: "10rem",
      height: "10rem",
      margin: "0 1em",
      background: "#fff",
      borderRadius: "50%",
      position: "relative",
      display: "inline-block",
      transition: "transform 0.1s linear",

      "&::after": {
        width: "40px",
        right: "33px",
        content: '""',
        color: "white",
        height: "40px",
        bottom: "56.1px",
        background: "#000",
        borderRadius: "50%",
        position: "absolute",
      },
    },
    subText: {
      color: "white",
      margin: "1em 0",
      fontSize: "1.7rem",
    },
    button: {
      backgroundColor: "white",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textDecoration: "none",
      textTransform: "uppercase",
      padding: "0.5rem 2rem",
      borderRadius: "40px",
      ...theme,
    },
    icon: {
      paddingLeft: "1rem",
    },
    container: {
      top: 0,
      left: 0,
      width: "100vw",
      color: "white",
      height: "100vh",
      display: "flex",
      textAlign: "center",
      position: "absolute",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: theme.color,
      fontFamily: `'Arial Black', sans-serif`,
    },
  });
};
