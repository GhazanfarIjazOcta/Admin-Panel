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
  Typography,
} from "@mui/material";
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";

import {
  useGetDriverManagementSearchDashboardQuery,
  useDeleteDriverMutation,
  useUpdateDriverMutation,
} from "../../../Api/apiSlice";
import { useState } from "react";

import CustomAlert from "../../UI/CustomAlert";
import { TablePagination } from "@mui/material";
import Loader from "../../UI/Loader";

function createData(
  DriverID,
  Name,
  Email,
  Phone_number,
  Vehicle_Assigned,
  Total_drivers_Completed,
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
    Total_drivers_Completed,
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

export default function DriverManagmentTableContent({
  setSearch,
  search,
  status,
  setStatus,
}) {
  // useGetDriverManagementSearchDashboardQuery

  // const { data, error, isLoading } = useGetdriverManagementDashboardQuery();
  const { data, error, isLoading } = useGetDriverManagementSearchDashboardQuery(
    { search, status },
  );
  const [deletedriver] = useDeleteDriverMutation();
  const [updatedriver] = useUpdateDriverMutation();

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

  console.log("data in tabel of driver newenwkej", data);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selecteddriver, setSelecteddriver] = useState(null);

  // State for edit fields
  const [editdriverName, setEditdriverName] = useState("");
  const [editdriverEmail, setEditdriverEmail] = useState("");
  const [editdriverPhone, setEditdriverPhone] = useState("");
  const [editStatus, setEditStatus] = useState("");

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) return <p>Error loading data</p>;

  const { drivers } = data || {};
  console.log("here is the driver dataLSADLSALD ", data);

  // Load user details into edit form
  const handleEdit = (driver) => {
    setSelecteddriver(driver);
    setEditdriverName(driver.name);
    setEditdriverEmail(driver.email);
    setEditdriverPhone(driver.phone);
    setEditStatus(driver.status);
    setOpenEditModal(true);
  };

  ////////////////////////////////////////////////////////////////

  //////////////////////////////////////

  // Handler to open the delete modal and set the selected user
  const handleDeleteOpen = (driver) => {
    setSelecteddriver(driver);
    setOpenDeleteModal(true);
  };

  // Handler to close the edit modal
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelecteddriver(null);
  };

  // Handler to close the delete modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelecteddriver(null);
  };

  // Handler to delete a user
  const handleDeleteConfirm = async () => {
    try {
      await deletedriver(selecteddriver.id);
      console.log("User deleted successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "Driver Data Deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Driiver Data not Deleted!",
      });
    } finally {
      handleCloseDeleteModal();
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      const driverData = {
        userId: selecteddriver.id,
        userName: editdriverName,
        status: editStatus,
        userEmail: editdriverEmail,
        userPhone: editdriverPhone,
      };

      console.log(" updated data sent is driver data :::: ", driverData);
      await updatedriver(driverData);
      if (selecteddriver.role === "driver") {
        // await updateDriver(driverData);
      }
      // Extend this block to handle other user roles if required
      console.log("Driver updated successfully!!");
      setAlert({
        open: true,
        severity: "success",
        message: "Driver updated successfully!!",
      });
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating user:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Error updating user:!",
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
                  Driver ID
                </Typography>
                <img src={ArrowDown} height={"16px"} width={"16px"} />
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
                  Total drivers Completed
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
          {/* {drivers?.map((driver) => ( */}
          {drivers
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((driver) => (
              <TableRow key={driver.id}>
                {/* <TableCell align="start">{driver.id}</TableCell> */}
                <TableCell align="start">{driver.name}</TableCell>
                <TableCell align="start">{driver.email}</TableCell>
                <TableCell align="start">{driver.phone}</TableCell>
                <TableCell align="center">{driver.role}</TableCell>
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
                          driver.status == "active" ? "#ECFDF3" : "#F2F4F7",
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
                            driver.status == "active" ? "#28A745" : "#6C757D",
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        sx={{
                          color:
                            driver.status == "active" ? "#037847" : "#364254",
                        }}
                        fontFamily={"Inter"}
                      >
                        {driver.status}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell align="center">dummy</TableCell>

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
                      onClick={() => handleEdit(driver)}
                      style={{ cursor: "pointer" }}
                      alt="Edit"
                    />
                    <img
                      src={Delete}
                      width="24px"
                      height="24px"
                      onClick={() => handleDeleteOpen(driver)}
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
        count={drivers?.length || 0}
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
            Edit driver
          </Typography>
          {selecteddriver && (
            <>
              <TextField
                fullWidth
                label="Driver Name"
                margin="normal"
                value={editdriverName}
                onChange={(e) => setEditdriverName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Driver Email"
                margin="normal"
                value={editdriverEmail}
                onChange={(e) => setEditdriverEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Driver Phone"
                margin="normal"
                value={editdriverPhone}
                onChange={(e) => setEditdriverPhone(e.target.value)}
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
            Are you sure you want to delete {selecteddriver?.driverName}?
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
