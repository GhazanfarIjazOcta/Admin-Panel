import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import VehicleLogo from "../../../assets/Card/VehicleLogo.png";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MaintenenceLogo from "../../../assets/Card/MaintenenceLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import VehicleManagmentTableContent from "../Table/VehicleManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";
export default function VehicleManagment() {
  return (
    <Box sx={{
      flexGrow: 1, position: 'absolute',
      width: {lg:"82%" , xs:"90%"}, // Ensure it takes full width
      mt: { xs: 13, sm: 12, md: 12, lg: 12 },
      // Adjust padding based on the screen size
      px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
      ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
      overflow: "none", // Prevent overflowing horizontally and vertically


    }} mt={12}>


      <Grid container
        spacing={2} a
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
        }}>

        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"All Vehicles"} icon={VehicleLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Active"} icon={ActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"InActive"} icon={InActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"In Maintenance"} icon={MaintenenceLogo} />
        </Grid>

      </Grid>

      <TableHeader
        text={"Vehicle Management"}
        searchText={"Vehicle"}
        buttonText={"Add Vehicle"}
        icon={VehicleLogo}
        route={"add-vehicle"}
      />
      <VehicleManagmentTableContent />
      <TablePagination />
    </Box>
  );
}
