import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/LayoutComponents/Navbar/Navbar";
import Sidebar from "../../components/LayoutComponents/Sidebar/Sidebar";
import { useMediaQuery } from "@mui/material";
import { useAuth } from "../../Authentication/AuthContext";

function Dashboard() {
  // Define media queries for mobile and tablet screens
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)"); // Typical tablet breakpoint (960px)
  const { userRole } = useAuth();

  console.log("user role is actually ", userRole);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      gap={3}
      backgroundColor="#F4F7F7"
    >
      <Sidebar />
      <Box flex={10.2}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
