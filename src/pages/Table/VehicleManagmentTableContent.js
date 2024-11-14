import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDown from "../../assets/Table/arrow-down.png";
import smallArrow from "../../assets/Table/smallArrow.png";
import { Box, Stack, Typography } from "@mui/material";
import Edit from "../../assets/Table/Edit.png";
import Delete from "../../assets/Table/Delete.png";
function createData(
  Type,
  Model,
  MFG,
  VinSer,
  Hour_meter,
  Engine,
  Last_PM,
  Next_PM,
  PM_Reference,
  Last_Location,
  Status,
  Action,
) {
  return {
    Type,
    Model,
    MFG,
    VinSer,
    Hour_meter,
    Engine,
    Last_PM,
    Next_PM,
    PM_Reference,
    Last_Location,
    Status,
    Action,
  };
}

const rows = [
  createData(
    "--",
    "Nissan Altima",
    "--",
    "--",
    "32,389",
    "--",
    "--",
    "--",
    "--",
    "--",
    "Active",
  ),
  createData(
    "--",
    "Nissan Altima",
    "--",
    "--",
    "32,389",
    "--",
    "--",
    "--",
    "--",
    "--",
    "Inactive",
  ),
];

export default function VehicleManagmentTableContent() {
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
                  Type
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
                  Model
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
                  MFG
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
                  Vin/Ser#
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
                  Engine
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
                  Last PM
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
                  Next PM
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
                  PM Reference
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
                  Last Location
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
                  {row.Type}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.Model}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.MFG}
                </Typography>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  sx={{ color: "#3D4149" }}
                  fontFamily={"Inter"}
                >
                  {row.VinSer}
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
                    {row.Hour_meter}
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
                    {row.Engine}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.Last_PM}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.Next_PM}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.PM_Reference}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="start" sx={{ margin: "0px", padding: "15px" }}>
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
                    {row.Last_Location}
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
