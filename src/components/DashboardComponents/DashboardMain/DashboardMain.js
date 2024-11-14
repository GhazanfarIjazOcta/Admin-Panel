import React, { useEffect, useState } from "react";
import { Alert, Box, Grid, Snackbar, Typography } from "@mui/material";

import DashboardCard from "../Card/DashboardCard";
import DevicesCard from "../Card/DevicesCard";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import DriversLogo from "../../../assets/Card/DriversLogo.png";
import user from "../../../assets/Card/user.png";
import DashboardMaintenanceCard from "../Card/DashboardMaintenanceCard";
import DashboardLocationCard from "../Card/DashboardLocationCard";
import DashboardBarChart from "../../../pages/Chart/DashboardBarChart";
import TripManagmentTableContent from "../Table/TripManagmentTableContent";

import DashboardTableHeader from "../TableHeader/DashboardTableHeader";
// import DashboardTableHeader from "../../../pages/TableHeader/DashboardTableHeader";
import TripLogo from "../../../assets/Card/TripLogo.png";
import { useGetAdminDashboardQuery } from "../../../Api/apiSlice";

import Loader from "../../UI/Loader"

export default function DashboardMain() {

  const { data, error, isLoading } = useGetAdminDashboardQuery();

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');  // State for storing the selected status
  
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
  
  // if (error) return <p>Error loading data</p>;

  const { vehicles, devices, drivers, users } = data || {};

  const activeVehicles = vehicles.data.filter(v => v.status === "active").length;
  const inactiveVehicles = vehicles.data.filter(v => v.status === "inactive").length;
  const inMaintenance = vehicles.data.filter(v => v.inMaintenance === "true").length;


  const activeDevices = devices.data.filter(d => d.status === "active").length;
  const inactiveDevices = devices.data.filter(d => d.status === "inactive").length;

  const activeDrivers = drivers.data.filter(d => d.status === "active").length;
  const inactiveDrivers = drivers.data.filter(d => d.status === "inactive").length;

  const activeUsers = users.data.filter(u => u.status === "active").length;
  const inactiveUsers = users.data.filter(u => u.status === "inactive").length;

  console.log("here is the dashboard data", data);

  console.log("here is the dashboard data", data);

  // Dynamic data arrays
  const dashboardData = [
    {
      text: "All Vehicle",     
      icon: VehicleLogo,
      secText: vehicles.count,
      leftContent: { text: "In Maintenance", value: inMaintenance },
      middleContent: { text: "Active", value: activeVehicles },
      rightContent: { text: "In Active", value: inactiveVehicles },
    },

   
  ];

  const devicesData = [
    {
      devicesText: "All Users",
      icon: user,
      devicesValue: users.count,
      // leftContent: { text: "In Maintenance", value: "04" },
      leftContent: { text: "Active", value: activeUsers },
      rightContent: { text: "In Active", value: inactiveUsers },
    },
    {
      devicesText: "All Drivers",      
      icon: DriversLogo,
      devicesValue: drivers.count,
      // leftContent: { text: "In Maintenance", value: "04" },
      leftContent: { text: "Active", value: activeDrivers },
      rightContent: { text: "In Active", value: inactiveDrivers },
    },
    {
    devicesText: "All Devices",
    devicesValue: devices.count,
    icon: DevicesLogo,
    leftContent: { text: "Active", value: activeDevices },
    rightContent: { text: "In Active", value: inactiveDevices },
    },
   
  ];

  return (
    <Box
      sx={{
        height: "84%",
        marginTop: { lg: 0, xs: "4rem" },
        flexGrow: 1,
        position: "absolute",
        overflowY: "none",
        width: { lg: "82%", xs: "100%" },
      }}
    >
      <Grid
        container
        spacing={1}
        mt={{ lg: 11, xs: 3 }}
        pr={{ lg: 2 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 13 }}
      >


{devicesData.map((card, index) => (
        <Grid item xs={11} sm={6} lg={3} margin={{ lg: 0, sm: 0, xs: 1.3 }}>
          <DevicesCard
            devicesText={card.devicesText}
            devicesValue={card.devicesValue}
            icon={card.icon}
            leftContent={card.leftContent}
            rightContent={card.rightContent}
            devices={true}
          />
        </Grid>
   ))}    
           {dashboardData.map((card, index) => (
          <Grid
            key={index}
            item
            xs={11}
            sm={6}
            lg={4}
            margin={{ lg: 0, sm: 0, xs: 1.3 }}
          >
            <DashboardCard
              text={card.text}
              icon={card.icon}
              secText = {card.secText}
              leftContent={card.leftContent}
              middleContent={card.middleContent}
              rightContent={card.rightContent}
            />
          </Grid>
        ))}  
      </Grid>

      {/* Second main grid */}
      <Grid container spacing={1} mt={"0.5em"} pr={{ lg: 2 }} columns={12}>
        {/* Grid 1 of second main */}
        <Grid item xs={11} sm={9} xmd={9} margin={{ lg: 0, sm: 0, xs: 1.3 }}>
          <DashboardBarChart />
          <Box
            mt={2}
            overflow={"hidden"}
            sx={{ border: "1px ", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
          >
            <DashboardTableHeader
              text={"Trip Management"}
              searchText={"Vehicle name"}
              icon={TripLogo}
              buttonText={"Export"}
              //     text={"Trip Management"}
              // searchText={"Vehicle name"}
              // buttonText={"Add Trip"}
              // trip={true}
              // icon={TripLogo}
              // route={"add-trip"}
              setSearch = {setSearch}
              search = {search}
             status = {status}
             setStatus = {setStatus}
            />

            <TripManagmentTableContent 
              setSearch = {setSearch}
              search = {search}
             status = {status}
             setStatus = {setStatus}
            />
          </Box>
        </Grid>

        {/* Grid 2 of second main */}
        <Grid
          item
          xs={11}
          sm={3}
          xmd={3}
          margin={{ lg: 0, sm: 0, xs: 1.3 }}
          rowSpacing={1}
          columnSpacing={1}
          columns={12}
          height={"relative"}
        >
          <DashboardMaintenanceCard />
          <Box mt={2}>
            <DashboardLocationCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
