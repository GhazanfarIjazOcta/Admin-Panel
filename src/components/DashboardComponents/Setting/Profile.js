import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import { settingStyles } from "../../UI/styles/Main";
import {
  useUpdateUserInfoMutation,
  useGetUserInfoQuery,
} from "../../../Api/apiSlice";

import CustomAlert from "../../UI/CustomAlert";

function Profile() {
  const { data, error, isLoading } = useGetUserInfoQuery();
  const [updateUserInfo] = useUpdateUserInfoMutation();

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

  // State for edit fields
  const [editUserName, setEditUserName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");
  const [editUserPhone, setEditUserPhone] = useState("");

  useEffect(() => {
    if (data) {
      setEditUserName(data.userInfo?.name || "");
      setEditUserEmail(data.userInfo?.email || "");
      setEditUserPhone(data.userInfo?.phone || "");
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const handleSaveChanges = async () => {
    try {
      const UserData = {
        userId: data.userInfo?.id,
        userName: editUserName,
        userEmail: editUserEmail,
        userPhone: editUserPhone,
      };
      await updateUserInfo(UserData);
      console.log("User updated successfully");
      setAlert({
        open: true,
        severity: "success",
        message: "User updated successfully",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      setAlert({
        open: true,
        severity: "error",
        message: "Error updating user!",
      });
    }
  };

  return (
    <Paper sx={settingStyles.profilePaper}>
      <Box
        sx={{
          ...settingStyles.profileContainer,
          paddingLeft: { xs: "0px", lg: "40px" },
        }}
      >
        <Box sx={{ paddingLeft: { xs: "40px", lg: "40px" } }}>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Full Name
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label={`${data.userInfo?.name || ""}`}
              value={editUserName}
              onChange={(e) => setEditUserName(e.target.value)}
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              E-mail
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label={`${data.userInfo?.email || ""}`}
              value={editUserEmail}
              onChange={(e) => setEditUserEmail(e.target.value)}
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Phone Number
            </Typography>
            <TextField
              sx={settingStyles.profileTextField}
              label={`${data.userInfo?.phone || ""}`}
              value={editUserPhone}
              onChange={(e) => setEditUserPhone(e.target.value)}
            />
          </Box>
          {/* Additional UI elements */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Profile Picture
            </Typography>
            <TextField
              placeholder={`Click to add a picture`}
              variant="outlined"
              // No size prop here
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 0 }}>
                    <IconButton sx={{ padding: 0 }}>
                      <Box sx={settingStyles.addPhoto}>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: 500,
                            color: "#F38712",
                            fontSize: "14px",
                          }}
                        >
                          Add Photo
                        </Typography>
                      </Box>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: {
                    xs: "56px", // Adjust height for mobile
                    sm: "76px", // Adjust height for larger screens
                  },
                },
                width: {
                  xs: "100%", // Full width on mobile
                  sm: "35%", // 35% width on larger screens
                },
                marginLeft: "5px",
              }}
            />
          </Box>
        </Box>

        <Stack
          sx={settingStyles.profileButtonContainer}
          mr={5}
          mt={{ lg: 0, xs: 2 }}
        >
          <Button variant="outlined" sx={settingStyles.resetButtomn}>
            Reset Changes
          </Button>
          <Button
            variant="contained"
            sx={settingStyles.updateButton}
            onClick={handleSaveChanges}
          >
            Update
          </Button>
          <CustomAlert
            open={alert.open}
            onClose={handleAlertClose}
            severity={alert.severity}
            message={alert.message}
          />
        </Stack>
      </Box>
    </Paper>
  );
}

export default Profile;
