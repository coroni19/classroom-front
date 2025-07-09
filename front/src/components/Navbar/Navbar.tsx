import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { useStyles } from "./Navbar.style";
import Sidebar from "../Sidebar/Sidebar";
import { useThemeContext } from "../../contexts/Theme.context";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  const styles = useStyles(theme);

  return (
    <>
      <AppBar position="static" sx={styles.navbar}>
        <Toolbar>
          <Sidebar />
          <Typography variant="h6" component="div" sx={styles.appName}>
            Shob Classes
          </Typography>
          <Button onClick={toggleTheme}>
            <LoyaltyIcon sx={styles.darkModeIcon} />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
