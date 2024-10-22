import React from "react";
import {
    Box,
    Grid,
} from "@mui/material";

import DashboardCard from "../Card/DashboardCard";
import DevicesCard from "../Card/DevicesCard";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import DriversLogo from "../../../assets/Card/DriversLogo.png";
import user from "../../../assets/Card/user.png";
import DashboardMaintenanceCard from "../Card/DashboardMaintenanceCard";
import DashboardLocationCard from "../Card/DashboardLocationCard";

export default function Main() {
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
                        text={"All Users"}
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
                            {/* <DashboardBarChart /> */}
                            <DashboardLocationCard />
                        </Grid>


                    </Grid>
                </Grid>


                <Grid item xs={12} sm={12} xmd={3}>
                    <Grid container rowSpacing={1} columns={12}>

                        <Grid item xs={12} sm={12} xmd={12}>
                            < DashboardMaintenanceCard />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
