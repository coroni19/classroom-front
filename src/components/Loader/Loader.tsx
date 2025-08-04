import { useStyles } from "./Loader.style";
import { Box, Typography } from "@mui/material";
import { ballPositions, bounce, shadowAnim } from "./Loader.const";

const Loader = () => {
  const styles = useStyles();

  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        {ballPositions.map((pos, i) => (
          <Box
            key={i}
            sx={{
              ...pos.sx,
              ...styles.circle,
              animation: `${bounce} 0.5s alternate infinite ease`,
              animationDelay: pos.delay,
            }}
          />
        ))}
        {ballPositions.map((pos, i) => (
          <Box
            key={i}
            sx={{
              ...pos.sx,
              ...styles.shadow,
              animation: `${shadowAnim} 0.5s alternate infinite ease`,
              animationDelay: pos.delay,
            }}
          />
        ))}
        <Typography style={styles.loadingText}>Loading</Typography>
      </div>
    </div>
  );
};

export default Loader;
