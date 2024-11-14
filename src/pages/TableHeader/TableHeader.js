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
  MenuItem,
  Select
} from "@mui/material";
import User from "../../assets/Card/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Arrowdown from "../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../assets/Table/CrossIcon.png";
import cloudLogo from "../../assets/Table/cloudLogo.png";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetTripManagementDashboardQuery } from "../../Api/apiSlice";

export default function TableHeader({
  text,
  searchText,
  buttonText,
  trip,
  exportIcon,
  icon,
  route,
  setSearch,
  search,
  // serRole,
  // role,
  status,
  setStatus
}) {
  const navigate = useNavigate();

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
  console.log("here is the trip data ", data);

  return (
    <Box sx={{ width: "99%", overflow: "hidden" }} mt={2}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          padding: "24px",
          height: "auto"
        }}
      >
        <React.Fragment>
          {/* Desktop and Tablet Layout */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            spacing={2}
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex"
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={2}
              display={{ xs: "none", sm: "flex" }}
            >
              <Box
                sx={{
                  width: { lg: "44%", xs: "24%" },
                  height: { lg: "40px", xs: "20%" },
                  backgroundColor: "#FFF4F2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2px"
                }}
              >
                <img src={icon ? icon : User} height={"13px"} width={"20px"} />
              </Box>

              <Typography
                sx={{
                  fontSize: { lg: "14px", xs: "10px" },
                  color: "#5A607F",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif"
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
                      width: { lg: 317, xs: 30 },
                      height: { lg: "98%", xs: 30 },
                      boxShadow: "none",
                      border: "1px solid #E0E0E0"
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
                          fontSize: { lg: "16px", xs: "12px" },
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif"
                        }}
                      >
                        Total Trips
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif"
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
                          fontSize: { lg: "16px", xs: "12px" },
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif"
                        }}
                      >
                        Active
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif"
                        }}
                      >
                        {activeTrips.count}
                      </Typography>
                    </Stack>
                    {/* <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    /> */}
                    {/* <Stack
                      direction={"row"}
                      p={2}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          fontSize: { lg: "16px", xs: "12px" },
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif"
                        }}
                      >
                        Upcoming
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif"
                        }}
                      >
                        {upcomingTrips.count}
                      </Typography>
                    </Stack> */}
                    {/* <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    /> */}
                    {/* <Stack
                      direction={"row"}
                      p={2}
                      gap={2}
                      alignItems={"center"}
                    >
                      <Box
                        sx={{
                          fontSize: { lg: "16px", xs: "12px" },
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif"
                        }}
                      >
                        Delayed
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif"
                        }}
                      >
                        {delayedTrips.count}
                      </Typography>
                    </Stack> */}
                  </Paper>
                </Box>
              </Stack>
            )}
            <Stack direction={"row"} gap={2}>
              {/* Search and Filter Inputs */}
              <TextField
                placeholder={`Search ${searchText}, ID`}
                variant="outlined"
                size="small"
                value={search} // Bind value to state
                onChange={handleSearchChange} // Update state on change
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ marginRight: 0 }}>
                      <IconButton sx={{ padding: 0 }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100%",
                    width: { xs: "100%", sm: "200px", lg: "100%" } // Responsive width
                  }
                }}
              />
              {/* <TextField
                placeholder="Role"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ marginRight: 0 }}>
                      <IconButton sx={{ padding: 0 }}>
                        <img src={Arrowdown} height={"16px"} width={"20px"} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100%",
                    width: { xs: "100%", sm: "110px" , lg:"100%" }, // Responsive width
                  },
                }}
              /> */}
              <Select
                defaultValue=""
                variant="outlined"
                value={status}
                onChange={handleStatusChange} // Update state on change
                size="small"
                displayEmpty
                renderValue={(selected) => selected || "Status"} // Placeholder text
                // endAdornment={
                //   <InputAdornment position="end" sx={{ marginRight: 0 }}>
                //     <IconButton sx={{ padding: 0 }}>
                //       <img src={Arrowdown} height="16px" width="20px" />
                //     </IconButton>
                //   </InputAdornment>
                // }
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100%",
                    width: { xs: "100%", sm: "110px", lg: "100%" }
                  }
                }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="delayed">Delayed</MenuItem>
                <MenuItem value="">All trips</MenuItem>
              </Select>
              <TextField
                placeholder="7/6/2024 - 5/8-2024"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ marginRight: 0 }}>
                      <IconButton sx={{ padding: 0 }}>
                        <img src={CrossIcon} height={"16px"} width={"16px"} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100%",
                    width: { xs: "100%", sm: "210px", lg: "100%" } // Responsive width
                  }
                }}
              />
              {!exportIcon ? (
                <Button
                  variant="contained"
                  sx={{
                    marginRight: "15px",
                    marginLeft: "15px",
                    width: "150px",
                    height: "100%",
                    backgroundColor: "#15294E",
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: "25px",
                    gap: "3px",
                    "&:hover": {
                      backgroundColor: "#15294E"
                    }
                  }}
                  onClick={() => navigate(route)}
                >
                  <AddIcon />
                  {buttonText}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    marginRight: "15px",
                    marginLeft: "30px",
                    width: "160px",
                    height: "42px",
                    backgroundColor: "white",
                    color: "#344054",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: "25px",
                    gap: "8px",
                    "&:hover": {
                      backgroundColor: "white"
                    }
                  }}
                >
                  <img src={cloudLogo} width={"20px"} height={"20px"} />
                  {"Export"}
                </Button>
              )}
            </Stack>
          </Stack>

          {/* Mobile Layout */}
          <Accordion
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none"
              }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
                display={{ xs: "none", sm: "flex" }}
              >
                <Box
                  sx={{
                    width: { lg: "70%", xs: "70%" },
                    height: { lg: "90%", xs: "70%" },
                    backgroundColor: "#FFF4F2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "2px"
                  }}
                >
                  <img
                    src={icon ? icon : User}
                    height={"20px"}
                    width={"20px"}
                  />
                </Box>

                {/* <Typography
                sx={{
                  fontSize: { lg: "14px", xs: "10px" },
                  color: "#5A607F",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {text}
              </Typography> */}
              </Stack>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#5A607F",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                  mt: 0.6,
                  ml: 1.5
                }}
              >
                {text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" gap={1.5} sx={{ width: "100%" }}>
                {trip && (
                  <Stack direction={"row"} gap={2}>
                    <Box>
                      <Paper
                        component="form"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: { lg: 317, xs: 300 },
                          height: { lg: 46, xs: 60 },
                          boxShadow: "none",
                          border: "1px solid #E0E0E0"
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
                              fontSize: { lg: "16px", xs: "12px" },
                              color: "#5A607F",
                              fontWeight: 500,
                              fontFamily: "Inter, sans-serif"
                            }}
                          >
                            Total Trips
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif"
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
                              fontSize: { lg: "16px", xs: "12px" },
                              color: "#5A607F",
                              fontWeight: 500,
                              fontFamily: "Inter, sans-serif"
                            }}
                          >
                            Active
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif"
                            }}
                          >
                            {activeTrips.count}
                          </Typography>
                        </Stack>
                        {/* <Divider
                          sx={{ height: 28, m: 0.5 }}
                          orientation="vertical"
                        /> */}
                        {/* <Stack
                          direction={"row"}
                          p={2}
                          gap={2}
                          alignItems={"center"}
                        >
                          <Box
                            sx={{
                              fontSize: { lg: "16px", xs: "12px" },
                              color: "#5A607F",
                              fontWeight: 500,
                              fontFamily: "Inter, sans-serif"
                            }}
                          >
                            Upcoming
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif"
                            }}
                          >
                            {upcomingTrips.count}
                          </Typography>
                        </Stack>
                        <Divider
                          sx={{ height: 28, m: 0.5 }}
                          orientation="vertical"
                        /> */}
                        {/* <Stack
                          direction={"row"}
                          p={2}
                          gap={2}
                          alignItems={"center"}
                        >
                          <Box
                            sx={{
                              fontSize: { lg: "16px", xs: "12px" },
                              color: "#5A607F",
                              fontWeight: 500,
                              fontFamily: "Inter, sans-serif"
                            }}
                          >
                            Delayed
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif"
                            }}
                          >
                            {delayedTrips.count}
                          </Typography>
                        </Stack> */}
                      </Paper>
                    </Box>
                  </Stack>
                )}

                <TextField
                  placeholder={`Search ${searchText}, ID`}
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                  value={search} // Bind value to state
                  onChange={handleSearchChange} // Update state on change
                />
                {/* <TextField
                  placeholder="Role"
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                /> */}
                {/* <TextField
                  placeholder="Status"
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                  value={status}
                  onChange={handleStatusChange}  // Update state on change
                  
                /> */}
                <Select
                  displayEmpty
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={status}
                  onChange={handleStatusChange} // Update state on change
                  renderValue={(selected) => selected || "Status"} // Placeholder text
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Upcoming">Upcoming</MenuItem>
                  <MenuItem value="Delayed">Delayed</MenuItem>
                  <MenuItem value="">All Trips</MenuItem>
                </Select>
                <TextField
                  placeholder="7/6/2024 - 5/8/2024"
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                />
                <Button
                  variant="contained"
                  sx={{
                    width: "100%", // Make button full width
                    height: "38px",
                    marginTop: 1,
                    backgroundColor: "#15294E",
                    color: "white"
                  }}
                  onClick={() => navigate(route)}
                >
                  {buttonText}
                </Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </React.Fragment>
      </Card>
    </Box>
  );
}
