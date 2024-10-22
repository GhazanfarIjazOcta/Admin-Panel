import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import UkeyLogo from "../../../assets/Login/UkeyLogo.png";
// import { GridStyles } from "./styles";
import DashboardCard from "../../../pages/Card/DashboardCard";
import DevicesCard from "../../../pages/Card/DevicesCard";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import DriversLogo from "../../../assets/Card/DriversLogo.png";
import user from "../../../assets/Card/user.png";
import DashboardMaintenanceCard from "../../../pages/Card/DashboardMaintenanceCard";
import DashboardLocationCard from "../../../pages/Card/DashboardLocationCard";
import DashboardBarChart from "../../../pages/Chart/DashboardBarChart";
import DashboardTableHeader from "../../../pages/TableHeader/DashboardTableHeader";
import DashboardTableContent from "../../../pages/Table/DashboardTableContent";
import fuelConsumptionLogo from "../../../assets/Table/fuelConsumptionLogo.png";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import dollor from "../../../assets/Chart/dollor.png";
import BarChartCom from "../../../pages/Chart/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import cloudLogo from "../../../assets/Table/cloudLogo.png";

export default function DashboardMain() {
  return (
    <Box>
      <Grid
        container
        spacing={1}
        mt={11}
        pr={{ lg: 2 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 15 }}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <DashboardCard
            text={"All Vehicle"}
            icon={VehicleLogo}
            leftContent={{ text: "In Maintenance", value: "04" }}
            middleContent={{ text: "Active", value: "04" }}
            rightContent={{ text: "In Active", value: "01" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <DashboardCard
            text={"All Drivers"}
            icon={DriversLogo}
            leftContent={{ text: "In Maintenance", value: "04" }}
            middleContent={{ text: "Active", value: "04" }}
            rightContent={{ text: "In Active", value: "01" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <DashboardCard
            text={"All Vehicle"}
            icon={user}
            leftContent={{ text: "In Maintenance", value: "04" }}
            middleContent={{ text: "Active", value: "04" }}
            rightContent={{ text: "In Active", value: "01" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <DevicesCard
            devicesText={"All Devices"}
            devicesValue={"26"}
            icon={DevicesLogo}
            leftContent={{ text: "Active", value: "04" }}
            rightContent={{ text: "In Active", value: "01" }}
            devices={true}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={"0.1em"} pr={{ lg: 2 }} columns={12}>
        <Grid item xs={12} sm={12} xmd={9}>
          <Grid container rowSpacing={1} columns={12}>
            <Grid item xs={12} sm={12} xmd={12}>
              <DashboardBarChart />
            </Grid>
            <Grid item xs={12} sm={12} xmd={12}>
              <Paper
                sx={{
                  padding: "0.6em 1rem",
                  minWidth: "12rem",
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent={"space-between"}
                  alignItems={{ xs: "start" }}
                  pb={"1em"}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={"0.3em"}>
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
                        <img
                          src={fuelConsumptionLogo}
                          height={"100%"}
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#5A607F",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Trip Management
                    </Typography>
                  </Stack>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap="0.3em"
                    pt={{ xs: "1rem", md: 0 }}
                  >
                    <TextField
                      placeholder={`Search Driver name `}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ marginRight: 0 }}
                          >
                            <IconButton sx={{ padding: 0 }}>
                              <SearchIcon fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "2.56rem", // Adjust the height as needed
                          fontSize: "0.75rem",
                          width: "12.4rem", // Responsive width
                          border: "1px solid #E2E8F0",
                          color: "#64748B",
                        },
                      }}
                    />
                    <TextField
                      placeholder="Status"
                      variant="outlined"
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: 0 }}
                          >
                            <IconButton sx={{ padding: 0 }}>
                              {
                                <Box
                                  height={"14px"}
                                  width={"20px"}
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <img
                                    src={Arrowdown}
                                    width={"100%"}
                                    height={"100%"}
                                  />
                                </Box>
                              }
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "2.56rem", // Adjust the height as needed
                          fontSize: "12px",
                          width: "7.56rem", // Responsive width
                          fontSize: "0.75rem",
                          boxShadow: "none",
                          fontWeight: 500,
                          color: "#64748B",
                          // Responsive width
                        },
                      }}
                    />
                    <TextField
                      placeholder="7/6/2024 - 5/8-2024"
                      variant="outlined"
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: 0 }}
                          >
                            <IconButton sx={{ padding: 0 }}>
                              {
                                <Box
                                  height="0.75rem"
                                  width="0.75rem"
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <img
                                    src={CrossIcon}
                                    width={"100%"}
                                    height={"100%"}
                                  />
                                </Box>
                              }
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "2.56rem", // Adjust the height as needed
                          fontSize: "12px",
                          width: "11rem", // Responsive width
                          fontSize: "0.75rem",
                          boxShadow: "none",
                        },
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent={"space-between"}
                  alignItems={{ xs: "start" }}
                  pb={"0.8em"}
                  gap={1}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={"0.3em"}>
                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "18rem", sm: "26.25rem" },
                        height: "2.875rem",
                        boxShadow: "none",
                        border: "1px solid #E0E0E0",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        pl={{ xs: "0.5em", sm: 2 }}
                        pr={{ xs: "0.5em", sm: 2 }}
                        gap={{ xs: 1, sm: 2 }}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            color: "#5A607F",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Total Trips
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.2rem", sm: "1.5rem" },
                            color: "#14181F",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          212
                        </Typography>
                      </Stack>

                      <Divider
                        sx={{ mx: { xs: 0, sm: "0.3em" } }}
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Stack
                        direction={"row"}
                        pl={{ xs: "0.5em", sm: 2 }}
                        pr={{ xs: "0.5em", sm: 2 }}
                        gap={{ xs: 1, sm: 2 }}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            color: "#5A607F",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Active
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.2rem", sm: "1.5rem" },
                            color: "#14181F",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          210
                        </Typography>
                      </Stack>
                      <Divider
                        sx={{ mx: { xs: 0, sm: "0.3em" } }}
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Stack
                        direction={"row"}
                        pl={2}
                        gap={{ xs: 1, sm: 2 }}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            color: "#5A607F",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          --
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.2rem", sm: "1.5rem" },
                            color: "#14181F",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          --
                        </Typography>
                      </Stack>
                    </Paper>
                  </Stack>

                  <Button
                    variant="contained"
                    sx={{
                      width: "6.56rem",
                      height: "2.5rem",
                      backgroundColor: "white",
                      color: "#344054",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      paddingRight: "1.5em",
                      boxShadow: "none",
                      border: "1px solid #D0D5DD",
                      gap: "8px", // spacing between icon and text
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <img src={cloudLogo} width={"20px"} height={"20px"} />
                    {"Export"}
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} xmd={3}>
          <Grid container rowSpacing={1} columns={12}>
            <Grid item xs={12} sm={12} xmd={12}>
              <DashboardCard
                text={"All Vehicle"}
                icon={VehicleLogo}
                leftContent={{ text: "In Maintenance", value: "04" }}
                middleContent={{ text: "Active", value: "04" }}
                rightContent={{ text: "In Active", value: "01" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} xmd={12}>
              <DashboardCard
                text={"All Drivers"}
                icon={DriversLogo}
                leftContent={{ text: "In Maintenance", value: "04" }}
                middleContent={{ text: "Active", value: "04" }}
                rightContent={{ text: "In Active", value: "01" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
