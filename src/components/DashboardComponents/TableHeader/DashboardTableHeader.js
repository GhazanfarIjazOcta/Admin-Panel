import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Stack,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  MenuItem,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import User from "../../../assets/Card/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import cloudLogo from "../../../assets/Table/cloudLogo.png";
import { useNavigate } from "react-router-dom";

import { useGetTripManagementDashboardQuery } from "../../../Api/apiSlice";
import { Height } from "@mui/icons-material";

export default function DashboardTableHeader({
  text,
  searchText,
  buttonText,
  trip,
  exportIcon,
  icon,
  setSearch,
  search,
  // serRole,
  // role,
  status,
  setStatus
}) {

  
  const isMobile = useMediaQuery("(max-width:600px)");


  const { data, error, isLoading } = useGetTripManagementDashboardQuery();

  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Update the search state
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value); // Update the status state
  };



  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { trips, activeTrips, delayedTrips, upcomingTrips } = data || {};
  console.log("here is the trip data " , data)



  return (
    <Box height={"100%"} width={"100%"}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          height: "100%",
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          // paddingTop: "8px",
        }}
      >
        {!isMobile ? (
          <React.Fragment>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              mt={2}
            >
              <Stack direction={"row"} alignItems={"center"} gap={2} pl={2}>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: "#FFF4F2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "2px",
                  }}
                >
                  <img
                    src={icon ? icon : User}
                    height={"16px"}
                    width={"16px"}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xl: "16px",
                      lg: "14px",
                      md: "12px",
                      sm: "12px",
                      xs: "14px",
                    },
                    color: "#5A607F",
                    fontWeight: 400,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {text}
                </Typography>
              </Stack>
              {trip && (
                <Stack direction={"row"} gap={2}>
                  <Box>
                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: 317,
                        height: 46,
                        boxShadow: "none",
                        border: "1px solid #E0E0E0",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        p={2}
                        gap={2}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            fontSize: "16px",
                            color: "#5A607F",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Total Trips
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "24px",
                            color: "#14181F",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          {trips.count}
                        </Typography>
                      </Stack>

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <Stack
                        direction={"row"}
                        p={2}
                        gap={2}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            fontSize: "16px",
                            color: "#5A607F",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Active
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "24px",
                            color: "#14181F",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          {activeTrips.count}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Box>
                </Stack>
              )}
              <Stack
                direction={"row"}
                gap={1}
                mr={{ xs: 0, sm: 2 }}
                my={{ xs: 2, sm: 0 }}
              >
                <Box>
                  <TextField
                    placeholder={`Search ${searchText}`}
                    variant="outlined"
                    size="small"
                    value={search} // Bind value to state
                    onChange={handleSearchChange} // Update state on change
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
                        height: {
                          xs: "38px",
                          sm: "38px",
                          md: "32px",
                          lg: "32px",
                          xl: "38px",
                        }, // Adjust the height as needed
                        fontSize: "12px",
                        width: {
                          lg: "200px",
                          md: "180px",
                          xs: "180px",
                        }, // Responsive width
                        border: "1px solid #E2E8F0",
                      },
                    }}
                  />
                </Box>

             
             

<Box>
  <Select
    displayEmpty
    variant="outlined"
    size="small"
    value={status}
    onChange={handleStatusChange}  // Update state on change
    renderValue={(selected) => selected || "Status"} // Placeholder text
    sx={{
      "& .MuiInputBase-root": {
        height: {
          xs: "38px",
          sm: "32px",
          md: "28px",
          lg: "20px",
          xl: "28px",
        },
        lineHeight:"1em",
        fontSize: "8px",
        width: {
          lg: "200px",
          md: "180px",
          xs: "180px",
        },
        boxShadow: "none",
      },
    }}
    // endAdornment={
    //   <InputAdornment position="end" sx={{ marginRight: 0 }}>
    //     <IconButton sx={{ padding: 0 }}>
    //       <Box
    //         height="14px"
    //         width="20px"
    //         sx={{ display: "flex", alignItems: "center" }}
    //       >
    //         <img src={Arrowdown} width="100%" height="100%" />
    //       </Box>
    //     </IconButton>
    //   </InputAdornment>
    // }
  >
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="delayed">Delayed</MenuItem>
    <MenuItem value="upcoming">Upcoming</MenuItem>
    <MenuItem value="">All Trips</MenuItem>
  </Select>
