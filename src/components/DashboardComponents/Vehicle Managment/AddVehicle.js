import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import uploadCloud from "../../../assets/VehicleManagment/upload-cloud.png";
import { addVehicleStyles } from "../../UI/styles/Main";
import { useAddVehicleMutation } from "../../../Api/apiSlice";

import CustomAlert from '../../UI/CustomAlert';
import { useState } from "react";

function AddVehicle() {
  const [addVehicle] = useAddVehicleMutation();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));


  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    vehicleType: Yup.string().required("Vehicle type is required"),
    vehicleModel: Yup.string().required("Vehicle model is required"),
    status: Yup.string().required("Status is required")
    // Define other fields validation as required
  });

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      vehicleType: "",
      vehicleModel: "",
      status: "active" // default status as Active
      // Add other fields with initial empty values as required
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addVehicle(values).unwrap(); // sending status in backend request
        resetForm(); // Clear the form on success
       
        setAlert({
          open: true,
          severity: "success",
          message: "Vehicle added successfully",
        });
      } catch (err) {
        console.error("Add Vehicle failed", err);
        setAlert({
          open: true,
          severity: "error",
          message: "Vehicle added successfully",
        });
      }
    }
  });

  return (
    <Paper sx={addVehicleStyles.mainContainer}>
      <Box sx={addVehicleStyles.container} pl={1} mt={0} mb={2}>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            direction={isMobile ? "column" : "row"}
            width={"100%"}
            spacing={isMobile ? 2 : 0} // Add spacing in mobile view
          >
            <Box width={isMobile ? "100%" : "40%"} mb={isMobile ? 2 : 0}>
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
                  label="Enter Vehicle Type"
                  name="vehicleType"
                  value={formik.values.vehicleType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.vehicleType &&
                    Boolean(formik.errors.vehicleType)
                  }
                  helperText={
                    formik.touched.vehicleType && formik.errors.vehicleType
                  }
                  fullWidth
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
                  select
                  label="Select Status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.status && Boolean(formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                  sx={addVehicleStyles.leftTextField}
                  fullWidth
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </TextField>
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
                  name="vehicleModel"
                  value={formik.values.vehicleModel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.vehicleModel &&
                    Boolean(formik.errors.vehicleModel)
                  }
                  helperText={
                    formik.touched.vehicleModel && formik.errors.vehicleModel
                  }
                  fullWidth
                />
              </Box>
            </Box>
            <Box width={isMobile ? "100%" : "60%"} mb={isMobile ? 2 : 0}>
              <Box sx={loginLeftContentContainerItemWidth}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  style={addVehicleStyles.label}
                >
                  Last Location
                </Typography>
                {/* <TextField
                  placeholder="Enter Status"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <img src={Arrowdown} height={"16px"} width={"20px"} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "50px",
                      marginLeft: "5px",
                    },
                    width: "70%",
                  }}
                  name="lastLocation"
                  value={formik.values.lastLocation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                /> */}
                <TextField
                  placeholder="Enter Status"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ marginRight: 0 }}>
                        <IconButton sx={{ padding: 0 }}>
                          <img src={Arrowdown} height={"16px"} width={"20px"} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "50px",
                      marginLeft: "5px"
                    },
                    width: {
                      xs: "100%", // Wider on extra-small screens
                      sm: "70%" // Revert to 70% on small screens and up
                    }
                  }}
                  name="lastLocation"
                  value={formik.values.lastLocation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                />
              </Box>
            </Box>
          </Stack>
          <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
            <Button
              variant="contained"
              sx={addVehicleStyles.button}
              type="submit"
            >
              Add
            </Button>

            <CustomAlert open={alert.open} onClose={handleAlertClose} severity={alert.severity} message={alert.message} />
             

          </Stack>
        </form>
      </Box>
    </Paper>
  );
}

export default AddVehicle;
