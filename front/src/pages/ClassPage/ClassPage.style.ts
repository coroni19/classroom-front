import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
     classCardContainer: {
      display: "grid",
      gridTemplate: "auto auto / repeat(6, 1fr)",
      gridGap: "60px 80px",
    },
  });
