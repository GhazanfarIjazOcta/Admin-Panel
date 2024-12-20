import {
  Box,
  Card,
  CardContent,
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
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import MyCalendar from "../../../pages/Calendar/MyCalendar";
import { useNavigate } from "react-router-dom";
import { maintenanceSchedulingStyles } from "../../UI/styles/Main";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function MaintenanceScheduling() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("vehicles"); // Default selected option

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box
      mt={12}
      sx={{
        position: "absolute",
        mt: { xs: 13, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: "82%", // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed
      }}
    >
      <Paper sx={maintenanceSchedulingStyles.headerMainContainer}>
        <Stack
          p={{ lg: 3, xs: 0 }}
          mr={{ lg: 2, xs: 0 }}
          ml={{ lg: 0, xs: 3 }}
          direction={"row"}
          height={"auto"}
          flexWrap="wrap"
        >
          {/* Card for mobile view */}
          <Card sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Maintenance Scheduling</Typography>
                <img src={MaintenanceLogo} height={"38px"} width={"45px"} />
                <IconButton onClick={handleExpandClick}>
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {/* Collapsible content */}
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  spacing={2}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={maintenanceSchedulingStyles.mainenanceText2}
                    >
                      05
                    </Typography>
                  </Box>

                  {/* <Stack direction="column" spacing={2}>
                    <Box display="flex" alignItems="center">
                      <img
                        src={RadioButtonLogo}
                        height={"24px"}
                        width={"24px"}
                      />
                      <img src={Vehicle} height={"24px"} width={"24px"} />
                      <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                        Vehicles
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <img
                        src={RadioButtonLogo}
                        height={"24px"}
                        width={"24px"}
                      />
                      <img src={Hardware} height={"24px"} width={"24px"} />
                      <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                        Devices
                      </Typography>
                    </Box>
                  </Stack> */}

                  <Stack direction="column" spacing={2}>
                    {/* Vehicles Option */}
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => handleSelection("vehicles")}
                      sx={{ cursor: "pointer" }}
                    >
                      {/* Radio Button */}
                      {selectedOption === "vehicles" ? (
                        <RadioButtonCheckedIcon style={{ color: "orange" }} />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                      {/* Image */}
                      <img
                        src={Vehicle}
                        alt="Vehicle Icon"
                        height="24px"
                        width="24px"
                      />
                      {/* Text */}
                      <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                        Vehicles
                      </Typography>
                    </Box>

                    {/* Devices Option */}
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => handleSelection("devices")}
                      sx={{ cursor: "pointer" }}
                    >
                      {/* Radio Button */}
                      {selectedOption === "devices" ? (
                        <RadioButtonCheckedIcon style={{ color: "orange" }} />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                      {/* Image */}
                      <img
                        src={Hardware}
                        alt="Device Icon"
                        height="24px"
                        width="24px"
                      />
                      {/* Text */}
                      <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                        Devices
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="column" spacing={2} mt={2}>
                    <TextField
                      placeholder="Status"
                      variant="outlined"
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: 0 }}
                          >
                            <IconButton sx={{ padding: 0 }}>
                              <img
                                src={Arrowdown}
                                height={"16px"}
                                width={"20px"}
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
                    <TextField
                      placeholder="7/6/2024 - 5/8-2024"
                      variant="outlined"
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: 0 }}
                          >
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
                  </Stack>

                  <Typography
                    sx={{
                      ...maintenanceSchedulingStyles.historyText,
                      cursor: "pointer",
                      mt: 2,
                    }}
                    onClick={() => navigate("/dashboard/history")}
                  >
                    Go to History
                  </Typography>
                </Stack>
              </Collapse>
            </CardContent>
          </Card>

          {/* Original layout for larger screens */}
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            width={{ xs: "100%", sm: "50%", md: "30%" }}
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            gap={{ xs: 2, md: "8%" }}
            mb={{ xs: 2, md: 0 }}
          >
            <Box sx={maintenanceSchedulingStyles.boxContainer}>
              <img src={MaintenanceLogo} height={"24px"} width={"24px"} />
            </Box>
            <Typography sx={maintenanceSchedulingStyles.mainenanceText}>
              Maintenance Scheduling
            </Typography>
            <Typography sx={maintenanceSchedulingStyles.mainenanceText2}>
              05
            </Typography>
          </Stack>

          {/* <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            width={{ xs: "100%", sm: "50%", md: "70%" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent={"flex-end"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={{ xs: 2, md: 6 }}
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

            <Stack direction={"row"} gap={2} ml={{ xs: 0, md: 3 }}>
              <Box>
                <TextField
                  placeholder="Status"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <img src={Arrowdown} height={"16px"} width={"20px"} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "44px",
                      width: { xs: "100%", sm: "140px" } // Responsive width
                    }
                  }}
                />
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
                          <img src={CrossIcon} height={"16px"} width={"16px"} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "44px",
                      width: { xs: "100%", sm: "210px" } // Responsive width
                    }
                  }}
                />
              </Box>
            </Stack>

            <Typography
              sx={{
                ...maintenanceSchedulingStyles.historyText,
                cursor: "pointer",
                mt: { xs: 2, md: 0 } // Add margin-top for smaller screens
              }}
              onClick={() => navigate("/dashboard/history")}
            >
              Go to History
            </Typography>
          </Stack> */}

          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            width={{ xs: "100%", sm: "50%", md: "70%" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent={"flex-end"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={{ xs: 2, md: 6 }}
          >
            {/* Vehicles Option */}
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              onClick={() => handleSelection("vehicles")}
              sx={{ cursor: "pointer" }}
            >
              {selectedOption === "vehicles" ? (
                <RadioButtonCheckedIcon style={{ color: "orange" }} />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
              <img
                src={Vehicle}
                height={"24px"}
                width={"24px"}
                alt="Vehicle Icon"
              />
              <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                Vehicles
              </Typography>
            </Stack>

            {/* Devices Option */}
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              onClick={() => handleSelection("devices")}
              sx={{ cursor: "pointer" }}
            >
              {selectedOption === "devices" ? (
                <RadioButtonCheckedIcon style={{ color: "orange" }} />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
              <img
                src={Hardware}
                height={"24px"}
                width={"24px"}
                alt="Device Icon"
              />
              <Typography sx={maintenanceSchedulingStyles.vehicalText}>
                Devices
              </Typography>
            </Stack>

            {/* TextField Options */}
            <Stack direction={"row"} gap={2} ml={{ xs: 0, md: 3 }}>
              <Box>
                <TextField
                  placeholder="Status"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <img
                            src={Arrowdown}
                            height={"16px"}
                            width={"20px"}
                            alt="Arrow Down"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "44px",
                      width: { xs: "100%", sm: "140px" }, // Responsive width
                    },
                  }}
                />
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
                          <img
                            src={CrossIcon}
                            height={"16px"}
                            width={"16px"}
                            alt="Cross Icon"
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

            {/* History Link */}
            <Typography
              sx={{
                ...maintenanceSchedulingStyles.historyText,
                cursor: "pointer",
                mt: { xs: 2, md: 0 }, // Add margin-top for smaller screens
              }}
              onClick={() => navigate("/dashboard/history")}
            >
              Go to History
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Box mt={2}>
        <Paper sx={maintenanceSchedulingStyles.headerMainContainer}>
          <MyCalendar
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default MaintenanceScheduling;
