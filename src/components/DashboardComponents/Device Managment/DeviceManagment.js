import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../Card/Card";
import ActiveLogo from "../../../assets/Card/ActiveLogo.png";
import InActiveLogo from "../../../assets/Card/InActiveLogo.png";
import DevicesLogo from "../../../assets/Card/DevicesLogo.png";
import MalfunctioningLogo from "../../../assets/Card/MalfunctioningLogo.png";
import TableHeader from "../TableHeader/TableHeader";
import DeviceManagmentTableContent from "../Table/DeviceManagmentTableContent";
import TablePagination from "../Pagination/TablePagination";

export default function DeviceManagment() {
  // Define data for cards
  const cardData = [
    { text: "All Devices", icon: DevicesLogo },
    { text: "Active", icon: ActiveLogo },
    { text: "InActive", icon: InActiveLogo },
    { text: "Malfunctioning", icon: MalfunctioningLogo },
  ];

  return (
    <Box 
      sx={{
        // Responsive width based on screen size
        width: { lg: "82%", xs: "90%" },
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding on smaller screens
        px: { xs: 2, sm: 2, md: 2, lg: 0 },
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
        overflow: "none", // Prevents horizontal and vertical overflow
      }}
      mt={12}
    >

      {/* Grid container for card layout */}
      <Grid container spacing={2} sx={{ flexGrow: 1, flexWrap: "wrap" }}>
        
        {/* Mapping over card data to render each OutlinedCard dynamically */}
        {cardData.map((card, index) => (
          <Grid item key={index} xs={13} sm={6} md={2.98} sx={{ flexShrink: 1 }}>
            <OutlinedCard text={card.text} icon={card.icon} />
          </Grid>
        ))}
        
      </Grid>

      {/* Table header with options for search and adding a new device */}
      <TableHeader
        text={"Device Management"}
        searchText={"Device"}
        buttonText={"Add Device"}
        icon={DevicesLogo}
        route={"add-device"}
      />

      {/* Table content for displaying device data */}
      <DeviceManagmentTableContent />

      {/* Pagination component for navigating through table pages */}
      <TablePagination count={5} currentPageResults={3} />
    </Box>
  );
}
