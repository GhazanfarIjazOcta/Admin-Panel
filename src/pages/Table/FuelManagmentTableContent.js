import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDown from "../../assets/Table/arrow-down.png";
import { Box, Stack, Typography } from "@mui/material";
import Edit from "../../assets/Table/Edit.png";
import Delete from "../../assets/Table/Delete.png";

function createData(
  Vehicle,
  Driver_Name,
  Fuel_Consumption,
  FuelCost,
  location,
  Hour_Meter,
  Last_Service_Date,
  Trip_Duration,
  Distance,
  Cost,
  Status
) {
  return {
    Vehicle,
    Driver_Name,
    Fuel_Consumption,
    FuelCost,
    location,
    Hour_Meter,
    Last_Service_Date,
    Trip_Duration,
    Distance,
    Cost,
    Status,
  };
}

const rows = [
  createData(
    "Vehicale Name A",
    "Mike Johnson",
    "4",
    "$400",
    "South Esta",
    "58,128",
    "2024-03-18",
    "0:04:55",
    "120",
    "$4554",
    "Active"
  ),
  createData(
    "Vehicale Name B",
    "John Doe",
    "3",
    "$400",
    "South Esta",
    "58,128",
    "2024-03-18",
    "0:04:55",
    "34",
    "$4554",
    "Inactive"
  ),
  createData(
    "Vehicale Name C",
    "Sarah Brown",
    "5",
    "$400",
    "South Esta",
    "58,128",
    "2024-03-18",
    "0:04:55",
    "233",
    "$4554",
    "Active"
  ),
];

export default function FuelManagmentTableContent() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "52%",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
          <TableRow>
            <TableCell align="right">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Vehicle
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Driver Name
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Fuel Consumption (L)
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Fuel Cost
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Location
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Hour meter
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Last Service Date
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Trip Duration
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Distance (km)
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="start">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Cost
                </Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"12px"}
                  sx={{ color: "#667085" }}
                  fontFamily={"Inter"}
                >
                  Status
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Fuel_Consumption}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <Typography
                  fontWeight={500}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Vehicle}
                </Typography>
              </TableCell>
              <TableCell align="start">
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Driver_Name}
                </Typography>
              </TableCell>
              <TableCell align="start">
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149", marginLeft: "3px" }}
                  fontFamily={"Inter"}
                >
                  {row.Fuel_Consumption}
                </Typography>
              </TableCell>
              <TableCell align="start">
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.FuelCost}
                </Typography>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.location}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{
                      color:
                        row.Signal_Strength == "Good"
                          ? "#28A745"
                          : row.Signal_Strength == "Poor"
                          ? "#D12E34"
                          : "black",
                    }}
                    fontFamily={"Inter"}
                  >
                    {row.Hour_Meter}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.Last_Service_Date}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.Trip_Duration}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.Distance}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start">
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                    sx={{ color: "#3D4149" }}
                    fontFamily={"Inter"}
                  >
                    {row.Cost}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell align="center">
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      width: "80px",
                      height: "25px",
                      backgroundColor:
                        row.Status == "Active" ? "#ECFDF3" : "#F2F4F7",
                      borderRadius: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6, // Adjust size as needed
                        height: 6, // Adjust size as needed
                        borderRadius: "50%",
                        backgroundColor:
                          row.Status == "Active" ? "#28A745" : "#6C757D",
                      }}
                    />
                    <Typography
                      fontWeight={500}
                      fontSize={"14px"}
                      sx={{
                        color: row.Status == "Active" ? "#037847" : "#364254",
                      }}
                      fontFamily={"Inter"}
                    >
                      {row.Status}
                    </Typography>
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
