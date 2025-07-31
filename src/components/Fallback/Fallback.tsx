import { useStyles } from "./Fallback.style";
import { useNavigate } from "react-router-dom";
import { MousePointerClick } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import type { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onReset = () => {
    navigate(0);
  };

  const eyeRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      eyeRefs.forEach((ref) => {
        const eye = ref.current;
        if (!eye) return;
        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = rad * (180 / Math.PI) * -1 + 180;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      <Box sx={styles.eyesContainer}>
        <Box sx={styles.errorNum}>5</Box>
        <Box sx={styles.eye} ref={eyeRefs[0]}></Box>
        <Box sx={styles.eye} ref={eyeRefs[1]}></Box>
      </Box>
      <Typography sx={styles.subText}>
        Oh eyeballs! Something went wrong. We're looking to see what happened.
      </Typography>
      <Button sx={styles.button} onClick={onReset}>
        Retry
        <MousePointerClick style={styles.icon} />
      </Button>
    </div>
  );
};

export default ErrorFallback;
