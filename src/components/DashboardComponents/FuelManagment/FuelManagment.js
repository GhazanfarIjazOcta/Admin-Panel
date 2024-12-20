import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedCard from "../Card/Card";
import TableHeader from "../TableHeader/TableHeader";
import { Alert, Paper, Snackbar, Stack, Typography } from "@mui/material";
import fuelConsumptionLogo from "../../../assets/FuelConsumption/fuelConsumptionLogo.png";
import FuelManagmentTableContent from "../Table/FuelManagmentTableContent";
import TripLogo from "../../../assets/Card/TripLogo.png";
import BarChartCom from "../Chart/BarChart";
import ArrowDown from "../../../assets/Card/fi_chevron-down.png";
import { fuelManagmentStyles } from "../../UI/Main";
import { useState } from "react";

import { useGetFuelManagementDashboardQuery } from "../../../Api/apiSlice";
import Loader from "../../UI/Loader";
// useGetFuelManagementDashboardQuery

export default function FuelManagment() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(""); // State for storing the selected status

  const { data, error, isLoading } = useGetFuelManagementDashboardQuery();

  const { vehicles, summary } = data || {};
  console.log("here the commmmpleteee", data);

  console.log("here the summaryyyy", summary);

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

  return (
    <Box
      sx={{
        position: "absolute",
        mt: { xs: 1, sm: 1, md: 1, lg: 0 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: "82%", // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed>
        // background: "#F4F7F7",
      }}
    >
      <Box sx={fuelManagmentStyles.mainContainer} mt={12}>
        <Box sx={fuelManagmentStyles.topContainer}>
          <Box sx={fuelManagmentStyles.leftContainer}>
            <Box>
              <OutlinedCard
                text={"Fuel Consumption"}
                icon={TripLogo}
                // secText={"9L"}
                consumptionColor={"#D7DBEC"}
                // secText={"9l"}
                secText={`${summary.totalFuelConsumption} (L)`}
                sx={{ height: "200%" }}
              />
            </Box>
            <Box>
              <OutlinedCard
                text={"Total Fuel Cost"}
                icon={TripLogo}
                // secText={"$49"}
                costColor={"#F38712"}
                // secText={"9l"}
                secText={`${summary.totalFuelCost} $`}
              />
            </Box>
          </Box>

          <Box sx={fuelManagmentStyles.rightContainer}>
            <Paper style={fuelManagmentStyles.rightContainerPaper}>
              <Stack
                direction={"row"}
                gap={2}
                justifyContent={"flex-end"}
                sx={fuelManagmentStyles.arrow}
              >
                <Typography sx={fuelManagmentStyles.arrowText}>
                  Last 12 Months
                </Typography>
                <img src={ArrowDown} height={"21px"} width={"21px"} />
              </Stack>
              <Stack height={"43vh"}>
                <BarChartCom />
              </Stack>
            </Paper>
          </Box>
        </Box>

        <TableHeader
          text={"Fuel Consumption"}
          searchText={"Vehicle name"}
          buttonText={"Add Fuel"}
          // exportIcon={true}
          icon={fuelConsumptionLogo}
          setSearch={setSearch}
          search={search}
          status={status}
          setStatus={setStatus}
          route={"add-fuel"}
        />

        <FuelManagmentTableContent />
      </Box>
    </Box>
  );
}
