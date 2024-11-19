import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import { addDeviceStyles } from "../../UI/styles/Main";
import CustomAlert from "../../UI/CustomAlert";
import { useAddFuelMutation } from "../../../Api/apiSlice";
import { useGetVehicleManagementSearchDashboardQuery } from "../../../Api/apiSlice";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Define Yup validation schema
const validationSchema = Yup.object({
  fuelCost: Yup.string().required("Fuel Cost is required"),
  fuelQuantity: Yup.string().required("Fuel Quantity is required"),
  fuelDate: Yup.string().required("Fuel Date is required"),
  vehicleId: Yup.string().required("Vehicle ID is required"),
});

function AddFuel() {
  const search = "";
  const status = "";

  // Fetch vehicle data
  const {
    data: vehicleData,
    isLoading: isVehiclesLoading,
    error: vehicleError,
  } = useGetVehicleManagementSearchDashboardQuery({ search, status });

  const vehicles = vehicleData?.vehicles || [];

  const [addFuel] = useAddFuelMutation();

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
      console.log("Submitting values: ", values);
      await addFuel(values).unwrap();
      resetForm(); // Reset form fields after successful submission
      setAlert({
        open: true,
        severity: "success",
        message: "Fuel Added successfully",
      });
    } catch (err) {
      console.error("Add Fuel failed", err);
      setAlert({
        open: true,
        severity: "error",
        message: "Fuel is not added",
      });
    }
  };

  if (isVehiclesLoading) {
    console.log("Loading vehicle data...");
    return <p>Loading...</p>;
  }

  if (vehicleError) {
    console.error("Error fetching vehicle data: ", vehicleError);
    return <p>Error loading vehicle data</p>;
  }

  return (
    <Paper
      sx={{
        ...addDeviceStyles.mainContainer,
        height: "120%",
      }}
    >
      <Box sx={addDeviceStyles.container} ml={2} pl={3} mt={0} mb={2}>
        <Formik
          initialValues={{
            fuelCost: "",
            fuelQuantity: "",
            fuelDate: "",
            vehicleId: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ values, errors, touched }) => (
            <Form>
              <Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Select Your Vehicle
                  </Typography>
                  <Field
                    as={TextField}
                    select
                    name="vehicleId"
                    placeholder="Select Vehicle"
                    variant="outlined"
                    size="small"
                    error={touched.vehicleId && Boolean(errors.vehicleId)}
                    helperText={touched.vehicleId && errors.vehicleId}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "50px",
                        marginLeft: "5px",
                      },
                      width: {
                        xs: "90%",
                        sm: "240px",
                        lg: "240px",
                      },
                    }}
                  >
                    {vehicles.map((vehicle) => (
                      <MenuItem key={vehicle.id} value={vehicle.id}>
                        {vehicle.vehicleType} - {vehicle.vehicleModel}
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
                    Fuel Cost
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField2}
                    name="fuelCost"
                    label="Enter Fuel Cost"
                    error={touched.fuelCost && Boolean(errors.fuelCost)}
                    helperText={touched.fuelCost && errors.fuelCost}
                  />
                </Box>

                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={4}
                    mb={1}
                    style={addDeviceStyles.label}
                  >
                    Fuel Quantity
                  </Typography>
                  <Field
                    as={TextField}
                    sx={addDeviceStyles.textField2}
                    name="fuelQuantity"
                    label="Enter Fuel Quantity"
                    error={touched.fuelQuantity && Boolean(errors.fuelQuantity)}
                    helperText={touched.fuelQuantity && errors.fuelQuantity}
                  />
                </Box>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box sx={loginLeftContentContainerItemWidth}>
                    <Typography
                      variant="subtitle1"
                      mt={3}
                      mb={1}
                      style={addDeviceStyles.label}
                    >
                      Fuel Date
                    </Typography>
                    <Field
                      name="fuelDate"
                      render={({ field, form }) => (
                        <DatePicker
                          {...field}
                          value={field.value ? new Date(field.value) : null}
                          onChange={(date) =>
                            form.setFieldValue(
                              "fuelDate",
                              date ? date.toISOString() : "",
                            )
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              error={
                                touched.fuelDate && Boolean(errors.fuelDate)
                              }
                              helperText={touched.fuelDate && errors.fuelDate}
                            />
                          )}
                        />
                      )}
                    />
                  </Box>
                </LocalizationProvider>
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

export default AddFuel;
