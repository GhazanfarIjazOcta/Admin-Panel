import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";

import { addDeviceStyles } from "../../UI/styles/Main";

import CustomAlert from "../../UI/CustomAlert";
import { useState } from "react";

import { useAddMaintenanceMutation } from "../../../Api/apiSlice";

import {
  useGetVehicleManagementSearchDashboardQuery,
  useGetDeviceManagementSearchDashboardQuery
} from "../../../Api/apiSlice";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Define Yup validation schema
const validationSchema = Yup.object({
  maintenanceType: Yup.string().required("Maintenance Type is required"),
  startDate: Yup.string().required("Start Date is required"),
  endDate: Yup.string().required("End Date is required"),
  maintenanceFor: Yup.string().required("maintenanceFor is required")
  // vehicleId: Yup.string().required("ID is required")
  // Conditionally validate vehicleId or deviceId based on maintenanceFor
  // vehicleId: Yup.string().when('maintenanceFor', {
  //   is: 'vehicle', // If maintenanceFor is "vehicle"
  //   then: Yup.string().required("Vehicle ID is required"), // Vehicle ID is required
  //   otherwise: Yup.string().notRequired(), // Otherwise, it's not required
  // }),

  // deviceId: Yup.string().when('maintenanceFor', {
  //   is: 'device', // If maintenanceFor is "device"
  //   then: Yup.string().required("Device ID is required"), // Device ID is required
  //   otherwise: Yup.string().notRequired(), // Otherwise, it's not required
  // })
});

