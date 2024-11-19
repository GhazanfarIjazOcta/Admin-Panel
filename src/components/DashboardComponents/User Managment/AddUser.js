import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addUserStyles } from "../../UI/styles/Main";
import {
  useAddAdminMutation,
  useAddUserMutation,
  useAddDriverMutation,
} from "../../../Api/apiSlice";
import CustomAlert from "../../UI/CustomAlert";

const validationSchema = Yup.object({
  userName: Yup.string().required("Name is required"),
  userEmail: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  userPassword: Yup.string().required("Password is required"),
  userPhone: Yup.string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .min(10, "Phone number should be at least 10 digits")
    .required("Phone number is required"),
  role: Yup.string()
    .oneOf(["admin", "customer", "driver"], "Invalid role")
    .required("Role is required"),
  status: Yup.string().required("Status is required"),
});

function AddUser() {
  const [addAdmin] = useAddAdminMutation();
  const [addUser] = useAddUserMutation();
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
    const { userName, userEmail, userPassword, userPhone, role, status } =
      values;

    if (
      !userName ||
      !userEmail ||
      !userPassword ||
      !userPhone ||
      !role ||
      !status
    ) {
      setAlert({
        open: true,
        severity: "info",
        message: "Please fill out all fields.",
      });
      return;
    }

    const userData = {
      userName,
      userEmail,
      userPassword,
      userPhone,
      role,
      status,
    };
    console.log("User data: ", userData);

    try {
      const mutation =
        role === "admin" ? addAdmin : role === "driver" ? addDriver : addUser;
      await mutation(userData).unwrap();

      setAlert({
        open: true,
        severity: "success",
        message: "User added successfully!",
      });
      resetForm();
    } catch (err) {
      setAlert({
        open: true,
        severity: "error",
        message: "User not added. Please try again.",
      });
      console.error("Add User failed", err);
    }
  };

  return (
    <Paper sx={addUserStyles.mainContainerStyles}>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPassword: "",
          userPhone: "",
          role: "",
          status: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values, handleChange, setFieldValue, touched, errors }) => (
          <Form>
            <Box sx={addUserStyles.container} pl={{ xs: 2, sm: 8 }}>
              {/* Name Field */}
              <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Name
                </Typography>
                <Field
                  as={TextField}
                  sx={addUserStyles.textFieldStyles}
                  name="userName"
                  label="Enter Name"
                  size="medium"
                  fullWidth
                  helperText={<ErrorMessage name="userName" />}
                  error={touched.userName && Boolean(errors.userName)}
                />
              </Box>

              {/* Email Field */}
              <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Email
                </Typography>
                <Field
                  as={TextField}
                  sx={addUserStyles.textFieldStyles}
                  name="userEmail"
                  label="Enter Email"
                  size="medium"
                  fullWidth
                  helperText={<ErrorMessage name="userEmail" />}
                  error={touched.userEmail && Boolean(errors.userEmail)}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Password
                </Typography>
                <Field
                  as={TextField}
                  sx={addUserStyles.textFieldStyles}
                  name="userPassword"
                  label="Enter Password"
                  type="password"
                  size="medium"
                  fullWidth
                  helperText={<ErrorMessage name="userPassword" />}
                  error={touched.userPassword && Boolean(errors.userPassword)}
                />
              </Box>

              {/* Phone Number Field */}
              <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Phone Number
                </Typography>
                <Field
                  as={TextField}
                  sx={addUserStyles.textFieldStyles}
                  name="userPhone"
                  label="Enter Phone Number"
                  size="medium"
                  fullWidth
                  helperText={<ErrorMessage name="userPhone" />}
                  error={touched.userPhone && Boolean(errors.userPhone)}
                />
              </Box>

              {/* Role Field */}
              <Box sx={{ width: { xs: "92%", sm: "32%", lg: "35.5%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Role
                </Typography>
                <FormControl fullWidth size="medium">
                  <InputLabel>Role</InputLabel>
                  <Field
                    as={Select}
                    name="role"
                    value={values.role}
                    onChange={(e) => setFieldValue("role", e.target.value)}
                    label="Role"
                    IconComponent={() => (
                      <IconButton sx={{ padding: 0 }}>
                        <img src={Arrowdown} height="16px" width="20px" />
                      </IconButton>
                    )}
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="customer">Customer</MenuItem>
                    <MenuItem value="driver">Driver</MenuItem>
                  </Field>
                </FormControl>
              </Box>

              {/* Status Field */}
              <Box sx={{ width: { xs: "92%", sm: "32%", lg: "35.5%" } }}>
                <Typography
                  variant="subtitle1"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: 500 }}
                >
                  Status
                </Typography>
                <FormControl fullWidth size="medium">
                  <InputLabel>Status</InputLabel>
                  <Field
                    as={Select}
                    name="status"
                    value={values.status}
                    onChange={(e) => setFieldValue("status", e.target.value)}
                    label="Status"
                    IconComponent={() => (
                      <IconButton sx={{ padding: 0 }}>
                        <img src={Arrowdown} height="16px" width="20px" />
                      </IconButton>
                    )}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Field>
                </FormControl>
              </Box>

              {/* Add Button */}
              <Stack mt={6} sx={{ gap: { xs: "16px", sm: "24px" } }}>
                <Button
                  variant="contained"
                  sx={addUserStyles.buttonStyles}
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
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default AddUser;
