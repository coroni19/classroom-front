import { useState } from "react";
import { pages } from "./Sidebar.const";
import { useStyles } from "./Sidebar.style";
import { Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const styles = useStyles();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleDrawerOpen}>
        <MenuIcon sx={styles.menuIcon} />
      </Button>
      <Drawer open={open} anchor="left" onClose={toggleDrawerClose}>
        {pages.map((page) => (
          <Link
            to={page.to}
            key={page.name}
            onClick={toggleDrawerClose}
            style={
              location.pathname === page.to
                ? { ...styles.pages, ...styles.selectedPage }
                : styles.pages
            }
          >
            {page.name}
          </Link>
        ))}
      </Drawer>
    </>
  );
};

export default Sidebar;
