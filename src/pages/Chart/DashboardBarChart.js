import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
// import Chart from "../../assets/Chart/chart.png";
import fuelConsumptionLogo from "../../assets/FuelConsumption/fuelConsumptionLogo.png";
import dollor from "../../assets/Chart/dollor.png";
import ArrowDown from "../../assets/Card/fi_chevron-down.png";
import BarChart from "./BarChart";
import BarChartCom from "./BarChart";
import Arrowdown from "../../assets/Card/fi_chevron-down.png";

function DashboardBarChart({ customWidth }) {
  return (
    <Paper
      sx={{
        padding: {lg:"0.6em 3rem" , xs:"0.6em 1rem"},
        minWidth: "12rem",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-between" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        pb={"1.5em"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={"0.3em"}
          mb={{ xs: "1em", sm: 0 }}
        >
          <Box
            sx={{
              width: "2.75rem",
              height: "2.5rem",
              backgroundColor: "#FFF4F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2px",
            }}
          >
            <Box width="1.25rem" height="1.375rem">
              <img src={fuelConsumptionLogo} height={"100%"} width={"100%"} />
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: {lg:"0.8rem", xs:"0.7rem"},
              color: "#5A607F",
              fontWeight: {lg:500 },
              fontFamily: "Inter, sans-serif",
            }}
          >
            Fuel Consumption
          </Typography>
          <Box
            sx={{
              width: "2.75rem",
              height: "2.5rem",
              backgroundColor: "#FFF4F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2px",
            }}
            ml={{ xs: "0.1em", sm: "2.5rem" }}
          >
            <Box width="1.25rem" height="1.375rem">
              <img src={dollor} height={"100%"} width={"100%"} />
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: {lg:"0.8rem", xs:"0.7rem"},
              color: "#5A607F",
              fontWeight: 500,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Fuel Cost
          </Typography>
          <Typography
            sx={{
              fontSize: {lg:"1.5rem", xs:"0.7rem"},
              color: "#45464E",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              mx: { xs: "0.1em", sm: "1em" },
            }}
          >
            $524
          </Typography>
        </Stack>
        <Stack direction={"row"} gap="0.3em" alignItems={"center"}>
          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#AEAEAE",
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Last 12 Months
          </Typography>
          <Box width="1rem" height="1rem">
            <img src={Arrowdown} height={"100%"} width={"100%"} />
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        gap={"3em"}
        justifyContent={"flex-end"}
        pr={"2em"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={{ xs: "3px", md: 2 }}
        >
          <Box
            sx={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: `#D7DBEC`,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#5A607F",
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
            }}
            noWrap
          >
            Fuel usage
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={{ xs: "3px", md: 2 }}
        >
          <Box
            sx={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: `#F38712`,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#5A607F",
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
            }}
            noWrap
          >
            Cost
          </Typography>
        </Stack>
      </Stack>

      <Box height={"257px"}>
        <BarChartCom customWidth={null} />
      </Box>
    </Paper>
  );
}

export default DashboardBarChart;
