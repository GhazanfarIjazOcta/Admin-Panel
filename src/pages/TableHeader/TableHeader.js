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
} from "@mui/material";
import User from "../../assets/Card/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Arrowdown from "../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../assets/Table/CrossIcon.png";
import cloudLogo from "../../assets/Table/cloudLogo.png";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TableHeader({
  text,
  searchText,
  buttonText,
  trip,
  exportIcon,
  icon,
  route,
}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "99%", overflow: "hidden" }} mt={2}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          padding: "24px",
          height: "auto",
        }}
      >
        <React.Fragment>
          {/* Desktop and Tablet Layout */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            spacing={2}
            display={{ xs: "none", sm: "flex" }}
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
                  borderRadius: "2px",
                }}
              >
                <img src={icon ? icon : User} height={"13px"} width={"20px"} />
              </Box>

              <Typography
                sx={{
                  fontSize: { lg: "14px", xs: "10px" },
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
                      width: { lg: 317, xs: 30 },
                      height: { lg: 46, xs: 30 },
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
                          fontSize: { lg: "16px", xs: "12px" },
                          color: "#5A607F",
                          fontWeight: 500,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Total Trips
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        212
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
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Active
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { lg: "24px", xs: "12px" },
                          color: "#14181F",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        210
                      </Typography>
                    </Stack>
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
                    height: "38px",
                    width: { xs: "100%", sm: "200px" }, // Responsive width
                  },
                }}
              />
              <TextField
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
                    height: "38px",
                    width: { xs: "100%", sm: "110px" }, // Responsive width
                  },
                }}
              />
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
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "38px",
                    width: { xs: "100%", sm: "110px" }, // Responsive width
                  },
                }}
              />
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
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "38px",
                    width: { xs: "100%", sm: "210px" }, // Responsive width
                  },
                }}
              />
              {!exportIcon ? (
                <Button
                  variant="contained"
                  sx={{
                    marginRight: "15px",
                    marginLeft: "30px",
                    width: "150px",
                    height: "38px",
                    backgroundColor: "#15294E",
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: "25px",
                    gap: "3px",
                    "&:hover": {
                      backgroundColor: "#15294E",
                    },
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
                      backgroundColor: "white",
                    },
                  }}
                >
                  <img src={cloudLogo} width={"20px"} height={"20px"} />
                  {"Export"}
                </Button>
              )}
            </Stack>

          </Stack>

          {/* Mobile Layout */}
          <Accordion sx={{ display: { xs: "block", sm: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
                              fontSize: { lg: "16px", xs: "12px" },
                              color: "#5A607F",
                              fontWeight: 500,
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Total Trips
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            212
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
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Active
                          </Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "24px", xs: "12px" },
                              color: "#14181F",
                              fontWeight: 500,
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            210
                          </Typography>
                        </Stack>
                      </Paper>
                    </Box>
                  </Stack>
                )}


              


                <TextField
                  placeholder={`Search ${searchText}, ID`}
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                />
                <TextField
                  placeholder="Role"
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                />
                <TextField
                  placeholder="Status"
                  variant="outlined"
                  size="small"
                  fullWidth // Make it full width
                />
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
