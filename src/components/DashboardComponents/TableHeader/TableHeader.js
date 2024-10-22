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
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import User from "../../../assets/Card/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import CrossIcon from "../../../assets/Table/CrossIcon.png";
import cloudLogo from "../../../assets/Table/cloudLogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

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
  
  // Media query to detect mobile screen sizes
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "auto",
        overflow: "none",
        border: "1px ",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      }}
      mt={2}
    >
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          padding: "24px",
          height: "auto",
        }}
      >
        {!isMobile ? (
          // Desktop/Tablet view - same as before, unchanged
          <React.Fragment>
            <Stack direction={"row"} justifyContent={"space-between"}>
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
                  </Box>
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
                        height: "38px",
                        width: { xs: "2px", sm: "100px" },
                      },
                    }}
                  />
                </Box>
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
                        width: { xs: "100%", sm: "210px" },
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
                  {text}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" gap={2}>
                <TextField placeholder={`Search ${searchText} ,ID`} variant="outlined" size="small" />
                <TextField placeholder="Role" variant="outlined" size="small" />
                <TextField placeholder="Status" variant="outlined" size="small" />
                <TextField placeholder="7/6/2024 - 5/8/2024" variant="outlined" size="small" />
                <Button variant="contained" sx={{backgroundColor: "#15294E",}} onClick={() => navigate(route)}>{buttonText}</Button>
                {exportIcon && (
                  <Button variant="contained" sx={{backgroundColor: "#15294E",}} startIcon={<img src={cloudLogo} alt="Export" />}>
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
