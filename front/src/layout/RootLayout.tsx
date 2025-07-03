import { Outlet } from "react-router-dom";
import { useStyles } from "./RootLayout.style";
import Navbar from "../components/Navbar/Navbar";


const RootLayout = () => {
    const styles = useStyles()

  return (
    <>
      <Navbar/>
      <div style={styles.main}>
      <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
