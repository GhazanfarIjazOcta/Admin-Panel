import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";

import {
  useGetVehicleManagementSearchDashboardQuery,
  useDeleteVehicleMutation,
  useUpdateVehicleMutation,
} from "../../../Api/apiSlice";
import { useState } from "react";

import CustomAlert from "../../UI/CustomAlert";

import { TablePagination } from "@mui/material";
import Loader from "../../UI/Loader";

export default function VehicleManagmentTableContent({
  setSearch,
  search,
  status,
  setStatus,
}) {
  const { data, error, isLoading } =
    useGetVehicleManagementSearchDashboardQuery({ search, status });
  // const { data, error, isLoading } = useGetVehicleManagementDashboardQuery();
  const [deleteVehicle] = useDeleteVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();

  //////////////////////////////////

  // const { searchdata } = useGetUserManagementSearchDashboardQuery({ search });

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // State for edit fields
  const [editVehicleType, setEditVehicleType] = useState("");
  const [editVehicleModel, setEditVehicleModel] = useState("");

  const [editStatus, setEditStatus] = useState("");

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) return <p>Error loading data</p>;

  const { vehicles } = data || {};
  console.log("here is the ~~~~~~~~~~~vehiclwe data ", vehicles);

  // Load user details into edit form
  const handleEdit = (vehicle) => {
    setSelectedVehicle(vehicle);
    setEditVehicleType(vehicle.vehicleType);
    setEditVehicleModel(vehicle.vehicleModel);

    setEditStatus(vehicle.status);
    setOpenEditModal(true);
  };

  ////////////////////////////////////////////////////////////////

  //////////////////////////////////////

  // Handler to open the delete modal and set the selected user
  const handleDeleteOpen = (user) => {
    setSelectedVehicle(user);
    setOpenDeleteModal(true);
  };

  // Handler to close the edit modal
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedVehicle(null);
  };

  // Handler to close the delete modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedVehicle(null);
  };

  // Handler to delete a user
  const handleDeleteConfirm = async () => {
    try {
      await deleteVehicle(selectedVehicle.id);
      console.log("User deleted successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Vehicle Deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Vehicle not Deleted!",
      });
    } finally {
      handleCloseDeleteModal();
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      const vehicleData = {
        vehicleId: selectedVehicle.id,
        vehicleType: editVehicleType,
        vehicleModel: editVehicleModel,

        status: editStatus,
      };

      console.log(" updated data sent is vehicle data :::: ", vehicleData);
      await updateVehicle(vehicleData);
      if (selectedVehicle.role === "driver") {
        // await updateDriver(driverData);
      }
      // Extend this block to handle other user roles if required
      console.log("Vehicle updated successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Vehicle Updated successfully!",
      });
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating vehicle:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Error updating vehicle:",
      });
    }
  };

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
        width: "99%",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
          <TableRow>
            <TableCell align="left">
              <Stack
                direction={"row"}
                gap={1}
                sx={{ width: "100%", justifyContent: "left" }}
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
          {vehicles
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((vehicle) => (
              // {vehicles?.map((vehicle) => (
              <TableRow key={vehicle.id}>
                {/* <TableCell align="start">{vehicle.id}</TableCell> */}
                <TableCell align="start">{vehicle.vehicleModel}</TableCell>
                <TableCell align="start">{vehicle.vehicleType}</TableCell>
                <TableCell align="start">{vehicle.assignedToUserId}</TableCell>
                <TableCell align="start">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
                <TableCell align="center">dummy</TableCell>
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
                          vehicle.status == "active" ? "#ECFDF3" : "#F2F4F7",
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
                            vehicle.status == "active" ? "#28A745" : "#6C757D",
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        sx={{
                          color:
                            vehicle.status == "active" ? "#037847" : "#364254",
                        }}
                        fontFamily={"Inter"}
                      >
                        {vehicle.status}
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
                      onClick={() => handleEdit(vehicle)}
                      style={{ cursor: "pointer" }}
                      alt="Edit"
                    />
                    <img
                      src={Delete}
                      width="24px"
                      height="24px"
                      onClick={() => handleDeleteOpen(vehicle)}
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
        count={vehicles?.length || 0}
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
            width: { xs: "90%", sm: 400 }, // 90% width on extra-small screens, 400px otherwise
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
          }}
        >
          <Typography variant="h6" component="h2">
            Edit vehicle
          </Typography>
          {selectedVehicle && (
            <>
              <TextField
                fullWidth
                label="VehicleType"
                margin="normal"
                value={editVehicleType}
                onChange={(e) => setEditVehicleType(e.target.value)}
              />
              <TextField
                fullWidth
                label="VehicleModel"
                margin="normal"
                value={editVehicleModel}
                onChange={(e) => setEditVehicleModel(e.target.value)}
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
                <MenuItem value="inactive">Inactive</MenuItem>
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
            width: { xs: "90%", sm: 400 }, // 90% width on extra-small screens, 400px otherwise
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
          }}
        >
          <Typography variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to delete {selectedVehicle?.VehicleType}?
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
