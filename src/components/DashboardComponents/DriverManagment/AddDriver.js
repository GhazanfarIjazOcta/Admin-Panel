import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addDriverStyles } from "../../UI/styles/Main";
import { useAddDriverMutation } from "../../../Api/apiSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import CustomAlert from '../../UI/CustomAlert';
import { useState } from "react";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Driver name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  userPhone: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  status: Yup.string().required("Status is required"),
});

function AddDriver() {
  const [addDriver] = useAddDriverMutation();

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleRegister = async (values, { resetForm }) => {
    const driverData = {
      userName: values.name,
      userEmail: values.email,
      userPassword: values.password,
      userPhone: values.userPhone,
      status: values.status,
      role: "driver"
    };

    console.log("here is the Add User data ", driverData);

    try {
      await addDriver(driverData).unwrap();
      
      setAlert({
        open: true,
        severity: "success",
        message: "Driver Added successfully",
      });
      resetForm();
    } catch (err) {
      
      setAlert({
        open: true,
        severity: "error",
        message: "Driver is not Added",
      });
      console.error("Add Driver failed", err);
    }
  };

  return (
    <Paper sx={addDriverStyles.mainContainer}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          userPhone: "",
          password: "",
          status: "active",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
        
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Box sx={addDriverStyles.container} ml={2} pl={3} mt={0} mb={2}>
              <Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={4}
                    mb={1}
                    style={addDriverStyles.label}
                  >
                    Driver Name
                  </Typography>
                  <Field
                    as={TextField}
                    name="name"
                    sx={addDriverStyles.textField}
                    label="Enter Driver Name"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDriverStyles.label}
                  >
                    Password
                  </Typography>
                  <Field
                    as={TextField}
                    name="password"
                    sx={addDriverStyles.textField}
                    label="Enter Password"
                    type="password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDriverStyles.label}
                  >
                    Email
                  </Typography>
                  <Field
                    as={TextField}
                    name="email"
                    sx={addDriverStyles.textField}
                    label="Enter Email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDriverStyles.label}
                  >
                    Phone number
                  </Typography>
                  <Field
                    as={TextField}
                    name="userPhone"
                    sx={addDriverStyles.textField}
                    label="Enter Phone number"
                    error={touched.userPhone && Boolean(errors.userPhone)}
                    helperText={touched.userPhone && errors.userPhone}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={loginLeftContentContainerItemWidth}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={addDriverStyles.label}
                  >
                    Vehicle Assigned
                  </Typography>
                  <TextField
                    sx={addDriverStyles.textField}
                    label="Name of the Vehicle Assigned"
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    Status
                  </Typography>
                  <FormControl fullWidth size="medium">
                    {/* <InputLabel>Status</InputLabel> */}
                    <Field
                      as={Select}
                      name="status"
                      label="Status"
                      value={values.status}
                      onChange={handleChange}
                      error={touched.status && Boolean(errors.status)}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "50px",
                          marginLeft: "5px",
                        },
                        width: {
                          xs: "74%",  // Wider on extra-small screens
                          sm: "210%",  // Revert to 70% on small screens and up
                          lg: "84%"
                        },
                      }}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                    </Field>
                  </FormControl>
                </Box>

                {/* <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                  <Typography
                    variant="subtitle1"
                    mt={3}
                    mb={1}
                    style={{ fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    Status
                  </Typography>
                  <FormControl fullWidth size="small">
                    <InputLabel>Status</InputLabel>
                    <Field
                      as={Select}
                      name="status"
                      label="Status"
                      value={values.status}
                      onChange={handleChange}
                      error={touched.status && Boolean(errors.status)}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                    </Field>
                  </FormControl>
                </Box> */}



              </Box>

              <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
                <Button
                  variant="contained"
                  sx={addDriverStyles.button}
                  type="submit"
                >
                  Add
                </Button>

                <CustomAlert open={alert.open} onClose={handleAlertClose} severity={alert.severity} message={alert.message} />
             

              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default AddDriver;
