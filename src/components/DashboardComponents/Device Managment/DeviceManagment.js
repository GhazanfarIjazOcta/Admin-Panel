import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import DeviceManagmentTableContent from "../Table/DeviceManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

import { useGetDeviceManagementDashboardQuery } from "../../../Api/apiSlice";
import { useState } from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import Loader from "../../UI/Loader";
import { useEffect } from "react";

export default function DeviceManagment() {


  const { data, error, isLoading } = useGetDeviceManagementDashboardQuery();

  const [search, setSearch] = useState(''); 
  const [status, setStatus] = useState('');  // State for storing the selected status

  console.log("search data [][][][][][][ in ysermanagement" , search)


  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;

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


  const { devices , activeDevices, inActiveDevices, malfunctionedDevices } = data || {};
  console.log("here is the devices data newwwww " , data)

console.log("devices }{}{}{}{" , devices)




  // Define data for cards
  const cardData = [
    { text: "All Devices", icon: DevicesLogo , secText: devices.count },
    { text: "Active", icon: ActiveLogo , secText: activeDevices.count },
    { text: "InActive", icon: InActiveLogo , secText: inActiveDevices.count },
    { text: "Malfunctioning", icon: MalfunctioningLogo , secText: malfunctionedDevices.count },
  ];

  return (
    <Box
      sx={{
        // Responsive width based on screen size
        width: { lg: "82%", xs: "90%" },
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding on smaller screens
        px: { xs: 2, sm: 2, md: 2, lg: 0 },
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
        overflow: "none", // Prevents horizontal and vertical overflow
      }}
      mt={12}
    >
      {/* Grid container for card layout */}
      <Grid container spacing={2} sx={{ flexGrow: 1, flexWrap: "wrap" }}>
        {/* Mapping over card data to render each OutlinedCard dynamically */}
        {cardData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={13}
            sm={6}
            md={2.98}
            sx={{ flexShrink: 1 }}
          >
            <OutlinedCard text={card.text} icon={card.icon} secText={card.secText} />
          </Grid>
        ))}
      </Grid>

      {/* Table header with options for search and adding a new device */}
      <TableHeader
        text={"Device Management"}
        searchText={"Device"}
        buttonText={"Add Device"}
        icon={DevicesLogo}
        route={"add-device"}
        setSearch = {setSearch}
        search = {search}
       status = {status}
       setStatus = {setStatus}
      />

      {/* Table content for displaying device data */}
      <DeviceManagmentTableContent 
            setSearch = {setSearch}
            search = {search}
           status = {status}
           setStatus = {setStatus}
      
      />

      {/* Pagination component for navigating through table pages */}
      {/* <TablePagination count={5} currentPageResults={3} /> */}
    </Box>
  );
}
