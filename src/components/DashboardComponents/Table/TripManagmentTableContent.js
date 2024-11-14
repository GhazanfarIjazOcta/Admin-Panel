import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDown from "../../../assets/Table/arrow-down.png";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";

import {
  useGetTripManagementSearchDashboardQuery,
  useDeleteTripMutation,
  useUpdateTripMutation
} from "../../../Api/apiSlice";
import { useState } from "react";

import CustomAlert from "../../UI/CustomAlert";
import { TablePagination } from "@mui/material";

// deleteTrip
// updatetrip

export default function TripManagmentTableContent({
  setSearch,
  search,
  status,
  setStatus
}) {
  // const { data, error, isLoading } = useGetTripManagementDashboardQuery();
  const { data, error, isLoading } = useGetTripManagementSearchDashboardQuery({
    search,
    status
  });

  const [deleteTrip] = useDeleteTripMutation();
  const [updateTrip] = useUpdateTripMutation();

  // for alerts (notifications)
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  //////////////////////////////////

  // const { searchdata } = useGetUserManagementSearchDashboardQuery({ search });

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedtrip, setSelectedtrip] = useState(null);

  // State for edit fields
  const [editStartLocation, setEditStartLocation] = useState("");
  const [editEndLocation, setEditEndLocation] = useState("");

  const [editStatus, setEditStatus] = useState("");

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // const { trips } = data || {};
  const trips = data;
  console.log("here is the tripppsps data ", data);
  console.log("here is the tripppsps data ", trips);

  // Load user details into edit form
  const handleEdit = (trip) => {
    setSelectedtrip(trip);
    setEditStartLocation(trip.startLocation);
    setEditEndLocation(trip.endLocation);

    setEditStatus(trip.status);
    setOpenEditModal(true);
  };

  // Handler to open the delete modal and set the selected user
  const handleDeleteOpen = (user) => {
    setSelectedtrip(user);
    setOpenDeleteModal(true);
  };

  // Handler to close the edit modal
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedtrip(null);
  };

  // Handler to close the delete modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedtrip(null);
  };

  // Handler to delete a user
  const handleDeleteConfirm = async () => {
    try {
      await deleteTrip(selectedtrip.id);
      console.log("Trip deleted successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Trip Data Deleted successfully!"
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Trip Data not Deleted!"
      });
    } finally {
      handleCloseDeleteModal();
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      const tripData = {
        tripId: selectedtrip.id,
        startLocation: editStartLocation,
        endLocation: editEndLocation,

        status: editStatus
      };

      console.log(" updated data sent is trip data :::: ", tripData);
      await updateTrip(tripData);
      if (selectedtrip.role === "driver") {
        // await updateDriver(driverData);
      }
      // Extend this block to handle other user roles if required
      console.log("Trip updated successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Trip updated successfully"
      });
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating trip:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Error updating trip!!:"
      });
    }
  };

  /////////////////////////////////////////

  function createData(
    TripID,
    trip,
    Driver_Name,
    Starting_Location,
    Ending_Location,
    Duration,
    Distance,
    Fuel_Consumption,
    Cost,
    Status
  ) {
    return {
      TripID,
      trip,
      Driver_Name,
      Starting_Location,
      Ending_Location,
      Duration,
      Distance,
      Fuel_Consumption,
      Cost,
      Status
    };
  }

  const rows = [
    createData(
      "T001",
      "V001",
      "Mike Johnson",
      "A",
      "B",
      "0:04:55",
      "120",
      "4",
      "$4554",
      "Active"
    ),
    createData(
      "T002",
      "V002",
      "jhon Doe",
      "C",
      "D",
      "0:04:55",
      "34",
      "3",
      "$4554",
      "Inactive"
    ),
    createData(
      "T003",
      "V003",
      "Sarah Brown",
      "E",
      "F",
      "0:04:55",
      "233",
      "5",
      "$4554",
      "Active"
    )
  ];

  ////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  /////////////////////////////////////////

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "60%",
        width: "99%"
      }}
    >
      <Table sx={{ minWidth: 640 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
          <TableRow>
            {/* <TableCell align="right">
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
                  Trip ID
                </Typography>
              </Stack>
            </TableCell> */}
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
                  trip
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
                  Starting Location
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
                  Ending Location
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
                  Duration
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
                  Cost
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
                  Dummy
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
          {trips
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((trip) => (
              // {trips?.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell align="center">{trip.id}</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">{trip.startLocation}</TableCell>
                <TableCell align="center">{trip.endLocation}</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center" fontWeight={500}>
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
                          trip.status == "active" ? "#ECFDF3" : "#F2F4F7",
                        borderRadius: "40%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px"
                      }}
                    >
                      <Box
                        sx={{
                          width: 6, // Adjust size as needed
                          height: 6, // Adjust size as needed
                          borderRadius: "50%",
                          backgroundColor:
                            trip.status == "active" ? "#28A745" : "#6C757D"
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        sx={{
                          color: trip.status == "active" ? "#037847" : "#364254"
                        }}
                        fontFamily={"Inter"}
                      >
                        {trip.status}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                {/* <TableCell align="center">
                <Stack direction="row" spacing={2}>
                  <img src={Edit} alt="Edit" width="16px" height="16px" />
                  <img src={Delete} alt="Delete" width="16px" height="16px" />
                </Stack>
              </TableCell> */}
                <TableCell
                  align="center"
                  sx={{ margin: "0px", padding: "15px" }}
                >
                  <Stack direction={"row"} gap={2} justifyContent="center">
                    <img
                      src={Edit}
                      width="24px"
                      height="24px"
                      onClick={() => handleEdit(trip)}
                      style={{ cursor: "pointer" }}
                      alt="Edit"
                    />
                    <img
                      src={Delete}
                      width="24px"
                      height="24px"
                      onClick={() => handleDeleteOpen(trip)}
                      style={{ cursor: "pointer" }}
                      alt="Delete"
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10, 25]}
        component="div"
        count={trips?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Edit Modal */}
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" component="h2">
            Edit trip
          </Typography>
          {selectedtrip && (
            <>
              <TextField
                fullWidth
                label="tripType"
                margin="normal"
                value={editStartLocation}
                onChange={(e) => setEditStartLocation(e.target.value)}
              />
              <TextField
                fullWidth
                label="tripModel"
                margin="normal"
                value={editEndLocation}
                onChange={(e) => setEditEndLocation(e.target.value)}
              />

              <TextField
                fullWidth
                label="Status"
                margin="normal"
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                select
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="delayed">Delayed</MenuItem>
              </TextField>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to delete {selectedtrip?.tripType}?
          </Typography>
          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <Button variant="outlined" onClick={handleCloseDeleteModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteConfirm}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>

      <CustomAlert
        open={alert.open}
        onClose={handleAlertClose}
        severity={alert.severity}
        message={alert.message}
      />
    </TableContainer>
  );
}
