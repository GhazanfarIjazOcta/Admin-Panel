import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../../../pages/Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TripLogo from "../../../assets/Card/TripLogo.png";
import TableHeader from "../../../pages/TableHeader/TableHeader";
import TripManagmentTableContent from "../Table/TripManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

import { useGetTripManagementDashboardQuery } from "../../../Api/apiSlice";
import { useState } from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import Loader from "../../UI/Loader";
import { useEffect } from "react";

export default function TripManagment() {
  const { data, error, isLoading } = useGetTripManagementDashboardQuery();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(""); // State for storing the selected status

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
        <Loader />
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

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h6" color="error">
            Something went wrong. Please refresh the page.
          </Typography>
        </Box>
      </>
    );
  }

  const { trips, activeTrips, delayedTrips, upcomingTrips } = data || {};
  console.log("here is the trip data ", data);

  console.log("delayed trips }{}{}{}{", delayedTrips);

  return (
    <Box
      sx={{
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: { lg: "82%", xs: "90%" }, // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed
      }}
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
          <OutlinedCard
            text={"Total Trips"}
            icon={TripLogo}
            secText={trips.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Active"}
            icon={ActiveLogo}
            secText={activeTrips.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Delayed"}
            icon={InActiveLogo}
            secText={delayedTrips.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Upcomming"}
            icon={MalfunctioningLogo}
            secText={upcomingTrips.count}
          />
        </Grid>
      </Grid>
      <TableHeader
        text={"Trip Management"}
        searchText={"Vehicle name"}
        buttonText={"Add Trip"}
        trip={true}
        icon={TripLogo}
        route={"add-trip"}
        setSearch={setSearch}
        search={search}
        status={status}
        setStatus={setStatus}
      />
      <Box mb={0}>
        <TripManagmentTableContent
          setSearch={setSearch}
          search={search}
          status={status}
          setStatus={setStatus}
        />
      </Box>
      {/* <TablePagination /> */}
    </Box>
  );
}
