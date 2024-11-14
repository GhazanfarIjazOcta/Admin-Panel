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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import User from "../../../assets/Card/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import cloudLogo from "../../../assets/Table/cloudLogo.png";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Box sx={{ width: "99%", overflow: "none" }} mt={2}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          padding: "24px",
        }}
      >
        <React.Fragment>
          {/* For large screens */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ display: { xs: "none", md: "flex" } }}
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
                <img src={icon ? icon : User} height={"13px"} width={"20px"} />
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

            {trip && (
              <Stack direction={"row"} gap={2}>
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
                  <Stack direction={"row"} p={2} gap={2} alignItems={"center"}>
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
                      212
                    </Typography>
                  </Stack>

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                  <Stack direction={"row"} p={2} gap={2} alignItems={"center"}>
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
                      210
                    </Typography>
                  </Stack>
                </Paper>
              </Stack>
            )}

            <Stack direction={"row"} gap={2}>
              <Box>
                <TextField
                  placeholder={`Search ${searchText} ,ID`}
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
                      height: "38px", // Adjust the height as needed
                      width: { xs: "2px", sm: "100px" }, // Responsive width
                    },
                  }}
                />
              </Box>

              {/* Date Range Field */}
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
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "38px",
                      width: { xs: "100%", sm: "210px" }, // Responsive width
                    },
                  }}
                />
              </Box>

              {/* Role Field */}
              <Box>
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
                      width: { xs: "100%", sm: "110px" },
                    },
                  }}
                />
              </Box>

              {/* Status Field */}
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
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "38px",
                      width: { xs: "100%", sm: "110px" },
                    },
                  }}
                />
              </Box>

              {!exportIcon && (
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
                    gap: "3px", // spacing between icon and text
                    "&:hover": {
                      backgroundColor: "#15294E",
                    },
                  }}
                  onClick={() => navigate(route)}
                >
                  <AddIcon />
                  {buttonText}
                </Button>
              )}
              {exportIcon && (
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
                    gap: "8px", // spacing between icon and text
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

          {/* Mobile view with Drawer and Dropdown */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A607F",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {text}
            </Typography>
          </Stack>

          {/* Drawer for mobile */}
          <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer}>
            <List sx={{ width: 250 }}>
              <ListItem button onClick={toggleDropdown}>
                <ListItemText primary="Filters" />
                {dropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>

              <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                <List>
                  {/* Search Field */}
                  <ListItem>
                    <TextField
                      placeholder={`Search ${searchText} ,ID`}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ marginRight: 0 }}
                          >
                            <IconButton sx={{ padding: 0 }}>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "38px", // Adjust the height as needed
                          width: "100%", // Responsive width
                        },
                      }}
                    />
                  </ListItem>

                  {/* Date Range Field */}
                  <ListItem>
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
                          height: "38px",
                          width: "100%", // Responsive width
                        },
                      }}
                    />
                  </ListItem>

                  {/* Role Field */}
                  <ListItem>
                    <TextField
                      placeholder="Role"
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
                          height: "38px",
                          width: "100%", // Responsive width
                        },
                      }}
                    />
                  </ListItem>

                  {/* Status Field */}
                  <ListItem>
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
                          height: "38px",
                          width: "100%", // Responsive width
                        },
                      }}
                    />
                  </ListItem>

                  {/* Add or Export button */}
                  <ListItem>
                    {!exportIcon ? (
                      <Button
                        variant="contained"
                        onClick={() => navigate(route)}
                      >
                        <AddIcon />
                        {buttonText}
                      </Button>
                    ) : (
                      <Button variant="contained">
                        <img src={cloudLogo} width={"20px"} height={"20px"} />
                        Export
                      </Button>
                    )}
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Drawer>
        </React.Fragment>
      </Card>
    </Box>
  );
}
