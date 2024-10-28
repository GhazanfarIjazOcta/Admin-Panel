import { Box, Button, Divider, Stack } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import React, { useEffect, useState } from "react";
import Ukeylogo from "../../../assets/Layout/Ukeylogo-removebg-preview.png";
import DashboardLogo from "../../../assets/Layout/post.png";
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import UserLogo from "../../../assets/Layout/user.png";
import VehicleLogo from "../../../assets/Layout/fluent_vehicle-truck-cube-24-regular.png";
import DeviceLogo from "../../../assets/Layout/ion_hardware-chip-outline.png";
import DriverLogo from "../../../assets/Layout/healthicons_truck-driver-outline.png";
import TripLogo from "../../../assets/Layout/Vector.png";
import MaintenanceLogo from "../../../assets/Layout/pajamas_issue-type-maintenance.png";
import FuelLogo from "../../../assets/Layout/lucide_fuel.png";
import SettingLogo from "../../../assets/Layout/settings.png";
import LogoutLogo from "../../../assets/Layout/Left_icon.png";
import {
  firstContainer,
  lineStyle,
  listContainer,
  listItemIconStyle,
  listItemStyles,
  listStyle,
  logoStyle,
  logoutButtonContainer,
  logoutButtonStyle,
} from "../../UI/Layout";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(0);

  const handleListItemClick = (index, route) => {
    setSelectedItem(index);
    navigate(route);
  };
  // useEffect(() => {
  //   setSelectedItem(0);
  //   navigate("dashboard");
  // }, []);
  // console.log("selected items", selectedItem);

  const listItems = [
    { text: "Dashboard", icon: DashboardLogo, route: "dashboardmain" },
    { text: "User Management", icon: UserLogo, route: "user-management" },
    {
      text: "Vehicle Management",
      icon: VehicleLogo,
      route: "vehicle-management",
    },
    {
      text: "Device Management",
      icon: DeviceLogo,
      route: "device-management",
    },
    {
      text: "Driver Management",
      icon: DriverLogo,
      route: "driver-management",
    },
    { text: "Trip Management", icon: TripLogo, route: "trip-management" },
    {
      text: "Maintenance Scheduling",
      icon: MaintenanceLogo,
      route: "maintenance-scheduling",
    },
    { text: "Fuel Management", icon: FuelLogo, route: "fuel-management" },
    { text: "Setting", icon: SettingLogo, route: "setting" },
  ];
  return (
    <Box
      flex={2}
        // sx={{ backgroundColor: "red" }}
      display={{ xs: "none", lg: "flex" }}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        sx={{
          width: "16.5vw",
          //   backgroundColor: "red",
          position: "fixed", // Make the sidebar fixed
          top: 0, // Align to the top of the viewport
          left: 0, // Align to the left of the viewport
          zIndex: 1000, // Ensure it stays above other elements
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Box
          height={"10vh"}
          minHeight={"70px"}
          maxWidth={"197px"}
          overflow={"hidden"}
          maxHeight={"289px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <img src={Ukeylogo} alt="logo" width="85%" height={"100%"} />
        </Box> */}
        <Box
          sx={{
            width: "96%",
            height: "98vh",
            minWidth: "220px",
            minHeight: "510px",
            borderRadius: "10px",
            backgroundColor: "#15294E",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          mt={2}
        >
          
          <Box sx={listStyle} mt={"0.2em"}>
          <img src={Ukeylogo} alt="logo" 
          style={{
            width: {xl:"100%" , lg:"80%" , md:"70%"},        // The image will scale to 100% of the container's width
            height: "auto",       // The image will scale to 100% of the container's height
            maxWidth: "100%",     // Prevent overflow beyond the box
            maxHeight: "100%",    // Prevent overflow beyond the box
            objectFit: "contain"  // Maintain aspect ratio and prevent distortion

          }}    />
          <Divider sx={{ backgroundColor: "#F38712" }} />
            <List>
              {listItems.map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => handleListItemClick(index, item.route)}
                  sx={{
                    ...listItemStyles,
                    backgroundColor:
                      selectedItem === index ? "#F38712" : "transparent",
                    "&:hover": {
                      backgroundColor:
                        selectedItem === index ? "#F38712" : "#3D4149",
                    },
                  }}
                >
                 <ListItemIcon sx={listItemIconStyle}>
  <img
    src={item.icon}
    alt={item.text}
    style={{
      width: "15px",  // Set a smaller width for large screens
      height: "15px", // Set a smaller height for large screens
    }}
  />
</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: {xl:"0.9rem", lg:"0.6rem" , md:"0.5rem" },
                      fontFamily: "Poppins",
                      display: { xs: "block", lg: "block" },
                      noWrap: false,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Stack sx={logoutButtonContainer}>
            <Box sx={lineStyle} />
            <Button
              variant="contained"
              fullWidth
              startIcon={
                <img
                  src={LogoutLogo}
                  alt="dashboard"
                  width="15px"
                  height={"auto"}
                />
              }
              sx={{
                width: "80%",
                height: {xl:"3rem" , lg:"2.3rem" },
                fontSize: "1rem",
                backgroundColor: "white",
                marginBottom: "2rem",
                color: "black",
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Logout
            </Button>
          </Stack>
        </Box>

      </Box>
    </Box>
  );
}

export default Sidebar;
