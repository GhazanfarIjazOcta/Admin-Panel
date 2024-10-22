import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import DriverManagmentTableContent from "../Table/DriverManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

export default function DriverManagment() {
  return (
    <Box sx={{
      position: "absolute",
      mt: { xs: 13, sm: 12, md: 12, lg: 12 },
      // Adjust padding based on the screen size
      px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
      ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
      overflow: "none", // Prevent overflowing horizontally and vertically
      width: {lg:"82%" , xs:"90%"}, // Ensure it takes full width

    }} mt={12}>

      <Grid container
        spacing={2} a
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
        }}>

        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"All Drivers"} icon={InActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"On Duty"} icon={ActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Off Duty"} icon={InActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Available"} icon={MalfunctioningLogo} />
        </Grid>

      </Grid>

      <TableHeader
        text={"Driver Management"}
        searchText={"Driver name"}
        buttonText={"Add Driver"}
        icon={InActiveLogo}
        route={"add-driver"}
      />
      <DriverManagmentTableContent />
      <TablePagination />
    </Box>
  );
}
