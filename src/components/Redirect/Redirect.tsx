import type { FC } from "react";
import { useStyles } from "./Redirect.style";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

interface IRedirectProps {
  message: string;
  buttonText: string;
  navigationPath: string;
}
const Redirect: FC<IRedirectProps> = ({
  message,
  buttonText,
  navigationPath,
}) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const navigateToCreationPage = () => {
    navigate(navigationPath);
  };

  return (
    <div style={styles.messageContainer}>
      <Typography sx={styles.noStudentsText}>{message}</Typography>
      <Button sx={styles.navigationButton} onClick={navigateToCreationPage}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Redirect;
