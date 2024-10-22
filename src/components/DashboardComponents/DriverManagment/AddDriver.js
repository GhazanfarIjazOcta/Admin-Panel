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
import { addDriverStyles } from "../../UI/styles/Main";

function AddDriver() {
  const fields = [
    { label: "Driver Id", placeholder: "Enter Driver ID" },
    { label: "Name", placeholder: "Enter Name" },
    { label: "Email", placeholder: "Enter Email" },
    { label: "Phone number", placeholder: "Enter Phone number" },
    { label: "Vehicle Assigned", placeholder: "Name of the Vehicle Assigned" },
    {
      label: "Status",
      placeholder: "Select Status",
      isSelect: true,
    },
  ];

  return (
    <Paper sx={addDriverStyles.mainContainer}>
      <Box sx={addDriverStyles.container} pl={8} mt={12}>
        <Box>
          {fields.map((field, index) => (
            <Box key={index} sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={4}
                mb={1}
                style={addDriverStyles.label}
              >
                {field.label}
              </Typography>
              {field.isSelect ? (
                <TextField
                  placeholder={field.placeholder}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <img src={Arrowdown} height={"16px"} width={"20px"} alt="Dropdown Arrow" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "50px", // Adjust the height as needed
                      marginLeft: "5px",
                    },
                    width: {lg:"35%", xs:"90%"}
                  }}
                />
              ) : (
                <TextField sx={addDriverStyles.textField} label={field.placeholder} />
              )}
            </Box>
          ))}
        </Box>
        <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
          <Button variant="contained" sx={addDriverStyles.button}>
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddDriver;
