import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    padding: theme.spacing(1), // Adjust padding for smaller buttons
    fontSize: "10px", // Smaller font size for mobile
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
        height: { xs: "12vh", sm: "15vh", md: "10vh", lg: "8vh" },
        width: { xs: "95%", sm: "100%", md: "95%", lg: "97%" }, // Slightly narrower on mobile
        position: "sticky",
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "#ffffff",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Typography
          ml={2}
          fontWeight={400}
          color="#374151"
          fontFamily="inter"
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "16px" }, // Adjusted font size for mobile
            textAlign: { xs: "center", sm: "left" },
            marginBottom: { xs: 1, sm: 0 },
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
            marginTop: { xs: 1, sm: 0 },
            width: { xs: "90%", sm: "auto" }, // Ensure buttons fit in one line
          }}
        />
      </Stack>
    </Paper>
  );
}
