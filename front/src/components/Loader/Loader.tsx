import { useStyles } from "./Loader.style";
import { Box, Typography } from "@mui/material";
import { ballPositions, bounce, shadowAnim } from "./Loader.const";

const Loader = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.body}>
      <Box sx={styles.wrapper}>
        {ballPositions.map((pos, i) => (
          <Box
            key={i}
            sx={{
              ...styles.circle,
              ...pos.sx,
              animation: `${bounce} 0.5s alternate infinite ease`,
              animationDelay: pos.delay,
            }}
          />
        ))}
        {ballPositions.map((pos, i) => (
          <Box
            key={i}
            sx={{
              ...styles.shadow,
              ...pos.sx,
              animation: `${shadowAnim} 0.5s alternate infinite ease`,
              animationDelay: pos.delay,
            }}
          />
        ))}
        <Typography style={styles.loadingText}>Loading</Typography>
      </Box>
    </Box>
  );
};

export default Loader;
