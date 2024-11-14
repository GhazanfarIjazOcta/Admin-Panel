import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Stack, Typography } from "@mui/material";
import maintenanceLogo from "../../../assets/Card/maintenanceLogo.png";
import urgentLogo from "../../../assets/Card/urgentLogo.png";
export default function DashboardMaintenanceCard({}) {
  return (
    <Box sx={{ height: "100%" }}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          height: "100%",
          minHeight: "180px",
        }}
      >
        <React.Fragment>
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              p={2}
            >
              <Box
                sx={{
                  width: { md: "44px" },
                  height: { md: "44px" },
                  backgroundColor: "#FFF4F2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2px",
                }}
              >
                <img src={maintenanceLogo} height={"18px"} width={"18px"} />
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "10px", // Extra small screens

                    md: "10  px", // Medium screens
                    lg: "12px", // Large screens
                    xl: "14px",
                  },
                  color: "#5A607F",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                }}
                noWrap
              >
                Upcomming Maintenance
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px", // Extra small screens

                    md: "20px", // Medium screens
                    lg: "22px", // Large screens
                    xl: "24px",
                  },
                  color: "#2A3547",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                01
              </Typography>
            </Stack>
            <Stack p={1} direction={"row"}>
              <Box
                sx={{
                  width: "3px",
                  backgroundColor: "#F43F5E",
                  height: "50px",
                }}
              />
              <Box width={"100%"} backgroundColor="#FFE4E6">
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  pl={1}
                  pr={1}
                  pt={"2px"}
                >
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "7px", // Extra small screens

                          md: "8px", // Medium screens
                          lg: "9px", // Large screens
                          xl: "10px",
                        },
                        color: "#BE123C",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Urgent Maintenance
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px", // Extra small screens

                          md: "14px", // Medium screens
                          lg: "15px", // Large screens
                          xl: "16px",
                        },
                        color: "#BE123C",
                        fontWeight: 600,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Engine Repair
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "9px", // Extra small screens

                          md: "10px", // Medium screens
                          lg: "11px", // Large screens
                          xl: "12px",
                        },
                        color: "#BE123C",
                        fontWeight: 500,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      4:00 PM
                    </Typography>
                    <img src={urgentLogo} height={"10px"} width={"10px"} />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </React.Fragment>
      </Card>
    </Box>
  );
}
