import React, { useState } from "react";

import vehicleLogo from "../../../assets/Card/VehicleLogo.png";
import TripLogo from "../../../assets/Card/TripLogo.png";
import batteryLogo from "../../../assets/Card/batteryLogo.png";
import prev_trip from "../../../assets/Card/prev_trip.png";

import ComingTrip_icon from "../../../assets/Card/ComingTrip_icon.png";
import CurrentTrip_icon from "../../../assets/Card/CurrentTrip_icon.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Divider,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  ButtonGroup,
} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import RoomIcon from "@mui/icons-material/Room";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import DashboardLocationCard from "../Card/DashboardLocationCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import { maintenanceSchedulingStyles } from "../../UI/styles/Main";

const maintenanceSchedulingStyles2 = {
  boxContainer: {
    display: "flex",
    alignItems: "center",

    height: "40px",
  },
};

function DashboardMainCard() {
  const [selected, setSelected] = useState("Today"); // Track the selected button
  return (
    <Card background="#F4F7F7" width={"auto"}>
      <CardContent sx={{ height: "" }}>
        <Grid container spacing={1} alignItems="center">
          {/* Welcome Home & Vehicle Info Section */}
          <Grid item xs={13} md={4}>
            <Box>
              <Box ml={2}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Welcome Home!
                </Typography>

                <Box display="flex" alignItems="center">
                  {/* <Avatar>
              <DirectionsCarIcon color="warning" />
            </Avatar>  */}
                  <Box sx={maintenanceSchedulingStyles.boxContainer}>
                    <img src={vehicleLogo} height={"24px"} width={"24px"} />
                  </Box>
                  <Typography variant="body1" color="textSecondary">
                    Ford Transit
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Location Info Section */}
          <Grid item xs={13} md={4}>
            <Card
              elevation={0}
              // variant="outlined"
              sx={{ padding: 2, borderRadius: "1px", boxShadow: 2 }}
            >
              <Box display="flex" alignItems="center">
                {/* <LocationOnIcon color="warning" /> */}
                <Box sx={maintenanceSchedulingStyles.boxContainer}>
                  <img src={TripLogo} height={"24px"} width={"24px"} />
                </Box>
                <Typography variant="body1" style={{ marginLeft: 8 }}>
                  Location
                </Typography>
              </Box>
              <Typography variant="h6" style={{ marginTop: 8 }}>
                Kansas-Colorado
              </Typography>
            </Card>
          </Grid>

          {/* Battery Status Section */}
          <Grid item xs={13} md={4}>
            <Card
              elevation={0}
              sx={{ padding: 2, borderRadius: "1px", boxShadow: 2 }}
            >
              <Box display="flex" alignItems="center">
                {/* <BatteryChargingFullIcon color="warning" /> */}
                <Box sx={maintenanceSchedulingStyles.boxContainer}>
                  <img src={batteryLogo} height={"24px"} width={"24px"} />
                </Box>
                <Typography variant="h6" style={{ marginLeft: 8 }}>
                  Battery Status
                </Typography>
              </Box>
              <Typography variant="h6" style={{ marginTop: 8 }}>
                Voltage: <strong>12.5V</strong>, Battery: <strong>56%</strong>
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1} item xs={13} md={12}>
          {/* Left Side: Button Group and Map */}
          <Grid item xs={13} md={8}>
            {/* Buttons */}

            <Box sx={{ display: "flex", gap: 2, mt: { lg: 0, xs: 2 } }}>
              {" "}
              {/* Use Box for layout and gap for spacing */}
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRight: "1px solid", // Add right border to the Tracker button
                }}
              >
                Trackers
                <ExpandMoreIcon sx={{ ml: 1 }} /> {/* Chevron icon */}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#ff9800", // Orange text for Location button
                  "&:hover": {
                    borderColor: "#fb8c00", // Darker orange on hover
                    color: "#fb8c00",
                  },
                }}
              >
                Location
              </Button>
            </Box>

            {/* Map Section */}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginTop: 1,
                overflow: "hidden",

                height: {
                  xs: "180px", // Height for mobile (extra small)
                  sm: "180px", // Height for small devices (tablets)
                  md: "590px", // Height for medium devices (laptops)
                  lg: "645px", // Height for large devices
                  xl: "615px",
                },
              }}
            >
              {/* Replace with your actual map component */}
              {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_of_world_with_flags.png"
              alt="Map"
              style={{ width: '100%', height: 'auto' }}
            /> */}
              <DashboardLocationCard />
            </Box>
          </Grid>

          {/* Right Side: Trip Details and Trip History */}
          <Grid item xs={13} md={4} mt={6}>
            {/* Trip Details */}

            {/* <Card variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
          
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        
            <img src={prev_trip} height={"24px"} width={"24px"}  />              
        
                     
            Previous Trip
          </Typography>
         
          <Box  display="flex" alignItems="center">
          <Typography variant="body2">Location: Dallas - Austin</Typography>
          <Typography variant="body2">Date: 12/2/24 - 13/2/24</Typography>
          </Box>
        </Card> */}

            <Card variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
              {/* Box for Image and Typography aligned horizontally */}
              <Box sx={maintenanceSchedulingStyles2.boxContainer}>
                <img src={prev_trip} alt="Trip Logo" />
                <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                  Previous Trip
                </Typography>
              </Box>

              {/* Trip Details in another Box with flex */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Typography variant="body2">
                  Location: Dallas - Austin
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Date: 12/2/24 - 13/2/24
                </Typography>
              </Box>
            </Card>

            <Card variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
              {/* Box for Image and Typography aligned horizontally */}
              <Box sx={maintenanceSchedulingStyles2.boxContainer}>
                <img src={ComingTrip_icon} alt="Coming Trip Logo" />
                <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                  Coming Trip
                </Typography>
              </Box>

              {/* Trip Details in another Box with flex */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Typography variant="body2">
                  Location: Dallas - Austin
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Date: 12/2/24 - 13/2/24
                </Typography>
              </Box>
            </Card>

            <Card variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
              {/* Box for Image and Typography aligned horizontally */}
              <Box sx={maintenanceSchedulingStyles2.boxContainer}>
                <img src={CurrentTrip_icon} alt="Current Trip logo" />
                <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                  Current Trip
                </Typography>
              </Box>

              {/* Trip Details in another Box with flex */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Typography variant="body2">
                  Location: Dallas - Austin
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Date: 12/2/24 - 13/2/24
                </Typography>
              </Box>
            </Card>

            <Card sx={{ padding: 1 }}>
              {/* Trip History */}
              <Typography variant="h6">Trip History</Typography>

              {/* <Box display="flex" justifyContent="flex-end">
                <ButtonGroup variant="text" aria-label="outlined button group">
                  <Button>Today</Button>
                  <Button>Last Week</Button>
                  <Button>Last Month</Button>
                </ButtonGroup>
              </Box> */}
              <Box display="flex" justifyContent="flex-end">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  sx={{ border: "1px  #ff9800" }}
                >
                  <Button
                    onClick={() => setSelected("Today")}
                    sx={{
                      // backgroundColor: selected === 'Today' ? '#ff9800' : 'transparent',
                      color: selected === "Today" ? "#ff9800" : "inherit",
                      borderColor: "#ff9800", // Orange border color
                      "&:hover": {
                        backgroundColor:
                          selected === "Today"
                            ? "#transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Today
                  </Button>

                  <Button
                    onClick={() => setSelected("Last Week")}
                    sx={{
                      // backgroundColor: selected === 'Last Week' ? '#ff9800' : 'transparent',
                      color: selected === "Last Week" ? "#ff9800" : "inherit",
                      borderColor: "#ff9800", // Orange border color
                      "&:hover": {
                        backgroundColor:
                          selected === "Last Week"
                            ? "#transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Last Week
                  </Button>

                  <Button
                    onClick={() => setSelected("Last Month")}
                    sx={{
                      // backgroundColor: selected === 'Last Month' ? '#ff9800' : 'transparent',
                      color: selected === "Last Month" ? "#ff9800" : "inherit",
                      borderColor: "#ff9800", // Orange border color
                      "&:hover": {
                        backgroundColor:
                          selected === "Last Month"
                            ? "#transparent"
                            : "rgba(255, 152, 0, 0.1)", // Change on hover
                      },
                    }}
                  >
                    Last Month
                  </Button>
                </ButtonGroup>
              </Box>

              {/* Table Section */}
              <Table>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "0.8rem",
                      textAlign: "left",
                      width: "20%", // Adjust width to ensure all cells fit
                      padding: -20, // Remove default padding for tighter spacing
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <FiberManualRecordIcon
                        sx={{ color: "#f44336", fontSize: "0.8rem" }}
                      />{" "}
                      Coming Trip
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: "0.8rem",
                      textAlign: "left",
                      width: "20%", // Adjust width to ensure all cells fit
                      padding: -30, // Remove default padding for tighter spacing
                    }}
                  >
                    <Box display="flex" alignItems="center" flexWrap="nowrap">
                      <FiberManualRecordIcon
                        sx={{ color: "#2196f3", fontSize: "0.8rem" }}
                      />{" "}
                      Previous Trip
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: "0.8rem",
                      textAlign: "left",
                      width: "33%", // Adjust width to ensure all cells fit
                      padding: -30, // Remove default padding for tighter spacing
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      flexWrap="nowrap"
                      marginRight={1}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#4caf50", fontSize: "0.8rem" }}
                      />
                      <Box display="flex" flexDirection="column">
                        Current Trip
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>

                <TableBody>
                  <TableRow>
                    <TableCell sx={{ textAlign: "left", width: "50%" }}>
                      Location
                    </TableCell>
                    <TableCell sx={{ textAlign: "right", width: "50%" }}>
                      Date
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ textAlign: "left", width: "50%" }}>
                      Dallas - Austin
                    </TableCell>
                    <TableCell sx={{ textAlign: "right", width: "50%" }}>
                      12/2/24 - 13/2/24
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DashboardMainCard;
