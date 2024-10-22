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
import React from "react";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addUserStyles } from "../../UI/styles/Main";

function AddUser() {
  return (
    <Paper sx={addUserStyles.mainContainerStyles}>
      <Box sx={addUserStyles.container} pl={{ xs: 2, sm: 8 }}>
        <Box>
          {/* User ID Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              User Id
            </Typography>
            <TextField
              sx={addUserStyles.textFieldStyles}
              label="Enter User ID"
              size="small"
              fullWidth // Full width on mobile
            />
          </Box>
          
          {/* Name Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              Name
            </Typography>
            <TextField
              sx={addUserStyles.textFieldStyles}
              label="Enter Name"
              size="small"
              fullWidth // Full width on mobile
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              Email
            </Typography>
            <TextField
              sx={addUserStyles.textFieldStyles}
              label="Enter Email"
              size="small"
              fullWidth // Full width on mobile
            />
          </Box>

          {/* Phone Number Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              Phone Number
            </Typography>
            <TextField
              sx={addUserStyles.textFieldStyles}
              label="Enter Phone Number"
              size="small"
              fullWidth // Full width on mobile
            />
          </Box>

          {/* Role Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              Role
            </Typography>
            <TextField
              placeholder="Select Role"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ padding: 0 }}>
                      <img src={Arrowdown} height={"16px"} width={"20px"} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px", // Adjust height for smaller devices
                },
                width: "100%", // Full width on mobile
              }}
            />
          </Box>

          {/* Status Field */}
          <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} // Responsive font size
            >
              Status
            </Typography>
            <TextField
              placeholder="Select Status"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ padding: 0 }}>
                      <img src={Arrowdown} height={"16px"} width={"20px"} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px", // Adjust height for smaller devices
                },
                width: "100%", // Full width on mobile
              }}
            />
          </Box>
        </Box>
        
        {/* Add Button */}
        <Stack
          sx={{
            gap: { xs: "16px", sm: "24px" }, // Adjust gap based on screen size
          }}
          mt={6}
          ml={{ xs: 0, sm: 1 }} // Adjust left margin for mobile
        >
          <Button variant="contained" sx={addUserStyles.buttonStyles}>
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddUser;
