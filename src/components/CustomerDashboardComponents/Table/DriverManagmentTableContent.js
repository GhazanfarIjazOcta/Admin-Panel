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
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";
function createData(
  DriverID,
  Name,
  Email,
  Phone_number,
  Vehicle_Assigned,
  Total_Trips_Completed,
  Status,
  Last_Active,
  Action,
) {
  return {
    DriverID,
    Name,
    Email,
    Phone_number,
    Vehicle_Assigned,
    Total_Trips_Completed,
    Status,
    Last_Active,
    Action,
  };
}

const rows = [
  createData(
    1,
    "John Doe",
    "john.doe@example.com",
    "555 - 1234",
    "Vehicle A",
    "23",
    "On Duty",
    "2024-08-05 09:15 AM",
  ),
  createData(
    2,
    "John Doe",
    "john.doe@example.com",
    "555 - 1234",
    "Vehicle B",
    "45",
    "Off Duty",
    "2024-08-05 09:15 AM",
  ),
  createData(
    3,
    "John Doe",
    "john.doe@example.com",
    "555 - 1234",
    "Vehicle C",
    "44",
    "On Duty",
    "2024-08-05 09:15 AM",
  ),
  createData(
    4,
    "John Doe",
    "john.doe@example.com",
    "555 - 1234",
    "Vehicle D",
    "29",
    "On Duty",
    "2024-08-05 09:15 AM",
  ),
];

export default function DriverManagmentTableContent() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "60%",
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
                  Driver ID
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Name
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Email
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Phone Number
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Vehicle Assigned
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Total Trips Completed
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
                  Last Active
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Action
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.UserID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ margin: "0px", padding: "15px" }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.DriverID}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Name}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Email}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Phone_number}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.Vehicle_Assigned}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.Total_Trips_Completed}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "15px" }}>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      width: "90px",
                      height: "30px",
                      backgroundColor:
                        row.Status == "On Duty" ? "#ECFDF3" : "#F2F4F7",
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
                          row.Status == "On Duty" ? "#28A745" : "#6C757D",
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
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Last_Active}
                </Typography>
              </TableCell>
              <TableCell align="center" sx={{ margin: "0px", padding: "15px" }}>
                <Stack
                  direction={"row"}
                  gap={2}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  <img src={Edit} width={"24px"} height={"24px"} />
                  <img src={Delete} width={"24px"} height={"24px"} />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
