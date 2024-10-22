import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../../../pages/Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TripLogo from "../../../assets/Card/TripLogo.png";
import TableHeader from "../../../pages/TableHeader/TableHeader";
import TripManagmentTableContent from "../../../pages/Table/TripManagmentTableContent";
import TablePagination from "../../../pages/Pagination/TablePagination";
export default function TripManagment() {
  return (
    <Box 
    sx={{
      position: "absolute",
      mt: { xs: 13, sm:12 , md: 12 , lg: 12 },
      // Adjust padding based on the screen size
      px: { xs: 2, sm:  2 ,md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
      ml: { xs: 0, sm: 0 ,md: 0 , lg: 0 , xl: 0 }, // Leave space for the sidebar on larger screens
      overflow: "none", // Prevent overflowing horizontally and vertically
      width: {lg:"82%" , xs:"90%"}, // Ensure it takes full width
      // maxWidth: "1200px", // Set a max width as needed
    }}
    
    
    >
      <Grid  container
        spacing={2}a
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
        }}>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Total Trips"} icon={TripLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Active"} icon={ActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Delayed"} icon={InActiveLogo} />
        </Grid>
        <Grid item xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
          <OutlinedCard text={"Upcomming"} icon={MalfunctioningLogo} />
        </Grid>
      </Grid>
      <TableHeader
        text={"Trip Management"}
        searchText={"Vehicle name"}
        buttonText={"Add Trip"}
        trip={true}
        icon={TripLogo}
        route={"add-trip"}
      />
      <Box  mt={2} >
      <TripManagmentTableContent />
      </Box>
      <TablePagination />
    </Box>
  );
}
