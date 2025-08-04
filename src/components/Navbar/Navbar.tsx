import Sidebar from "../Sidebar/Sidebar";
import { useStyles } from "./Navbar.style";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { useThemeContext } from "../../contexts/Theme.context";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  const styles = useStyles();
  const { toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Sidebar />
        <Typography sx={styles.appName}>
          Shob Classes
        </Typography>
        <Button onClick={toggleTheme}>
          <LoyaltyIcon sx={styles.darkModeIcon} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
