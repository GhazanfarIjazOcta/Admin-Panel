import {
  Box,
  Collapse,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MaintenanceLogo from "../../../assets/Maintenance_Scheduling/Maintenance.png";
import RadioButtonLogo from "../../../assets/Maintenance_Scheduling/RadioButton.png";
import Vehicle from "../../../assets/Maintenance_Scheduling/Vehicle.png";
import Hardware from "../../../assets/Maintenance_Scheduling/HardwareLogo.png";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import { textFieldContainerStyle } from "../../UI/styles/Layout";
import SearchIcon from "@mui/icons-material/Search";
import greenEventIcon from "../../../assets/calander/greenEventIcon.png";
import purpleEventIcon from "../../../assets/calander/purpleEventIcon.png";
import {
  historyStyles,
  maintenanceSchedulingStyles,
} from "../../UI/styles/Main";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function History() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Dummy data for history boxes
  const dummyData = [
    {
      time: "11:00 AM",
      icon: purpleEventIcon,
      date: "DD/MM/YY",
      inspection: "Routine Inspection",
      task: "Brake Replacement",
      driverName: "Joe Ben",
      vehicle: "Toyota X",
    },
    {
      time: "02:00 PM",
      icon: greenEventIcon,
      date: "DD/MM/YY",
      inspection: "Oil Change",
      task: "Engine Oil Replacement",
      driverName: "Sam Woods",
      vehicle: "Ford F-150",
    },
    {
      time: "11:00 AM",
      icon: purpleEventIcon,
      date: "DD/MM/YY",
      inspection: "Routine Inspection",
      task: "Brake Replacement",
      driverName: "Joe Ben",
      vehicle: "Toyota X",
    },
    {
      time: "11:00 AM",
      icon: purpleEventIcon,
      date: "DD/MM/YY",
      inspection: "Routine Inspection",
      task: "Brake Replacement",
      driverName: "Joe Ben",
      vehicle: "Toyota X",
    },

    // Add more entries as needed
  ];

  return (
    <Box
      mt={12}
      sx={{
        ...historyStyles.mainContainer,
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        px: { xs: 2, sm: 2, md: 2, lg: 0 },
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
        overflow: "none",
        width: { lg: "82%", xs: "90%" },
      }}
    >
      <Paper sx={maintenanceSchedulingStyles.headerMainContainer}>
        <Stack p={3} mr={2} direction={"row"} height={"auto"} flexWrap="wrap">
          {/* Collapse Card for mobile view */}
          <Stack sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">History</Typography>
              <IconButton onClick={handleExpandClick}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {/* Collapsible content */}
              <Stack direction="column" spacing={2} mt={2}>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <img src={RadioButtonLogo} height={"24px"} width={"24px"} />
                  <img src={Vehicle} height={"24px"} width={"24px"} />
                  <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                    Vehicles
                  </Typography>
                </Stack>

                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <img src={RadioButtonLogo} height={"24px"} width={"24px"} />
                  <img src={Hardware} height={"24px"} width={"24px"} />
                  <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                    Devices
                  </Typography>
                </Stack>

                <Box>
                  <TextField
                    placeholder="7/6/2024 - 5/8/2024"
                    variant="outlined"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: 0 }}>
                          <IconButton sx={{ padding: 0 }}>
                            <img
                              src={CrossIcon}
                              height={"16px"}
                              width={"16px"}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "44px",
                        width: "100%", // Full width on mobile
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Collapse>
          </Stack>

          {/* Original layout for larger screens */}
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            width={"100%"}
            direction={"row"}
            height={"auto"}
          >
            <Stack
              width={"30%"}
              direction={"row"}
              alignItems={"center"}
              gap={"8%"}
            >
              <Box sx={maintenanceSchedulingStyles.boxContainer}>
                <img src={MaintenanceLogo} height={"24px"} width={"24px"} />
              </Box>
              <Typography sx={maintenanceSchedulingStyles.mainenanceText}>
                History
              </Typography>
              <Box sx={textFieldContainerStyle}>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "44px",
                      width: { xs: "100%", sm: "296px" }, // Responsive width
                    },
                  }}
                />
              </Box>
            </Stack>

            <Stack
              width={"70%"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              direction={"row"}
              gap={6}
            >
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <img src={RadioButtonLogo} height={"24px"} width={"24px"} />
                <img src={Vehicle} height={"24px"} width={"24px"} />
                <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                  Vehicles
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <img src={RadioButtonLogo} height={"24px"} width={"24px"} />
                <img src={Hardware} height={"24px"} width={"24px"} />
                <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                  Devices
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={2} ml={3}>
                <Box>
                  <TextField
                    placeholder="7/6/2024 - 5/8/2024"
                    variant="outlined"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: 0 }}>
                          <IconButton sx={{ padding: 0 }}>
                            <img
                              src={CrossIcon}
                              height={"16px"}
                              width={"16px"}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "44px",
                        width: { xs: "100%", sm: "210px" }, // Responsive width
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Paper>

      <Box mt={2} sx={historyStyles.mainContainer}>
        <Paper sx={historyStyles.paperContainer}>
          <Stack
            p={{ lg: 4, xs: 0 }}
            direction={{ xs: "column", md: "row" }}
            gap={2}
            flexWrap="wrap"
          >
            {dummyData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  ...historyStyles.boxContainer,
                  minWidth: "250px",
                  maxWidth: "300px",
                  flex: "1 1 250px",
                  mb: 2,
                  backgroundColor: index % 2 === 0 ? "#D4F2E8" : "#F3E6FF", // Alternate colors
                }}
                pl={2}
                pr={2}
                pt={1}
                pb={1}
              >
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Typography variant="subtitle1" style={historyStyles.time}>
                      {item.time}
                    </Typography>
                    <img src={item.icon} width={"12px"} height={"12px"} />
                  </Stack>
                  <Typography variant="subtitle1" style={historyStyles.date}>
                    {item.date}
                  </Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography
                    variant="subtitle1"
                    style={historyStyles.middleText}
                  >
                    {item.inspection}
                  </Typography>
                  <Typography variant="subtitle1" style={historyStyles.date}>
                    {item.task}
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack direction={"column"}>
                    <Typography
                      variant="subtitle1"
                      style={historyStyles.driverText}
                    >
                      Driver's Name
                    </Typography>
                    <Typography variant="subtitle1" style={historyStyles.time}>
                      {item.driverName}
                    </Typography>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography
                      variant="subtitle1"
                      style={historyStyles.driverText}
                    >
                      Vehicle
                    </Typography>
                    <Typography variant="subtitle1" style={historyStyles.time}>
                      {item.vehicle}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export default History;
