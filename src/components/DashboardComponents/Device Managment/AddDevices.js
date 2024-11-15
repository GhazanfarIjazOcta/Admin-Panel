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
} from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addDeviceStyles } from "../../UI/styles/Main";
import { useAddDeviceMutation } from "../../../Api/apiSlice";

import CustomAlert from '../../UI/CustomAlert';
import { useState } from "react";

// Define Yup validation schema
const validationSchema = Yup.object({
  deviceType: Yup.string().required("Device ID is required"),
  deviceModel: Yup.string().required("Device Model is required"),
  passcode: Yup.string().required("Passcode is required"),
  assignedVehicle: Yup.string().required("Assigned Vehicle is required"),
  location: Yup.string().required("Location is required"),
  status: Yup.string().required("Status is required"),
});

function AddDevices() {
  const [addDevice] = useAddDeviceMutation();

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  

  const handleRegister = async (values, { resetForm }) => {
    try {
      await addDevice(values).unwrap();
      resetForm(); // Reset form fields after successful submission
     
      setAlert({
        open: true,
        severity: "success",
        message: "Device Added successfully",
      });
    } catch (err) {
      console.error("Add Device failed", err);
      setAlert({
        open: true,
        severity: "error",
        message: "Device is not Added",
      });
    }
  };

  return (
    <Paper sx={addDeviceStyles.mainContainer} >
      <Box sx={addDeviceStyles.container} ml={2} pl={3} mt={0} mb={2}>
        <Formik
          initialValues={{
            deviceType: "",
            deviceModel: "",
            passcode: "",
            assignedVehicle: "",
            location: "",
            status: "active",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ errors, touched }) => (
            <Form>
              <Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={4} mb={1} style={addDeviceStyles.label}>
                    Device type
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="deviceType"
                    label="Enter Device Type"
                    error={touched.deviceType && Boolean(errors.deviceType)}
                    helperText={touched.deviceType && errors.deviceType}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
                    Device Name/Model
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="deviceModel"
                    label="Device Name/Model"
                    error={touched.deviceModel && Boolean(errors.deviceModel)}
                    helperText={touched.deviceModel && errors.deviceModel}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
                    Passcode
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="passcode"
                    label="Passcode"
                    error={touched.passcode && Boolean(errors.passcode)}
                    helperText={touched.passcode && errors.passcode}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
                    Assigned Vehicle
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="assignedVehicle"
                    label="Assigned Vehicle"
                    error={touched.assignedVehicle && Boolean(errors.assignedVehicle)}
                    helperText={touched.assignedVehicle && errors.assignedVehicle}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
                    Location
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="location"
                    label="Location"
                    error={touched.location && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                  />
                </Box>

                {/* <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
                    Status
                  </Typography>
                  <Field
                    as={TextField}
                    name="status"
                    placeholder="Status"
                    variant="outlined"
                    size="small"
                    error={touched.status && Boolean(errors.status)}
                    helperText={touched.status && errors.status}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: 0 }}>
                          <IconButton sx={{ padding: 0 }}>
                            <img src={Arrowdown} height={"16px"} width={"20px"} alt="dropdown" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "50px", // Adjust the height as needed
                        marginLeft: "5px",
                      },
                      width: { lg: "35%", xs: "100%" },
                    }}
                  />
                </Box> */}

<Box sx={loginLeftContentContainerItemWidth}>
  <Typography variant="subtitle1" mt={3} mb={1} style={addDeviceStyles.label}>
    Status
  </Typography>
  <Field
    as={TextField}
    select // Add this to make it a dropdown
    name="status"
    placeholder="Status"
    variant="outlined"
    size="small"
    error={touched.status && Boolean(errors.status)}
    helperText={touched.status && errors.status}
    sx={{
      "& .MuiInputBase-root": {
        height: "50px",
        marginLeft: "5px",
      },
      width: {
        xs: "90%",  // Wider on extra-small screens
        sm: "90%",  // Revert to 70% on small screens and up
        lg: "37%"

      },
    }}
  >
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="inactive">Inactive</MenuItem>
  </Field>
</Box>




              </Box>
              <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
                <Button variant="contained" sx={addDeviceStyles.button} type="submit">
                  Add
                </Button>

                <CustomAlert open={alert.open} onClose={handleAlertClose} severity={alert.severity} message={alert.message} />
             
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
}

export default AddDevices;
