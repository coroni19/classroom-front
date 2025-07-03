import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Sidebar.style";
import { Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const styles = useStyles();

  const toggleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="sidebar-btn" onClick={toggleDrawerOpen}>
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <Drawer
        open={open}
        anchor="left"
        className="sidebar"
        onClose={toggleDrawerClose}
      >
        <Link style={styles.pages} to="/classes" onClick={toggleDrawerClose}>
          Classes
        </Link>
        <Link style={styles.pages} to="/students" onClick={toggleDrawerClose}>
          Students
        </Link>
        <Link style={styles.pages} to="/create" onClick={toggleDrawerClose}>
          Create
        </Link>
      </Drawer>
    </>
  );
};

export default Sidebar;