function AddMaintenence() {
  const search = "";
  const status = "";

  // Call both queries in parallel
  const {
    data: vehicleData,
    isLoading: isVehiclesLoading,
    error: vehicleError
  } = useGetVehicleManagementSearchDashboardQuery({ search, status });

  const {
    data: deviceData,
    isLoading: isDevicesLoading,
    error: deviceError
  } = useGetDeviceManagementSearchDashboardQuery({ search, status });

  // Extract data
  const vehicles = vehicleData?.vehicles || [];
  const devices = deviceData?.devices || [];

  // Use both vehicles and devices
  console.log("Vehicle data for maintenance:", vehicles);
  console.log("Device data for maintenance:", devices);

  const [addMaintenance] = useAddMaintenanceMutation();

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleRegister = async (values, { resetForm }) => {
    try {
      console.log("the values are : ", values);
      await addMaintenance(values).unwrap();
      resetForm(); // Reset form fields after successful submission

      setAlert({
        open: true,
        severity: "success",
        message: "Maintenance Added successfully"
      });
    } catch (err) {
      console.error("Add Device failed", err);
      setAlert({
        open: true,
        severity: "error",
        message: "Maintenance is not Added"
      });
    }
  };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;

  // Handle loading and error states
  if (isVehiclesLoading || isDevicesLoading) {
    console.log("Loading data...");
    return;
  }

  if (vehicleError || deviceError) {
    console.error("Error fetching data:", { vehicleError, deviceError });
    return;
  }

  return (
    <Paper
      sx={{
        ...addDeviceStyles.mainContainer,

        height: "120%"
      }}
    >
      <Box sx={addDeviceStyles.container} ml={2} pl={3} mt={0} mb={2}>
        <Formik
          initialValues={{
            maintenanceType: "",
            startDate: "",
            endDate: "",

            maintenanceFor: "vehicle",
            vehicleId: "",
            deviceId: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
          
        >
          {({ values, errors, touched }) => (
            <Form >
              <Box >
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Maintenance For
                  </Typography>
                  <Field
                    as={TextField}
                    select // Add this to make it a dropdown
                    name="maintenanceFor"
                    placeholder="Maintenance For"
                    variant="outlined"
                    size="small"
                    error={
                      touched.maintenanceFor && Boolean(errors.maintenanceFor)
                    }
                    helperText={touched.maintenanceFor && errors.maintenanceFor}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "50px",
                        marginLeft: "5px"
                      },
                      width: {
                        xs: "90%",
                        sm: "240px",
                        lg: "240px"
                      }
                    }}
                  >
                    <MenuItem value="vehicle">Vehicle</MenuItem>
                    <MenuItem value="device">Device</MenuItem>
                  </Field>
                </Box>

                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Select Your Vehicle/Device Type
                  </Typography>
                  <Field
                    as={TextField}
                    select // Add this to make it a dropdown
                    name={
                      values.maintenanceFor === "vehicle"
                        ? "vehicleId"
                        : "deviceId"
                    } // Dynamic name attribute
                    placeholder="Specific Item"
                    variant="outlined"
                    size="small"
                    error={
                      (values.maintenanceFor === "vehicle" &&
                        touched.vehicleId &&
                        Boolean(errors.vehicleId)) ||
                      (values.maintenanceFor === "device" &&
                        touched.deviceId &&
                        Boolean(errors.deviceId))
                    }
                    helperText={
                      (values.maintenanceFor === "vehicle" &&
                        touched.vehicleId &&
                        errors.vehicleId) ||
                      (values.maintenanceFor === "device" &&
                        touched.deviceId &&
                        errors.deviceId)
                    }
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "50px",
                        marginLeft: "5px"
                      },
                      width: {
                        xs: "90%",
                        sm: "240px",
                        lg: "240px"
                      }
                    }}
                  >
                    {/* Conditionally render MenuItems based on maintenanceFor */}
                    {values.maintenanceFor === "vehicle"
                      ? vehicles?.map((vehicle) => (
                          <MenuItem key={vehicle.id} value={vehicle.id}>
                            {vehicle.vehicleType} - {vehicle.vehicleModel}
                          </MenuItem>
                        ))
                      : devices?.map((device) => (
                          <MenuItem key={device.id} value={device.id}>
                            {device.deviceType} - {device.deviceModel}
                          </MenuItem>
                        ))}
                  </Field>
                </Box>

                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={4}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Maintenance Type
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField2}
                    name="maintenanceType"
                    label="Enter Maintenance Type"
                    error={
                      touched.maintenanceType && Boolean(errors.maintenanceType)
                    }
                    helperText={
                      touched.maintenanceType && errors.maintenanceType
                    }
                  />
                </Box>

                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <Box sx={loginLeftContentContainerItemWidth}>
                    <Typography
                      variant="subtitle1"
                      mt={3}
                      mb={1}
                      style={addDeviceStyles.label}
                    >
                      Start Date
                    </Typography>
                    
                    <Field
                   
                      name="startDate"
                      render={({ field, form }) => (
                        <DatePicker
                          {...field}
                          value={field.value ? new Date(field.value) : null}
                          onChange={(date) =>
                            form.setFieldValue(
                              "startDate",
                              date ? date.toISOString() : ""
                            )
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                             
                              error={
                                touched.startDate && Boolean(errors.startDate)
                              }
                              helperText={touched.startDate && errors.startDate}
                            />
                          )}
                        />
                      )}
                      
                    />
                  </Box>

                  <Box sx={loginLeftContentContainerItemWidth}>
                    <Typography
                      variant="subtitle1"
                      mt={3}
                      mb={1}
                      style={addDeviceStyles.label}
                    >
                      End Date
                    </Typography>
                    <Field
                      name="endDate"
                      render={({ field, form }) => (
                        <DatePicker
                          {...field}
                          value={field.value ? new Date(field.value) : null}
                          onChange={(date) =>
                            form.setFieldValue(
                              "endDate",
                              date ? date.toISOString() : ""
                            )
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              sx={addDeviceStyles.textField}
                              error={touched.endDate && Boolean(errors.endDate)}
                              helperText={touched.endDate && errors.endDate}
                            />
                          )}
                        />
                      )}
                    />
                  </Box>
                </LocalizationProvider>

                {/* <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Start Date
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="startDate"
                    label="Start Date"
                    error={touched.startDate && Boolean(errors.startDate)}
                    helperText={touched.startDate && errors.startDate}
                  />
                </Box>

                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    End Date
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField}
                    name="endDate"
                    label="End Date"
                    error={touched.endDate && Boolean(errors.endDate)}
                    helperText={touched.endDate && errors.endDate}
                  />
                </Box> */}
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

export default AddMaintenence;
