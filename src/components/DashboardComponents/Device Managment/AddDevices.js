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

import CustomAlert from "../../UI/CustomAlert";
import { useState } from "react";

// Define Yup validation schema
const validationSchema = Yup.object({
  deviceType: Yup.string().required("Device type is required"),
  deviceModel: Yup.string().required("Device Model is required"),

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
    console.log("here is the clicked of the device add");
    try {
      await addDevice(values).unwrap();
      resetForm(); // Reset form fields after successful submission

      setAlert({
        open: true,
        severity: "success",
        message: "Device Added successfully",
      });
    } catch (err) {
      // console.error("Add Device failed", err);
      setAlert({
        open: true,
        severity: "error",
        message: "Device is not Added",
      });
    }
  };

  return (
    <Paper
      sx={{
        ...addDeviceStyles.mainContainer,

        height: "86%",
      }}
    >
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
          onSubmit={handleRegister} // Ensure this is present and correctly linked
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              {console.log({ errors, touched })}
              <Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={4}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Device type
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="deviceType"
                    label="Enter Device Type"
                    error={touched.deviceType && Boolean(errors.deviceType)}
                    helperText={touched.deviceType && errors.deviceType}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Device Model
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="deviceModel"
                    label="Device Model"
                    error={touched.deviceModel && Boolean(errors.deviceModel)}
                    helperText={touched.deviceModel && errors.deviceModel}
                    onChange={handleChange}
                  />
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
                  <Field
                    as={TextField}
                    select // Add this to make it a dropdown
                    name="status"
                    placeholder="Status"
                    variant="outlined"
                    size="small"
                    value={values.status}
                    onChange={handleChange}
                    error={touched.status && Boolean(errors.status)}
                    helperText={touched.status && errors.status}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "50px",
                        marginLeft: "5px",
                      },
                      width: {
                        xs: "90%", // Wider on extra-small screens
                        sm: "90%", // Revert to 70% on small screens and up
                        lg: "37%",
                      },
                    }}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Field>
                </Box>
              </Box>
              <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
                <Button
                  variant="contained"
                  sx={addDeviceStyles.button}
                  type="submit"
                >
                  Add
                </Button>

                <CustomAlert
                  open={alert.open}
                  onClose={handleAlertClose}
                  severity={alert.severity}
                  message={alert.message}
                />
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
}

export default AddDevices;
