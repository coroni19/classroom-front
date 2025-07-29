import { useState } from "react";
import { pages } from "./Sidebar.const";
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
        {pages.map((page) => (
          <Link
            key={page.name}
            style={styles.pages}
            to={page.to}
            onClick={toggleDrawerClose}
          >
            {page.name}
          </Link>
        ))}
      </Drawer>
    </>
  );
};

export default Sidebar;
