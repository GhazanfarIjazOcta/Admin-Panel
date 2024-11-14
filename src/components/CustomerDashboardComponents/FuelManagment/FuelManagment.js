import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedCard from "../Card/Card";
import TableHeader from "../TableHeader/TableHeader";
import {
  Button,
  ButtonGroup,
  CardHeader,
  Grid,
  Grid2,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import fuelConsumptionLogo from "../../../assets/FuelConsumption/fuelConsumptionLogo.png";
import FuelManagmentTableContent from "../Table/FuelManagmentTableContent";
import TripLogo from "../../../assets/Card/TripLogo.png";
import calendarLogo from "../../../assets/Card/calendar.png";
import activeLogo from "../../../assets/Card/ActiveLogo.png";
import BarChartCom from "../Chart/BarChart";
import ArrowDown from "../../../assets/Card/fi_chevron-down.png";
import { fuelManagmentStyles } from "../../UI/Main";

export default function FuelManagment() {
  const [selected, setSelected] = React.useState("Today"); // Track the selected button

  return (
    <Box
      sx={{
        position: "absolute",
        mt: { xs: 3, sm: 12, md: 12, lg: 0 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: { lg: "82%", xs: "90%" }, // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed>
      }}
    >
      <Grid mt={12} container rows={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
        {/* <Box sx={fuelManagmentStyles.topContainer}> */}

        <Grid container spacing={1} item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={3.5}>
            <OutlinedCard
              text={"Fuel Consumtion"}
              icon={TripLogo}
              secText={"9L"}
              consumptionColor={"#D7DBEC"}
            />
          </Grid>
          <Grid item xs={13} sm={13} md={3.8}>
            <OutlinedCard
              text={"Total Fuel Cost"}
              icon={activeLogo}
              secText={"$49"}
              costColor={"#F38712"}
            />
          </Grid>

          <Grid item xs={13} sm={13} md={4.5}>
            <OutlinedCard
              text={"Last Service Data"}
              icon={calendarLogo}
              secText={" 2024-03-28"}
              costColor={"#F38712"}
            />
          </Grid>
        </Grid>

        {/* <Box sx={fuelManagmentStyles.rightContainer}>
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
          </Box> */}

        {/* </Box> */}

        <Grid item xs={12} sm={12} md={12} mt={2} mr={3}>
          {/* <TableHeader
          text={"Fuel Consumption"}
          searchText={"Vehicle name"}
          buttonText={"Add Driver"}
          exportIcon={true}
          icon={fuelConsumptionLogo}
        /> */}
          <CardHeader
            title={
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "1rem", // Smaller font size for extra-small screens (mobile)
                    sm: "1.5rem", // For small screens (tablets)
                    md: "1.8rem", // For medium screens (desktop)
                    lg: "2rem", // For large screens
                  },
                }}
              >
                History
              </Typography>
            }
            action={
              <Box
                display="flex"
                justifyContent="flex-end"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
              >
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  sx={{ border: "0.1px  #ff9800" }} // Corrected border style
                >
                  <Button
                    onClick={() => setSelected("Today")}
                    sx={{
                      color: selected === "Today" ? "#ff9800" : "inherit",
                      borderColor: "#ff9800", // Orange border color
                      fontSize: { xs: "0.7rem", sm: "0.9rem" }, // Smaller button text size for mobile
                      padding: { xs: "4px 8px", sm: "6px 12px" }, // Reduced padding on mobile
                      "&:hover": {
                        backgroundColor:
                          selected === "Today"
                            ? "transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Today
                  </Button>

                  <Button
                    onClick={() => setSelected("Last Week")}
                    sx={{
                      color: selected === "Last Week" ? "#ff9800" : "inherit",
                      borderColor: "#ff9800", // Orange border color
                      fontSize: { xs: "0.7rem", sm: "0.9rem" }, // Smaller button text size for mobile
                      padding: { xs: "4px 8px", sm: "6px 12px" }, // Reduced padding on mobile
                      "&:hover": {
                        backgroundColor:
                          selected === "Last Week"
                            ? "transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Last Week
                  </Button>

                  <Button
                    onClick={() => setSelected("Last Month")}
                    sx={{
                      color: selected === "Last Month" ? "#ff9800" : "inherit",

                      borderColor: "#ff9800", // Orange border color
                      fontSize: { xs: "0.7rem", sm: "0.9rem" }, // Smaller button text size for mobile
                      padding: { xs: "4px 8px", sm: "6px 12px" }, // Reduced padding on mobile
                      "&:hover": {
                        backgroundColor:
                          selected === "Last Month"
                            ? "transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Last Month
                  </Button>
                </ButtonGroup>
              </Box>
            }
            sx={{
              paddingBottom: 0,
              backgroundColor: "#ffffff",
              padding: {
                xs: "4px", // Less padding on mobile
                sm: "16px", // Normal padding on tablet
                md: "24px", // Larger padding on desktop
              },
            }}
          />

          <FuelManagmentTableContent />
        </Grid>
      </Grid>
    </Box>
  );
}
