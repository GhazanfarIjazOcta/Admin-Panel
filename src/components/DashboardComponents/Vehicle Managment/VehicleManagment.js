import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MaintenenceLogo from "../../../assets/Card/MaintenenceLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import VehicleManagmentTableContent from "../Table/VehicleManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

import { useGetVehicleManagementDashboardQuery } from "../../../Api/apiSlice";
import { useState } from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import Loader from "../../UI/Loader";
import { useEffect } from "react";

export default function VehicleManagment() {


  const { data, error, isLoading } = useGetVehicleManagementDashboardQuery();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');  // State for storing the selected status

  console.log("search data [][][][][][][ in vehicle management" , search)


  const { vehicles , activeVehicles, inActiveVehicles, inMaintenanceVehicles } = data || {};
  console.log("vehicle~~~~~~~~~~~~~~~~~ " , data)

console.log("vehicles ~~~~~~~~~~~~~~~~~~~" , vehicles)


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





  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        width: { lg: "82%", xs: "90%" }, // Ensure it takes full width
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
      }}
      mt={12}
    >
      <Grid
        container
        spacing={2}
        a
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"All Vehicles"} icon={VehicleLogo} secText={vehicles.count}/>
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Active"} icon={ActiveLogo} secText={activeVehicles.count}/>
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"InActive"} icon={InActiveLogo} secText={inActiveVehicles.count}/>
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"In Maintenance"} icon={MaintenenceLogo} secText={inMaintenanceVehicles.count}/>
        </Grid>
      </Grid>

      <Box sx={{ width: "100%" }}>
        <Box mt={2}></Box>

      <TableHeader
        text={"Vehicle Management"}
        searchText={"Vehicle"}
        buttonText={"Add Vehicle"}
        icon={VehicleLogo}
        route={"add-vehicle"}
        setSearch = {setSearch}
        search = {search}
        status = {status}
       setStatus = {setStatus}
        IsUser= {"IsVehicle"}
      />

</Box>

<Box sx={{ overflowX: "none", width: "100%" , marginRight:"10px"}} > 
      <VehicleManagmentTableContent 
      
      setSearch = {setSearch}
      search = {search}
      status = {status}
     setStatus = {setStatus}
      
      />

</Box>
      {/* <TablePagination /> */}
    </Box>
  );
}
