import { Box, Button, Divider, Stack } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import Ukeylogo from "../../../assets/Layout/Ukeylogo-removebg-preview.png";
import DashboardLogo from "../../../assets/Layout/post.png";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import UserLogo from "../../../assets/Layout/user.png";
import VehicleLogo from "../../../assets/Layout/fluent_vehicle-truck-cube-24-regular.png";
import DeviceLogo from "../../../assets/Layout/ion_hardware-chip-outline.png";
import DriverLogo from "../../../assets/Layout/healthicons_truck-driver-outline.png";
import TripLogo from "../../../assets/Layout/Vector.png";
import MaintenanceLogo from "../../../assets/Layout/pajamas_issue-type-maintenance.png";
import FuelLogo from "../../../assets/Layout/lucide_fuel.png";
import SettingLogo from "../../../assets/Layout/settings.png";
import LogoutLogo from "../../../assets/Layout/Left_icon.png";
import { useAuth } from "../../../Authentication/AuthContext";
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
  const { userRole } = useAuth();
  console.log("user role is actually on sidebar ", userRole);

  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(0);

  const handleListItemClick = (index, route) => {
    setSelectedItem(index);
    navigate(route);
  };

  const listItems = [
    { text: "Dashboard", icon: DashboardLogo, route: "dashboardmain" },
    { text: "User Management", icon: UserLogo, route: "user-management" },
    { text: "Vehicle Management", icon: VehicleLogo, route: "vehicle-management" },
    { text: "Device Management", icon: DeviceLogo, route: "device-management" },
    { text: "Driver Management", icon: DriverLogo, route: "driver-management" },
    { text: "Trip Management", icon: TripLogo, route: "trip-management" },
    { text: "Maintenance Scheduling", icon: MaintenanceLogo, route: "maintenance-scheduling" },
    { text: "Fuel Management", icon: FuelLogo, route: "fuel-management" },
    { text: "Setting", icon: SettingLogo, route: "setting" },
  ];

  const customerlistitems = [
    { text: "Dashboard", icon: DashboardLogo, route: "customerdashboardmain" },
    { text: "Maintenance Scheduling", icon: MaintenanceLogo, route: "maintenance-scheduling" },
    { text: "Fuel Management", icon: FuelLogo, route: "customer-fuel-management" },
    { text: "Setting", icon: SettingLogo, route: "customer-setting" }
  ];

  // Conditionally set the list items based on the userRole
  const listToRender = userRole === "admin" ? listItems : customerlistitems;

  return (
    <Box
      flex={2}
      display={{ xs: "none", lg: "flex" }}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        sx={{
          width: "16.5vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
            <img
              src={Ukeylogo}
              alt="logo"
              style={{
                width: { xl: "100%", lg: "80%", md: "70%" },
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <Divider sx={{ backgroundColor: "#F38712" }} />
            <List>
              {listToRender.map((item, index) => (
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
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: { xl: "0.9rem", lg: "0.6rem", md: "0.5rem" },
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
                height: { xl: "3rem", lg: "2.3rem" },
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
