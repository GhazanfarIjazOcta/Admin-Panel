import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    padding: theme.spacing(2.5), // Increase padding for larger buttons
    fontSize: "14px", // Increase font size
    margin: 0,
    borderRadius: 0,
    fontWeight: 500,
    color: "#6B7280",
  },

  "& .Mui-selected": {
    color: "#F38712", // Text color when selected
    borderColor: "#F38712", // Border color when selected
  },
}));

export default function TablePagination({ count, currentPageResults }) {
  return (
    <Paper
      sx={{
        padding: 2,
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: { xs: "30vh", sm: "25vh", md: "25vh ", lg: "100%" },
        width: { xs: "90%", sm: "94%", md: "95% ", lg: "97%" }, // Responsive width
        overflow: "none",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack direction for smaller screens
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Typography
          ml={5}
          fontWeight={400}
          color="#374151"
          fontFamily="inter"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" }, // Responsive font size
            textAlign: { xs: "center", sm: "left" }, // Center text on smaller screens
            marginBottom: { xs: 1, sm: 0 }, // Margin adjustment for column stacking
          }}
        >
          Showing 1 to {count ? count : 10} of{" "}
          {currentPageResults ? currentPageResults : 97} results
        </Typography>
        <CustomPagination
          count={count ? count : 10}
          variant="outlined"
          shape="rounded"
          sx={{
            marginTop: { xs: 1, sm: 0 }, // Adjust margin for smaller screens
          }}
        />
      </Stack>
    </Paper>
  );
}
