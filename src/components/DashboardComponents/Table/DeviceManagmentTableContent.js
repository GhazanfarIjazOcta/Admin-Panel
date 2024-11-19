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
  useGetDeviceManagementSearchDashboardQuery,
  useDeleteDeviceMutation,
  useUpdateDeviceMutation,
} from "../../../Api/apiSlice";
import { useState } from "react";

import CustomAlert from "../../UI/CustomAlert";
import { TablePagination } from "@mui/material";
import Loader from "../../UI/Loader";

export default function DeviceManagmentTableContent({
  setSearch,
  search,
  status,
  setStatus,
}) {
  // const { data, error, isLoading } = useGetDeviceManagementDashboardQuery();
  const { data, error, isLoading } = useGetDeviceManagementSearchDashboardQuery(
    { search, status },
  );
  const [deleteDevice] = useDeleteDeviceMutation();
  const [updateDevice] = useUpdateDeviceMutation();

  console.log("data in tabel of device newenwkej", data);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selecteddevice, setSelecteddevice] = useState(null);

  // State for edit fields
  const [editdeviceType, setEditdeviceType] = useState("");
  const [editdeviceModel, setEditdeviceModel] = useState("");

  const [editStatus, setEditStatus] = useState("");

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  // for alerts (notifications)
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  //////////////////////////////////

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) return <p>Error loading data</p>;

  const { devices } = data || {};
  console.log("here is the device dataLSADLSALD ", data);

  // Load user details into edit form
  const handleEdit = (device) => {
    setSelecteddevice(device);
    setEditdeviceType(device.deviceType);
    setEditdeviceModel(device.deviceModel);

    setEditStatus(device.status);
    setOpenEditModal(true);
  };

  ////////////////////////////////////////////////////////////////

  //////////////////////////////////////

  // Handler to open the delete modal and set the selected user
  const handleDeleteOpen = (device) => {
    setSelecteddevice(device);
    setOpenDeleteModal(true);
  };

  // Handler to close the edit modal
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelecteddevice(null);
  };

  // Handler to close the delete modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelecteddevice(null);
  };

  // Handler to delete a user
  const handleDeleteConfirm = async () => {
    try {
      await deleteDevice(selecteddevice.id);
      console.log("Device deleted successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Device Data Deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting device:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Device Data not Deleted!",
      });
    } finally {
      handleCloseDeleteModal();
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      const deviceData = {
        deviceId: selecteddevice.id,
        deviceType: editdeviceType,
        status: editStatus,
        deviceModel: editdeviceModel,
      };

      console.log(" updated data sent is device data :::: ", deviceData);
      await updateDevice(deviceData);
      if (selecteddevice.role === "driver") {
        // await updateDriver(driverData);
      }
      // Extend this block to handle other user roles if required
      console.log("Device updated successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Device updated successfully",
      });
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating Device:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Error updating Device:",
      });
    }
  };

  /////////////////////////////////////////

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
                  Device ID
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
                  Device Name/Model
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
                  Passcode
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
                  Device Type
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
                  Assigned device
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
                  Signal Strength
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
                  Location
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
                  Last Active
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
          {/* {devices?.map((device) => ( */}
          {devices
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((device) => (
              <TableRow key={device.id}>
                {/* <TableCell align="start">{device.id}</TableCell> */}
                <TableCell align="start">{device.deviceModel}</TableCell>
                <TableCell align="start">{device.email}</TableCell>
                <TableCell align="start">{device.deviceType}</TableCell>
                <TableCell align="center">{device.role}</TableCell>
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
                          device.status == "active" ? "#ECFDF3" : "#F2F4F7",
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
                            device.status == "active" ? "#28A745" : "#6C757D",
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        sx={{
                          color:
                            device.status == "active" ? "#037847" : "#364254",
                        }}
                        fontFamily={"Inter"}
                      >
                        {device.status}
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
                      onClick={() => handleEdit(device)}
                      style={{ cursor: "pointer" }}
                      alt="Edit"
                    />
                    <img
                      src={Delete}
                      width="24px"
                      height="24px"
                      onClick={() => handleDeleteOpen(device)}
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
        count={devices?.length || 0}
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
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Edit device
          </Typography>
          {selecteddevice && (
            <>
              <TextField
                fullWidth
                label="deviceType"
                margin="normal"
                value={editdeviceType}
                onChange={(e) => setEditdeviceType(e.target.value)}
              />
              <TextField
                fullWidth
                label="deviceModel"
                margin="normal"
                value={editdeviceModel}
                onChange={(e) => setEditdeviceModel(e.target.value)}
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
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to delete {selecteddevice?.deviceType}?
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
