import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import {
  messageBoxStyle,
  rightContentStyle,
  textFieldContainerStyle,
  userInfoStyle,
  userNameStyle
} from "../../UI/Layout";
import {
  Avatar,
  Drawer,
  InputAdornment,
  Paper,
  TextField
} from "@mui/material";
import Chat from "../../../assets/Layout/Chat.png";
import Sidebar from "../Sidebar/Sidebar";
import SidebarMobile from "../SidebarMobile/SidebarMobile";

import { useAuth } from "../../../Authentication/AuthContext";

import { useGetUserInfoQuery } from "../../../Api/apiSlice";
import CircleIcon from "@mui/icons-material/Circle";

import CustomAlert from "../../UI/CustomAlert";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black // Set icon color to black
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black, // Set text color to black
  backgroundColor: theme.palette.common.white, // Set background color to white
  border: `1px solid #DCE0E5`, // Set border color to #DCE0E5
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const StatusIndicator = styled(Box)(({ status }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  color: status === "active" ? "green" : "red"
}));

export default function Navbar() {
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  const { userRole } = useAuth();
  const { user_ID } = useAuth();

  console.log("user role is actually on navbar ", userRole);
  console.log("user ID actually on navbar ", user_ID);

  const navigatefunction = () => {
    if (userRole == "customer") {
      // navigate("/dashboard/chat");
      navigate("/dashboard/customerchat");
    } else if (userRole == "admin") {
      navigate("/dashboard/chat");
    }
  };

  const navigate = useNavigate();
  const [headerMessage, setHeaderMessage] = React.useState(
    "Good morning, Admin"
  );

  const [SidebarOpen, setSidebarOpen] = React.useState(false);
  const isSideBarOpen = Boolean(SidebarOpen);

  const handleSideBarOpen = () => setSidebarOpen(true);

  const handleSideBar = () => {
    setSidebarOpen(true); // Simply open the sidebar
  };

  const handleSideBarClose = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  const mobileMenuIds = "primary-search-account-menu-mobile";
  const renderSidebar = (
    <Drawer open={SidebarOpen} onClose={handleSideBarClose}>
      <Menu open={SidebarOpen} onClose={handleSideBarClose}>
        <SidebarMobile onClose={handleSideBarClose} />/
      </Menu>
    </Drawer>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClickMessageCheck = () => {
    setAlert({
      open: true,
      severity: "warning",
      message: "Chat in Production"
    });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem onClick={navigatefunction}> */}
      <MenuItem onClick={handleClickMessageCheck}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
        <CustomAlert
          open={alert.open}
          onClose={handleAlertClose}
          severity={alert.severity}
          message={alert.message}
        />
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

  const { data, error, isLoading } = useGetUserInfoQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { userInfo } = data || {};
  console.log("{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}}", data);

  console.log("users info }{}{}{}{{}{}{{}", userInfo);

  //]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

  return (
    <Paper position={"sticky"} minWidth={"320px"} sx={{ zIndex: 4 }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: { xs: "100vw", lg: "82%" },
          minHeight: "5.4rem",
          display: "flex",
          justifyContent: "center",
          minWidth: "320px",
          position: "fixed", // Keeps the AppBar fixed at the top
          top: 0, // Positions it at the top of the viewport
          zIndex: 1201 // Ensures it is above other component
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1, display: { lg: "none", xs: "flex" } }}
            // onClick={handleMobileMenuOpen}
            onClick={handleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", lg: "block" },
              fontWeight: 600,
              fontSize: "1.75rem",
              color: "#14181F",
              mr: 2
            }}
          >
            Good Morning,
            {userInfo.role === "superAdmin" && " Super Admin"}
            {userInfo.role === "admin" && " Admin"}
            {userInfo.role === "customer" && " Customer"}
            {userInfo.role === "driver" && " Driver"}
            {/* {headerMessage} */}
          </Typography>

          {/* <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginRight: 1 }}>
                  <IconButton sx={{ padding: 0 }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: "2.75rem", // Adjust the height as needed
                width: { xs: "12rem", sm: "18rem" }, // Responsive width
                marginLeft: { xs: 0, sm: 1, md: 3 },
              },
            }}
          /> */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "0.2em" }}>
            <Box
              sx={{
                width: "9.875rem", // Responsive width
                height: "2.75rem",
                backgroundColor: "#F38712",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginRight: "0.4em",
                cursor: "pointer"
              }}
              // onClick={navigatefunction}
              onClick={handleClickMessageCheck}
            >
              <img alt="message" src={Chat} />
              {/* <Typography color={"white"}>messages</Typography> */}
              <Typography
                variant="h6"
                Wrap
                component="div"
                sx={{
                  display: { xs: "none", md: "block" },
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "white"
                }}
              >
                messages
              </Typography>
              <CustomAlert
                open={alert.open}
                onClose={handleAlertClose}
                severity={alert.severity}
                message={alert.message}
              />
            </Box>
            <Box />
            <Box
              sx={{ display: "flex", gap: 1 }} // Responsive width
            >
              <Avatar
                sx={{ width: 40, height: 40 }}
                // src="https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730104753/admin_logo_cbtn80.jpg"
                src="https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1731416098/OIP_kxjlsd.jpg"
              />
              <Box sx={userNameStyle}>
                <Typography fontSize={"0.875rem"} fontWeight={"500"}>
                  {userInfo.name}
                </Typography>
                <Typography fontSize={"0.75rem"} fontWeight={"400"}>
                  {userInfo.role}
                </Typography>
              </Box>
              {/* <Box sx={userNameStyle}>

      <Box>
        <Typography fontSize="0.875rem" fontWeight="500">
          {userInfo.name}
        </Typography>
        <Typography fontSize="0.75rem" fontWeight="400">
          {userInfo.role}
        </Typography>
      </Box>
      <StatusIndicator status={userInfo.status}>
        <CircleIcon fontSize="small" />
        <Typography variant="caption" fontWeight="500">
          {userInfo.status === 'active' ? 'Active' : 'Inactive'}
        </Typography>
      </StatusIndicator>
    </Box> */}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderSidebar}
    </Paper>
  );
}
