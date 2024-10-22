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
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addDeviceStyles } from "../../UI/styles/Main";

function AddDevices() {
  return (
    <Paper sx={addDeviceStyles.mainContainer}>
      <Box sx={addDeviceStyles.container} pl={8} mt={12}>
        <Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={addDeviceStyles.label}
            >
              Device Id
            </Typography>
            <TextField sx={addDeviceStyles.textField} label="Enter Device ID" />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addDeviceStyles.label}
            >
              Device Name/Model
            </Typography>
            <TextField
              sx={addDeviceStyles.textField}
              label="Device Name/Model"
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addDeviceStyles.label}
            >
              Passcode
            </Typography>
            <TextField sx={addDeviceStyles.textField} label="Passcode" />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addDeviceStyles.label}
            >
              Assigned Vehicle
            </Typography>
            <TextField
              sx={addDeviceStyles.textField}
              label="Assigned Vehicle"
            />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addDeviceStyles.label}
            >
              Location
            </Typography>
            <TextField sx={addDeviceStyles.textField} label="Location" />
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addDeviceStyles.label}
            >
              Status
            </Typography>
            <TextField
              placeholder="Status"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 0 }}>
                    <IconButton sx={{ padding: 0 }}>
                      {<img src={Arrowdown} height={"16px"} width={"20px"} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px", // Adjust the height as needed
                  marginLeft: "5px",
                },
                width: {lg:"35%", xs:"100%"}
              }}
            />
          </Box>
        </Box>
        <Stack
          sx={{
            gap: "24px",
          }}
          mt={6}
          ml={1}
        >
          <Button variant="contained" sx={addDeviceStyles.button}>
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddDevices;
