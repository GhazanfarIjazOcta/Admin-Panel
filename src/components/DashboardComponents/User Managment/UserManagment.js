import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import UserLogo from "../../../assets/Card/user.png";
import AdminLogo from "../../../assets/Card/adminIcon.png";
import DriverLogo from "../../../assets/Card/DriversLogo.png";
import GuestLogo from "../../../assets/Card/GuestLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import TableContent from "../Table/UserManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

import { useGetUserManagementDashboardQuery } from "../../../Api/apiSlice";
import { useState } from "react";
import { useEffect } from "react";

import CustomAlert from "../../UI/CustomAlert";
import { Alert, Snackbar, Typography } from "@mui/material";
import Loader from "../../UI/Loader";

export default function UserManagment() {
  const sidebarWidth = 12; // Adjust this based on your sidebar's width

  const { data, error, isLoading } = useGetUserManagementDashboardQuery();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState(""); // State for storing the selected role
  const [status, setStatus] = useState(""); // State for storing the selected status

  console.log("search data [][][][][][][ in ysermanagement", search);

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  useEffect(() => {
    const handleData = async () => {
      try {
        if (data) {
          // Perform any state setting or data handling here
          console.log("Fetched data:", data);
          setAlert({
            open: true,
            severity: "info",
            message: "Updated User Data"
          });
          
          // Example: Set the role and status based on fetched data
          // setRole(data.defaultRole || ""); 
          // setStatus(data.defaultStatus || "");
        }
      } catch (error) {
        console.error("Error handling fetched data:", error);
      }
    };
  
    handleData();
  }, [data]);


  
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Trigger Snackbar when there’s an error
  useEffect(() => {
    if (error) {
      setOpenSnackbar(true);
    }
  }, [error]);

  // Close the Snackbar when user interacts
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  if (isLoading) {
    return (
     
      <>
      <Loader/>
      </>
    );
  }
    if (error) {
      return (
        <>
          {/* Snackbar for error notification */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: "100%" }}
              variant="filled"
            >
              Error loading data! Please try again later.
            </Alert>
          </Snackbar>
  
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="h6" color="error">
              Something went wrong. Please refresh the page.
            </Typography>
          </Box>
        </>
      );
    }



  const { users, admins, drivers, customers } = data || {};
  console.log("here is the users data ", data);

  console.log("users }{}{}{}{", users);

  

  return (
    <Box
      sx={{
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: { lg: "82%", xs: "90%" } // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed
      }}
    >
      <Grid
        container
        spacing={2}
        a
        sx={{
          flexGrow: 1,
          flexWrap: "wrap"
        }}
      >
        {/* Allow the cards to shrink when zoomed in */}
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 10 }}>
          <OutlinedCard
            text={"All Users"}
            icon={UserLogo}
            secText={users.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Admin"}
            icon={AdminLogo}
            secText={admins.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Drivers"}
            icon={DriverLogo}
            secText={drivers.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Customers"}
            icon={GuestLogo}
            secText={customers.count}
          />
        </Grid>
      </Grid>

      <Box sx={{ width: "100%" }}>
        <Box mt={2}>
          <TableHeader
            text={"User Management"}
            searchText={"User name"}
            setSearch={setSearch}
            search={search}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
            buttonText={"Add User"}
            route={"add-user"}
            IsUser="IsUser"
          />
        </Box>

        <Box sx={{ overflowX: "none", width: "100%" }}>
          <TableContent
            setSearch={setSearch}
            search={search}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
          />
        </Box>

        <CustomAlert
        open={alert.open}
        onClose={handleAlertClose}
        severity={alert.severity}
        message={alert.message}
        positionVerticle= {"top"}
        positionHorizontal= {"center"}
        duration = {1500}
      />
        {/* <TablePagination /> */}
      </Box>
    </Box>
  );
}
