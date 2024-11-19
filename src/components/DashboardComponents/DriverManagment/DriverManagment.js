import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import DriverManagmentTableContent from "../Table/DriverManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";
import { useState } from "react";

import { useGetDriverManagementDashboardQuery } from "../../../Api/apiSlice";
import { Alert, Snackbar, Typography } from "@mui/material";
import Loader from "../../UI/Loader";

export default function DriverManagment() {
  const { data, error, isLoading } = useGetDriverManagementDashboardQuery();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(""); // State for storing the selected status

  console.log("search data [][][][][][][ in ysermanagement", search);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Trigger Snackbar when there’s an error
  React.useEffect(() => {
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

  const { drivers, activeDrivers, inActiveDrivers } = data || {};
  console.log("here is the devices data newwwww ", data);

  console.log("devices }{}{}{}{", drivers);

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
          <OutlinedCard
            text={"All Drivers"}
            icon={InActiveLogo}
            secText={drivers.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"On Duty"}
            icon={ActiveLogo}
            secText={activeDrivers.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Off Duty"}
            icon={InActiveLogo}
            secText={inActiveDrivers.count}
          />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard
            text={"Available"}
            icon={MalfunctioningLogo}
            secText={drivers.count}
          />
        </Grid>
      </Grid>

      <TableHeader
        text={"Driver Management"}
        searchText={"Driver name"}
        buttonText={"Add Driver"}
        icon={InActiveLogo}
        route={"add-driver"}
        setSearch={setSearch}
        search={search}
        status={status}
        setStatus={setStatus}
      />
      <DriverManagmentTableContent
        setSearch={setSearch}
        search={search}
        status={status}
        setStatus={setStatus}
      />
      {/* <TablePagination /> */}
    </Box>
  );
}
