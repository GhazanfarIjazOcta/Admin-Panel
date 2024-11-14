import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Divider,
  CardHeader,
  CardContent,
} from "@mui/material";

import { styled } from "@mui/system";

import DashboardMyDeviceCard from "./DashboardMyDeviceCard";
import DashboardDeviceStatus from "./DashboardDeviceStatus";
import DashboardVehicleCard from "./DashboardVehicleCard";
import DashboardMainCard from "./DashboardMainCard";
import DashboardHistoryCard from "./DashboardHistoryCard";

// import { LocationOnIcon } from '@mui/icons-material';

export default function DashboardMain() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        // mt: { xs: 2, sm: 2, md: 5, lg: 5 },
        overflowY: "auto",
        // height: "85vh",
        background: "#F4F7F7",

        height: "auto",
        // gap: "0.5rem",
        width: { lg: "82%", xs: "100%" }, // Prevent overflowing horizontally and vertically
        mr: { lg: 1, xs: "auto" },
      }}
    >
      <Grid
        container
        spacing={1}
        mt={11}
        pr={{ lg: 2 }}
        columns={{ xs: 13, sm: 13, md: 13, lg: 13 }}
      >
        <Grid
          container
          spacing={1}
          mt={"0.1em"}
          item
          xs={13}
          sm={13}
          md={10.2}
          lg={9.5}
          pr={{ lg: 1 }}
        >
          {/* Additional content for the left grid */}

          <Box width={"100%"}>
            <DashboardMainCard />
          </Box>

          <Box width={"100%"}>
            <DashboardHistoryCard />
          </Box>
        </Grid>

        <Grid spacing={2} mt={"0.1em"} item xs={12} sm={12} md={2.5}>
          <Box width={"100%"}>
            <DashboardDeviceStatus />
          </Box>

          <Box width={"100%"} mt={"1em"}>
            <DashboardMyDeviceCard />
          </Box>

          <Box width={"100%"} mt={"1em"}>
            <DashboardVehicleCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
