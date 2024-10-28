import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Stack, Typography } from "@mui/material";
import maintenanceLogo from "../../../assets/Card/maintenanceLogo.png";
import ArrowDown from "../../../assets/Card/fi_chevron-down.png";
export default function DashboardLocationCard() {
  return (
    <Box sx={{ height: "auto", mt: { xs: 1, md: 0 } }}>
      <Card
        variant="outlined"
        sx={{
          border: "1px ",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)",
          height: {lg:"570px" , xs:"340px" , sm: "570px"},
          mb: 1
        }}
      >
        <React.Fragment>
          <Stack
            direction={"row"}
            // justifyContent={"space-between"}
            width={"100%"}
            pl={1}
            pt={2}
            height={"15%" }
            pr={1}
          >
            <Stack width={"20%"}>
              <Box
                sx={{
                  width: {
                    xs: "30px", // Extra small screens

                    md: "32px", // Medium screens
                    lg: "38px", // Large screens
                    xl: "44px", // Extra large screens
                  },
                  height: {
                    xs: "30px", // Extra small screens

                    md: "32px", // Medium screens
                    lg: "38px", // Large screens
                    xl: "44px", // Extra large screens
                  },
                  backgroundColor: "#FFF4F2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2px",
                }}
              >
                <Box
                  width={{
                    xs: "14px", // Extra small screens

                    md: "14px", // Medium screens
                    lg: "16px", // Large screens
                    xl: "18px",
                  }}
                  height={{
                    xs: "14px", // Extra small screens

                    md: "14px", // Medium screens
                    lg: "16px", // Large screens
                    xl: "18px",
                  }}
                >
                  <img src={maintenanceLogo} height={"100%"} width={"100%"} />
                </Box>
                
              </Box>

            </Stack>
            <Stack width={"100%"} direction={"column"}>
              {/* {" "} */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "9px", // Extra small screens

                    md: "10px", // Medium screens
                    lg: "15px", // Large screens
                    xl: "15px",
                  },
                  mt:1,
                  color: "#3D4149",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Real Time Location
              </Typography>
              {/* <Stack direction={"row"} gap={4} mt={1}>
                <Stack direction={"column"} gap={1}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#EC4040",
                      }}
                    ></Box>{" "}
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "8px", // Extra small screens

                          md: "9px", // Medium screens
                          lg: "10px", // Large screens
                          xl: "11px",
                        },
                        color: "#3D4149",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Delayed
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px", // Extra small screens

                        md: "14px", // Medium screens
                        lg: "15px", // Large screens
                        xl: "16px",
                      },
                      color: "#2A3547",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                      justifyContent: "flex-end",
                      display: "flex",
                    }}
                  >
                    03
                  </Typography>
                </Stack>
                <Stack direction={"column"} gap={1}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#1E5EFF",
                      }}
                    ></Box>{" "}
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "8px", // Extra small screens

                          md: "9px", // Medium screens
                          lg: "10px", // Large screens
                          xl: "11px",
                        },
                        color: "#3D4149",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                      }}
                      noWrap
                    >
                      En Route
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px", // Extra small screens

                        md: "14px", // Medium screens
                        lg: "15px", // Large screens
                        xl: "16px",
                      },
                      color: "#2A3547",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                      justifyContent: "flex-end",
                      display: "flex",
                    }}
                  >
                    03
                  </Typography>
                </Stack>
              </Stack> */}
            </Stack>
            {/* <Stack
              width={"20%"}
              // height={"100%"}
              direction={"row"}
            // alignItems={"center"}
            // gap={1}
            // pr={2}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px", // Extra small screens

                    md: "6px", // Medium screens
                    lg: "10px", // Large screens
                    xl: "11px",
                  },
                  color: "#BEC0CA",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                  position: "relative",
                  top: "3px",
                  right: "2px",
                }}
                noWrap
              >
                This weak
              </Typography>
              <Box
                width={{
                  xs: "12px", // Extra small screens

                  md: "14px", // Medium screens
                  lg: "16px", // Large screens
                  xl: "18px",
                }}
                height={{
                  xs: "12px", // Extra small screens

                  md: "14px", // Medium screens
                  lg: "16px", // Large screens
                  xl: "18px",
                }}
              >
                <img src={ArrowDown} height={"100%"} width={"100%"} />
              </Box>
            </Stack> */}
          </Stack>


          
          <Box height={{ md: "450px", xs: "250px" , sm:"450px"}} pl={"7px"} pr={"7px"}>
            <iframe
              width={"100%"}
              height={"100%"}
              borderRadius="0px"
              frameBorder="0"
              style={{ border: 0, borderRadius: "0px" }}
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330400.5089714776!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5d4b2f1f7db%3A0x8c4f2ef328e24f6c!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </Box>
        </React.Fragment>
      </Card>
    </Box>
  );
}
