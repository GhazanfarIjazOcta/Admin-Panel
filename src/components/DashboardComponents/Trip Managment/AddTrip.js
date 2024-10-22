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
import { addTripStyles } from "../../UI/styles/Main";
import Navbar2 from "../../LayoutComponents/Navbar/Navbar2";

function AddTrip() {
  return (
    <Paper sx={addTripStyles.mainContainer}>
      <Navbar2 />
      <Box sx={addTripStyles.container} pl={8}>
        <Box>
          {/* Trip ID Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={addTripStyles.label}
            >
              Trip Id
            </Typography>
            <TextField sx={addTripStyles.textField} label="Enter Trip ID" />
          </Box>

          {/* Vehicle Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addTripStyles.label}
            >
              Vehicle
            </Typography>
            <TextField sx={addTripStyles.textField} label="Enter Vehicle" />
          </Box>

          {/* Driver's Name Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addTripStyles.label}
            >
              Driver's Name
            </Typography>
            <TextField
              sx={addTripStyles.textField}
              label="Enter Driver's Name"
            />
          </Box>

          {/* Start Location Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addTripStyles.label}
            >
              Start Location
            </Typography>
            <TextField
              placeholder="Select Starting Location"
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
                width: { xs: "100%", sm: "35%" }, // Increased width on mobile
              }}
            />
          </Box>

          {/* End Location Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addTripStyles.label}
            >
              End Location
            </Typography>
            <TextField
              placeholder="Select Ending Location"
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
                width: { xs: "100%", sm: "35%" }, // Increased width on mobile
              }}
            />
          </Box>

          {/* Status Field */}
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={addTripStyles.label}
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
                width: { xs: "100%", sm: "35%" }, // Increased width on mobile
              }}
            />
          </Box>
        </Box>

        {/* Add Button */}
        <Stack
          sx={{
            gap: "24px",
          }}
          mt={6}
          ml={1}
        >
          <Button variant="contained" sx={addTripStyles.button}>
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddTrip;
