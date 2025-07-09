import { themes } from "../../../themes";
import { createStyles } from "../../styles/createStyle";

export const useStyles = (theme: {color: string}) =>
  createStyles({
    classCardContainer: {
      display: "grid",
      gridTemplate: "auto auto / repeat(6, 1fr)",
      gridGap: "60px 80px",
    },
    personIcon: {
      bgcolor: "#C4C4C4",
      color: "white",
    },
    icons: {
      ...theme,
      ...themes.transition,
    },
  });
