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
import uploadCloud from "../../../assets/VehicleManagment/upload-cloud.png";
import { addVehicleStyles } from "../../UI/styles/Main";
function AddVehicle() {
  return (
    <Paper sx={addVehicleStyles.mainContainer} >
      <Box sx={addVehicleStyles.container} pl={1} mt={12}>
        <Stack direction={"row"} width={"100%"}>
          <Box width={"40%"}>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={4}
                mb={1}
                style={addVehicleStyles.label}
              >
                Type
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter Type"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                MFG.
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter MFG."
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Model
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter Model"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Vin/Ser#
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter Vin/Ser#"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Select Hour Meter
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter Vin/Ser#"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Engine
              </Typography>
              <TextField
                sx={addVehicleStyles.leftTextField}
                label="Enter Engine"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Status
              </Typography>
              <TextField
                placeholder="Select Status"
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
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box width={"60%"}>
            {" "}
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={4}
                mb={1}
                style={addVehicleStyles.label}
              >
                Last PM
              </Typography>
              <TextField
                sx={addVehicleStyles.rightTextField}
                label="Enter Last PM"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Next PM
              </Typography>
              <TextField
                sx={addVehicleStyles.rightTextField}
                label="Enter Next PM"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                PM Reference
              </Typography>
              <TextField
                placeholder="Enter PM Reference"
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
                  width: "70%",
                }}
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Last Location
              </Typography>
              <TextField
                placeholder="Enter Status"
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
                  width: "70%",
                }}
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={3}
                mb={1}
                style={addVehicleStyles.label}
              >
                Upload Images(s)
              </Typography>
              <Box sx={addVehicleStyles.uploadImage}>
                <img src={uploadCloud} height={"33px"} width={"32px"} />
                <Typography sx={addVehicleStyles.primaryText}>
                  Drag & Drop
                </Typography>
                <Typography style={addVehicleStyles.secondaryText}>
                  or select file from device
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            gap: "24px",
          }}
          mt={6}
          ml={1}
        >
          <Button variant="contained" sx={addVehicleStyles.button}>
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddVehicle;
