import { keyframes } from "@mui/material";

export const bounce = keyframes`
  0% {
    top: 3.75rem;
    height: 0.3125rem;
    border-radius: 3.125rem 3.125rem 1.5625rem 1.5625rem;
    transform: scaleX(1.5);
  }
  40% {
    height: 1.25rem;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

export const shadowAnim = keyframes`
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
`;

export const ballPositions = [
  { sx: { left: "15%" }, delay: "0s" },
  { sx: { left: "45%" }, delay: "0.2s" },
  { sx: { right: "15%" }, delay: "0.3s" },
];
