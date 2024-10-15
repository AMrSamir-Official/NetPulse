import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useDrawer } from "../../Constant/Drawer";
import MyDrawer from "../../components/Drawer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function AppLayout() {
  const { state, toggleDrawer } = useDrawer();
  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <MyDrawer toggleDrawer={toggleDrawer} state={state} />
      <Box sx={{ paddingTop: "110px" }}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
}

export default AppLayout;
