import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DashboardVehicle from "../../../assets/DashboardVehicle.png";

function DashboardVehicleCard() {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: 3,
        padding: "1rem 1rem",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={DashboardVehicle} // Placeholder image URL
        alt="Vehicle"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          My Vehicle
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="body1">Name</Typography>
              <Typography variant="body1">Model</Typography>
              <Typography variant="body1">Year</Typography>
              <Typography variant="body1">Engine</Typography>
              <Typography variant="body1">MFG</Typography>
              <Typography variant="body1">Last PM</Typography>
              <Typography variant="body1">PM Reference</Typography>
            </Box>
            <Box>
              <Typography variant="body1">Ford Transit 350</Typography>
              <Typography variant="body1">2021</Typography>
              <Typography variant="body1">3.5L V6 EcoBoost</Typography>
              <Typography variant="body1">-</Typography>
              <Typography variant="body1">-</Typography>
              <Typography variant="body1">-</Typography>
              <Typography variant="body1">-</Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography variant="body1">Type</Typography>
            <Typography variant="body1">Van</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Hour Meter</Typography>
            <Typography variant="body1">1,250 hours</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Last Location</Typography>
            <Typography variant="body1">742 Evergreen, NY</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Status</Typography>
            <Typography variant="body1">Active</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Vin/Ser#</Typography>
            <Typography variant="body1">Active</Typography>
          </Box>
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <ArrowForwardIosIcon />
      </Box>
    </Card>
  );
}

export default DashboardVehicleCard;
