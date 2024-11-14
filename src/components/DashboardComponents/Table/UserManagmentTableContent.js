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
  Stack,
  Typography,
  Modal,
  Button,
  TextField
} from "@mui/material";
import ArrowDown from "../../../assets/Table/arrow-down.png";
import Edit from "../../../assets/Table/Edit.png";
import Delete from "../../../assets/Table/Delete.png";
import {
  useGetUserManagementDashboardQuery,
  useDeleteCustomerMutation,
  useDeleteAdminMutation,
  useDeleteDriverMutation,
  useUpdateDriverMutation,
  useGetUserManagementSearchDashboardQuery
} from "../../../Api/apiSlice";

import { Select, MenuItem } from "@mui/material";

import CustomAlert from "../../UI/CustomAlert";
import { useState } from "react";

import { useAuth } from "../../../Authentication/AuthContext";

import { TablePagination } from "@mui/material";

// deleteCustomer
// deleteAdmin
// updateDriver

export default function TableContent({
  setSearch,
  search,
  serRole,
  role,
  status,
  setStatus
}) {
  const { isAuthenticated, userRole, user_ID, userName, login, logout } =
    useAuth();

  console.log("here is the user data right nowssssss {}++++=== ", userName);

  // const search = ""
  //  const status = ""
  //  const role = "superAdmin"
  // const { data, error, isLoading } = useGetUserManagementDashboardQuery();
  const { data, error, isLoading } = useGetUserManagementSearchDashboardQuery({
    search,
    status,
    role
  });
  const [deleteCustomer] = useDeleteCustomerMutation();
  const [deleteAdmin] = useDeleteAdminMutation();
  const [deleteDriver] = useDeleteDriverMutation();
  const [updateDriver] = useUpdateDriverMutation();

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  console.log("new data of search users in dashboard table {} ", data);

  // const { searchdata } = useGetUserManagementSearchDashboardQuery({ search });

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  // State for edit fields
  const [editName, setEditName] = React.useState("");
  const [editEmail, setEditEmail] = React.useState("");
  const [editPhone, setEditPhone] = React.useState("");
  const [editStatus, setEditStatus] = React.useState("");

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { users } = data || {};

  console.log("here is the user data in search dashboard [][][][", users);

  // Load user details into edit form
  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditPhone(user.phone);
    setEditStatus(user.status);
    setOpenEditModal(true);
  };

  // Handler to open the delete modal and set the selected user
  const handleDeleteOpen = (user) => {
    setSelectedUser(user);
    setOpenDeleteModal(true);
  };

  // Handler to close the edit modal
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedUser(null);
  };

  // Handler to close the delete modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedUser(null);
  };

  const handleSuperAdminAction = () => {
    setAlert({
      open: true,
      severity: "warning",
      message: "Cant Do Actions On Super Admin"
    });
  };

  const handleAdminAction = () => {
    setAlert({
      open: true,
      severity: "warning",
      message: "Cant Do Actions On Yourself as Admin"
    });
  };

  // Handler to delete a user
  const handleDeleteConfirm = async () => {
    try {
      if (selectedUser.role === "customer") {
        await deleteCustomer(selectedUser.id);
      } else if (selectedUser.role === "admin") {
        await deleteAdmin(selectedUser.id);
      } else if (selectedUser.role === "driver") {
        await deleteDriver(selectedUser.id);
      }
      console.log("User deleted successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "User Deleted successfully!"
      });
    } catch (error) {
      setAlert({
        open: true,
        severity: "error",
        message: "User Not Deleted!"
      });

      console.error("Error deleting user:", error);
    } finally {
      handleCloseDeleteModal();
    }
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    try {
      const driverData = {
        userId: selectedUser.id,
        userName: editName,
        userEmail: editEmail,
        userPhone: editPhone,
        status: editStatus
      };

      console.log(" updated data sent is ", driverData);
      if (selectedUser.role === "driver") {
        await updateDriver(driverData);
      }
      if (selectedUser.role === "customer") {
        await updateDriver(driverData);
      }
      if (selectedUser.role === "admin") {
        await updateDriver(driverData);
      }
      // Extend this block to handle other user roles if required
      console.log("User updated successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "User updated successfully!"
      });
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating user:", error);
      setAlert({
        open: true,
        severity: "success",
        message: "Error updating user:"
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

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 0,
        elevation: 0,
        borderTop: "1px solid #EAECF0",
        height: "54vh",
        width: "99%",
        overflow: "none"
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#FCFCFD" }}>
          <TableRow>
            {/* <TableCell align="start">User ID</TableCell> */}
            <TableCell align="start">Name</TableCell>
            <TableCell align="start">Email</TableCell>
            <TableCell align="start">Phone Number</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Last Login</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <TableRow key={user.id}>
                {/* <TableCell align="start">{user.id}</TableCell> */}
                <TableCell align="start">{user.name}</TableCell>
                <TableCell align="start">{user.email}</TableCell>
                <TableCell align="start">{user.phone}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
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
                        user.status == "active" ? "#ECFDF3" : "#F2F4F7",
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
                          user.status == "active" ? "#28A745" : "#6C757D"
                        }}
                      />
                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        sx={{
                          color:
                          user.status == "active" ? "#037847" : "#364254"
                        }}
                        fontFamily={"Inter"}
                      >
                        {user.status}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell align="center">dummy</TableCell>
                {/* <TableCell align="center">
                <Stack direction={"row"} gap={2} justifyContent="center">
                  <img
                    src={Edit}
                    width="24px"
                    height="24px"
                    onClick={() => handleEdit(user)}
                    style={{ cursor: "pointer" }}
                    alt="Edit"
                  />
                  <img
                    src={Delete}
                    width="24px"
                    height="24px"
                    onClick={() => handleDeleteOpen(user)}
                    style={{ cursor: "pointer" }}
                    alt="Delete"
                  />
                </Stack>
              </TableCell> */}
                <TableCell align="center">
                  {user.role === "superAdmin" ? (
                    <Box
                      sx={{
                        padding: "4px 8px",
                        backgroundColor: "#E3F2FD",
                        color: "#0D47A1",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "14px"
                      }}
                      onClick={handleSuperAdminAction}
                      style={{ cursor: "pointer" }}
                    >
                      Super Admin
                    </Box>
                  ) : user.name === userName ? (
                    <Box
                      sx={{
                        padding: "4px 8px",
                        backgroundColor: "#E3F2FD",
                        color: "#0D47A1",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "14px"
                      }}
                      onClick={handleAdminAction}
                      style={{ cursor: "pointer" }}
                    >
                      You
                    </Box>
                  ) : (
                    <Stack direction={"row"} gap={2} justifyContent="center">
                      <img
                        src={Edit}
                        width="24px"
                        height="24px"
                        onClick={() => handleEdit(user)}
                        style={{ cursor: "pointer" }}
                        alt="Edit"
                      />
                      <img
                        src={Delete}
                        width="24px"
                        height="24px"
                        onClick={() => handleDeleteOpen(user)}
                        style={{ cursor: "pointer" }}
                        alt="Delete"
                      />
                    </Stack>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10, 25]}
        component="div"
        count={users?.length || 0}
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
            Edit User
          </Typography>
          {selectedUser && (
            <>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
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
            p: 4
          }}
        >
          <Typography variant="h6" component="h2">
            Confirm Delete
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to delete {selectedUser?.name}?
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
