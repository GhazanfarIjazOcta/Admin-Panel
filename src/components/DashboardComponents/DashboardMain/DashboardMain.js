import React from "react";
import { Box, Grid } from "@mui/material";

import DashboardCard from "../Card/DashboardCard";
import DevicesCard from "../Card/DevicesCard";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import DriversLogo from "../../../assets/Card/DriversLogo.png";
import user from "../../../assets/Card/user.png";
import DashboardMaintenanceCard from "../Card/DashboardMaintenanceCard";
import DashboardLocationCard from "../Card/DashboardLocationCard";
import DashboardBarChart from "../../../pages/Chart/DashboardBarChart";
import TripManagmentTableContent from "../../../pages/Table/TripManagmentTableContent";

import DashboardTableHeader from "../TableHeader/DashboardTableHeader";
// import DashboardTableHeader from "../../../pages/TableHeader/DashboardTableHeader";
import TripLogo from "../../../assets/Card/TripLogo.png";

export default function DashboardMain() {
  // Dynamic data arrays
  const dashboardData = [
    {
      text: "All Vehicle",
      icon: VehicleLogo,
      leftContent: { text: "In Maintenance", value: "04" },
      middleContent: { text: "Active", value: "04" },
      rightContent: { text: "In Active", value: "01" },
    },
    {
      text: "All Drivers",
      icon: DriversLogo,
      leftContent: { text: "In Maintenance", value: "04" },
      middleContent: { text: "Active", value: "04" },
      rightContent: { text: "In Active", value: "01" },
    },
    {
      text: "All Users",
      icon: user,
      leftContent: { text: "In Maintenance", value: "04" },
      middleContent: { text: "Active", value: "04" },
      rightContent: { text: "In Active", value: "01" },
    },
  ];

  const devicesData = {
    devicesText: "All Devices",
    devicesValue: "26",
    icon: DevicesLogo,
    leftContent: { text: "Active", value: "04" },
    rightContent: { text: "In Active", value: "01" },
  };

  return (
    <Box 
      sx={{
        height: "84%",
        marginTop: {lg: 0, xs: "4rem"},
        flexGrow: 1,
        position: 'absolute',
        overflowY: "none",
        width: { lg: "82%", xs: "100%" },
      }}
    >
      <Grid
        container
        spacing={1}
        mt={{lg: 11, xs: 3}}
        pr={{ lg: 2 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 15 }}
      >
        {dashboardData.map((card, index) => (
          <Grid key={index} item xs={11} sm={6} lg={4} margin={{lg:0, sm:0, xs:1.3}}>
            <DashboardCard
              text={card.text}
              icon={card.icon}
              leftContent={card.leftContent}
              middleContent={card.middleContent}
              rightContent={card.rightContent}
            />
          </Grid>
        ))}

        <Grid item xs={11} sm={6} lg={3} margin={{lg:0, sm:0, xs:1.3}}>
          <DevicesCard
            devicesText={devicesData.devicesText}
            devicesValue={devicesData.devicesValue}
            icon={devicesData.icon}
            leftContent={devicesData.leftContent}
            rightContent={devicesData.rightContent}
            devices={true}
          />
        </Grid>
      </Grid>

      {/* Second main grid */}
      <Grid container spacing={1} mt={"0.5em"} pr={{ lg: 2 }} columns={12}>
        {/* Grid 1 of second main */}
        <Grid item xs={11} sm={9} xmd={9} margin={{lg:0, sm:0, xs:1.3}} >
          <DashboardBarChart />
          <Box mt={2} overflow={"hidden"} sx={{border: "1px ", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
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
            />
           
            <TripManagmentTableContent />
          </Box>
        </Grid>

        {/* Grid 2 of second main */}
        <Grid item xs={11} sm={3} xmd={3} margin={{lg:0, sm:0, xs:1.3}} rowSpacing={1} columnSpacing={1} columns={12} height={'relative'}>
          <DashboardMaintenanceCard />
          <Box mt={2}>
            <DashboardLocationCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
