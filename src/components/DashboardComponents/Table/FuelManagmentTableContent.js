import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDown from "../../../assets/Table/arrow-down.png";
import { Box, Stack, Typography } from "@mui/material";

import { useGetVehicleWithFeulRecordDashboardQuery } from "../../../Api/apiSlice";

// function createData(
//   Vehicle,
//   Driver_Name,
//   Fuel_Consumption,
//   FuelCost,
//   location,
//   Hour_Meter,
//   Last_Service_Date,
//   Trip_Duration,
//   Distance,
//   Cost,
//   Status
// ) {
//   return {
//     Vehicle,
//     Driver_Name,
//     Fuel_Consumption,
//     FuelCost,
//     location,
//     Hour_Meter,
//     Last_Service_Date,
//     Trip_Duration,
//     Distance,
//     Cost,
//     Status
//   };
// }

// const rows = [
//   createData(
//     "Vehicale Name A",
//     "Mike Johnson",
//     "4",
//     "$400",
//     "South Esta",
//     "58,128",
//     "2024-03-18",
//     "0:04:55",
//     "120",
//     "$4554",
//     "Active"
//   ),
//   createData(
//     "Vehicale Name B",
//     "John Doe",
//     "3",
//     "$400",
//     "South Esta",
//     "58,128",
//     "2024-03-18",
//     "0:04:55",
//     "34",
//     "$4554",
//     "Inactive"
//   ),
//   createData(
//     "Vehicale Name C",
//     "Sarah Brown",
//     "5",
//     "$400",
//     "South Esta",
//     "58,128",
//     "2024-03-18",
//     "0:04:55",
//     "233",
//     "$4554",
//     "Active"
//   )
// ];

export default function FuelManagmentTableContent() {


  const { data, error, isLoading } =
    useGetVehicleWithFeulRecordDashboardQuery();

  const { vehicles } = data || {};
  console.log("here is the ~~~~~~~~~~~fuel vehicle data ", vehicles);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "52%",
        border: "1px ",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        mb: 1,
         width: "99%"
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
          {vehicles && vehicles.length > 0 ? (
            vehicles.map((vehicle) =>
              vehicle.Fuel && vehicle.Fuel.length > 0
                ? vehicle.Fuel.map((fuel) => (
                    <TableRow key={`${vehicle.id}-${fuel.id}`}>
                      <TableCell align="start">{vehicle.vehicleType}</TableCell>
                      <TableCell align="start">
                        {vehicle.vehicleModel}
                      </TableCell>
                      <TableCell align="start">{fuel.fuelQuantity}</TableCell>
                      <TableCell align="start">{fuel.fuelCost}</TableCell>

                      <TableCell align="center">dummy</TableCell>
                      <TableCell align="center">dummy</TableCell>
                      <TableCell align="center">
                        {new Date(fuel.fuelDate).toLocaleDateString("en-US")}
                      </TableCell>

                      <TableCell align="center">dummy</TableCell>
                      <TableCell align="center">dummy</TableCell>
                      <TableCell align="center">dummy</TableCell>
                      <TableCell align="start" fontWeight={500}>
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
                                vehicle.status === "active"
                                  ? "#ECFDF3"
                                  : "#F2F4F7",
                              borderRadius: "40%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px"
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor:
                                  vehicle.status === "active"
                                    ? "#28A745"
                                    : "#6C757D"
                              }}
                            />
                            <Typography
                              fontWeight={500}
                              fontSize={"14px"}
                              sx={{
                                color:
                                  vehicle.status === "active"
                                    ? "#037847"
                                    : "#364254"
                              }}
                              fontFamily={"Inter"}
                            >
                              {vehicle.status}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
                : null
            )
          ) : (
            <TableRow>
              <TableCell colSpan={12} align="center">
                No vehicles available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
