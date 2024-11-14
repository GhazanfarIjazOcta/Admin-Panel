import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";

function createData(
  TripID,
  Vehicle,
  Driver_Name,
  Starting_Location,
  Ending_Location,
  Duration,
  Distance,
  Fuel_Consumption,
  DateAndTime,
  Status
) {
  return {
    TripID,
    Vehicle,
    Driver_Name,
    Starting_Location,
    Ending_Location,
    Duration,
    Distance,
    Fuel_Consumption,
    DateAndTime,
    Status
  };
}

const rows = [
  createData(
    "01",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "0:04:55",
    "120",
    "4",
    "12 Dec 8:00 - 18:00",
    "Active"
  ),
  createData(
    "02",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "0:04:55",
    "120",
    "4",
    "12 Dec 8:00 - 18:00",
    "Inactive"
  ),
  createData(
    "03",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "0:04:55",
    "120",
    "4",
    "12 Dec 8:00 - 18:00",
    "Upcomming"
  ),
  createData(
    "04",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "Regular Text ",
    "0:04:55",
    "120",
    "4",
    "12 Dec 8:00 - 18:00",
    "Delayed"
  )
];

export default function DashboardTableContent() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "100%",
        width: "100%",
        boxShadow: "none"
        // backgroundColor: "yellow",
      }}
    >
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
          <TableRow>
            <TableCell
              align="right"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Trip ID
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              align="start"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Vehicle
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              align="start"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Driver Name
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              align="start"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Starting Location
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              align="start"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Ending Location
                </Typography>
              </Stack>
            </TableCell>

            <TableCell
              align="center"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Status
                </Typography>
                {/* <img src={ArrowDown} height={"16px"} width={"16px"} /> */}
              </Stack>
            </TableCell>
            <TableCell
              align="center"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Date & Time
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              align="center"
              sx={{ height: "5px", margin: "0px", padding: "2px" }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Action
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.TripID}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 }
              }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ margin: "0px", padding: "0px" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.TripID}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "0px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"0.8rem"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Vehicle}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "0px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"0.8rem"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Driver_Name}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "0px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"0.8rem"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Starting_Location}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "0px" }}>
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"0.8rem"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.Ending_Location}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "0px" }}>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      width: {
                        sm: "40px",
                        md: "50px",
                        lg: "60px",
                        xl: "80px"
                      },
                      height: {
                        sm: "14px",
                        md: "16px",
                        lg: "18px",
                        xl: "20px"
                      },
                      backgroundColor:
                        row.Status == "Active"
                          ? "#ECFDF3"
                          : row.Status == "Inactive"
                            ? "#F2F4F7"
                            : row.Status == "Upcomming"
                              ? "#EBF3FB"
                              : row.Status == "Delayed"
                                ? "#FEF6EC"
                                : "#F38712",
                      borderRadius: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px"
                    }}
                  >
                    {console.log("statuses", row.Status)}
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor:
                          row.Status == "Active"
                            ? "#037847"
                            : row.Status == "Inactive"
                              ? "#364254"
                              : row.Status == "Upcomming"
                                ? "#007BFF"
                                : row.Status == "Delayed"
                                  ? "#F38712"
                                  : "#F38712"
                      }}
                    />
                    <Typography
                      fontWeight={500}
                      fontSize={{
                        sm: "6px",
                        md: "6px",
                        lg: "8px",
                        xl: "10px"
                      }}
                      sx={{
                        color:
                          row.Status == "Active"
                            ? "#037847"
                            : row.Status == "Inactive"
                              ? "#364254"
                              : row.Status == "Upcomming"
                                ? "#007BFF"
                                : row.Status == "Delayed"
                                  ? "#F38712"
                                  : "#F38712"
                      }}
                      fontFamily={"Inter"}
                    >
                      {row.Status}
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "0px" }}>
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"0.8rem"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.DateAndTime}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "0px" }}>
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  <Box
                    height={{ xl: "22px", lg: "20px", md: "18px", sm: "16px" }}
                    width={{ xl: "22px", lg: "20px", md: "18px", sm: "16px" }}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={Edit} width={"100%"} height={"100%"} />
                  </Box>
                  <Box
                    height={{ xl: "22px", lg: "20px", md: "18px", sm: "16px" }}
                    width={{ xl: "22px", lg: "20px", md: "18px", sm: "16px" }}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={Delete} width={"100%"} height={"100%"} />
                  </Box>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