</Box>

                <Box>
                  <TextField
                    placeholder="7/6/2024 - 5/8-2024"
                    variant="outlined"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: 0 }}>
                          <IconButton sx={{ padding: 0 }}>
                            {
                              <Box
                                height={{ xl: "14px", lg: "12px", md: "10px" }}
                                width={{ xl: "16px", lg: "14px", md: "12px" }}
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
                        height: {
                          xs: "38px",
                          sm: "38px",
                          md: "32px",
                          lg: "32px",
                          xl: "38px",
                        }, // Adjust the height as needed
                        fontSize: "12px",
                        width: {
                          md: "130px",
                          md: "150px",
                          xs: "180px",
                        }, // Responsive width
                        fontSize: "12px",
                        boxShadow: "none",
                      },
                    }}
                  />
                </Box>

                {/* {exportIcon && (
                <Button
                  variant="contained"
                  sx={{
                    marginRight: "15px",
                    marginLeft: "30px",
                    width: "160px",
                    height: {
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                      xl: "20px",
                    },
                    backgroundColor: "white",
                    color: "#344054",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    // paddingRight: "25px",
                    gap: "8px", // spacing between icon and text
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <img src={cloudLogo} width={"20px"} height={"20px"} />
                  {"Export"}
                </Button>
              )} */}
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={{ md: 9, sm: 2, xs: 0 }}
              my={{ xs: 2, md: 0 }}
              padding={"1rem 0rem"}
            >
              <Stack direction={"row"} gap={2}>
                <Box>
                  <Paper
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: {
                        xs: "350px",
                        sm: "400px",
                        md: "400px",
                        lg: "420px",
                        xl: "420px",
                      },
                      height: {
                        sm: "42px",
                        md: "30px",
                        lg: "35px",
                        xl: "42px",
                      },
                      boxShadow: "none",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      pl={2}
                      pr={2}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          fontSize: "16px",
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Total Trips
                      </Box>
                      <Typography
                        sx={{
                          fontSize: {
                            sm: "20px",
                            md: "18px",
                            lg: "21px",
                            xl: "24px",
                          },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {trips.count}
                      </Typography>
                    </Stack>

                    <Divider
                      sx={{ height: "29px", m: 0.5 }}
                      orientation="vertical"
                    />
                    <Stack
                      direction={"row"}
                      pl={2}
                      pr={2}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          fontSize: "16px",
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Active
                      </Box>
                      <Typography
                        sx={{
                          fontSize: {
                            sm: "20px",
                            md: "18px",
                            lg: "21px",
                            xl: "24px",
                          },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                       {activeTrips.count}
                      </Typography>
                    </Stack>
                    <Divider
                      sx={{ height: "19px", m: 0.5 }}
                      orientation="vertical"
                    />
                    <Stack
                      direction={"row"}
                      pl={2}
                      gap={{ xs: 1, sm: 2 }}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          fontSize: "16px",
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Upcoming
                      </Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "8px", // Extra small screens
                            sm: "10px", // Small screens
                            md: "16px", // Medium screens
                            lg: "20px", // Large screens
                            xl: "24px", // Extra large screens
                          },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {upcomingTrips.count}
                      </Typography>
                    </Stack>
                  </Paper>
                </Box>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  marginRight: "15px",
                  marginLeft: "30px",
                  width: "105px",
                  height: {
                    sm: "42px",
                    md: "30px",
                    lg: "35px",
                    xl: "42px",
                  },
                  backgroundColor: "white",
                  color: "#344054",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingRight: "25px",
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
          </React.Fragment>
        ) : (
          // Mobile view with collapsible accordion
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#5A607F",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <Box
                    sx={{
                      width: "44%",
                      height: "40px",
                      backgroundColor: "#FFF4F2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "2px",
                    }}
                  >
                    <img
                      src={icon ? icon : User}
                      height={"13px"}
                      width={"20px"}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#5A607F",
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" gap={2}>
                <>
                  {
                    <Stack
                      direction={"row"}
                      gap={1}
                      sx={{ flexWrap: "wrap", justifyContent: "center" }}
                    >
                      <Box>
                        <Paper
                          component="form"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: { xs: "100%", sm: "317px" }, // Full width on mobile, fixed width on larger screens
                            height: 96,
                            boxShadow: "none",
                            border: "1px solid #E0E0E0",
                            overflow: "hidden", // Prevent overflow
                          }}
                        >
                          <Stack
                            direction={"row"}
                            p={2}
                            gap={2}
                            alignItems={"center"}
                            sx={{ flexWrap: "wrap" }}
                          >
                            <Box
                              sx={{
                                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                                color: "#5A607F",
                                fontWeight: 500,
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Total Trips
                            </Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "20px", sm: "24px" }, // Adjust font size for mobile
                                color: "#14181F",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                               {trips.count}
                            </Typography>
                          </Stack>

                          <Divider
                            sx={{ height: 58, m: 0.9 }}
                            orientation="vertical"
                          />
                          <Stack
                            direction={"row"}
                            p={2}
                            gap={2}
                            alignItems={"center"}
                            sx={{ flexWrap: "wrap" }}
                          >
                            <Box
                              sx={{
                                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                                color: "#5A607F",
                                fontWeight: 500,
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Total Actives
                            </Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "20px", sm: "24px" }, // Adjust font size for mobile
                                color: "#14181F",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              {activeTrips.count}
                            </Typography>
                          </Stack>
                          <Divider
                            sx={{ height: 58, m: 0.9 }}
                            orientation="vertical"
                          />
                          <Stack
                            direction={"row"}
                            p={2}
                            gap={2}
                            alignItems={"center"}
                            sx={{ flexWrap: "wrap" }}
                          >
                            <Box
                              sx={{
                                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                                color: "#5A607F",
                                fontWeight: 500,
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Upcoming Trips
                            </Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "20px", sm: "24px" }, // Adjust font size for mobile
                                color: "#14181F",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              {upcomingTrips.count}
                            </Typography>
                          </Stack>
                        </Paper>
                      </Box>
                    </Stack>
                  }
                </>
                <TextField
                  placeholder={`Search ${searchText}`}
                  variant="outlined"
                  size="small"
                  value={search} // Bind value to state
                  onChange={handleSearchChange} // Update state on change
                />
                {/* <TextField placeholder="Role" variant="outlined" size="small" /> */}
                <TextField
                  placeholder="Status"
                  variant="outlined"
                  size="small"
                  value={status}
                  onChange={handleStatusChange} // Update state on change
                />
                <TextField
                  placeholder="7/6/2024 - 5/8/2024"
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained" sx={{ backgroundColor: "#15294E" }}>
                  {buttonText}
                </Button>

                {exportIcon && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#15294E" }}
                    startIcon={<img src={cloudLogo} alt="Export" />}
                  >
                    Export
                  </Button>
                )}
              </Stack>
            </AccordionDetails>
          </Accordion>
        )}
      </Card>
    </Box>
  );
}
