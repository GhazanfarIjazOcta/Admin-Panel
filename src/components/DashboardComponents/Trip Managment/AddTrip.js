import React from "react";
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
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import Arrowdown from "../../../assets/Card/fi_chevron-down.png";
import { addTripStyles } from "../../UI/styles/Main";
import Navbar2 from "../../LayoutComponents/Navbar/Navbar2";

import { useAddTripMutation } from "../../../Api/apiSlice";
import { useState } from "react";

import CustomAlert from '../../UI/CustomAlert';

const validationSchema = Yup.object({
  // tripId: Yup.string().required("Trip ID is required"),
  vehicle: Yup.string().required("Vehicle is required"),
  driverName: Yup.string().required("Driver's Name is required"),
  startLocation: Yup.string().required("Start Location is required"),
  endLocation: Yup.string().required("End Location is required"),
  status: Yup.string().required("Status is required"),
});




function AddTrip() {

  const [addTrip] = useAddTripMutation();

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };


  const handleRegister = async (values, resetForm) => {
    console.log("Form Values: ", values);
    const { startLocation, endLocation, status } = values;
    const tripData = { startLocation, endLocation, status };
  
    console.log("here is the trip data " , tripData )
    try {
      await addTrip(tripData).unwrap();
      
      setAlert({
        open: true,
        severity: "success",
        message: "Trip added successfully",
      });
      resetForm();
    } catch (err) {
      
      setAlert({
        open: true,
        severity: "error",
        message: "Trip not added",
      });
      console.error("Add Trip failed", err);
    }
  };
  

  const formik = useFormik({
    initialValues: {
      // tripId: "",
      vehicle: "",
      driverName: "",
      startLocation: "",
      endLocation: "",
      status: "active",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleRegister(values, resetForm);
    },
  });


  return (
    <Paper sx={addTripStyles.mainContainer}>
      <Navbar2 />
      <Box sx={addTripStyles.container} pl={3} mb={3}  component="form" onSubmit={formik.handleSubmit}>
        <Box>
          {/* Trip ID Field */}
          {/* <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={4} mb={1} style={addTripStyles.label}>
              Trip Id
            </Typography>
            <TextField
              sx={addTripStyles.textField}
              label="Enter Trip ID"
              name="tripId"
              value={formik.values.tripId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.tripId && Boolean(formik.errors.tripId)}
              helperText={formik.touched.tripId && formik.errors.tripId}
            />
          </Box> */}

          {/* Vehicle Field */}
          {/* <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
              Vehicle
            </Typography>
            <TextField
              sx={addTripStyles.textField}
              label="Enter Vehicle"
              name="vehicle"
              value={formik.values.vehicle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.vehicle && Boolean(formik.errors.vehicle)}
              helperText={formik.touched.vehicle && formik.errors.vehicle}
            />
          </Box> */}

          {/* Driver's Name Field */}
          {/* <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
              Driver's Name
            </Typography>
            <TextField
              sx={addTripStyles.textField}
              label="Enter Driver's Name"
              name="driverName"
              value={formik.values.driverName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.driverName && Boolean(formik.errors.driverName)}
              helperText={formik.touched.driverName && formik.errors.driverName}
            />
          </Box> */}

          {/* Start Location Field */}
          <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
              Start Location
            </Typography>
            <TextField
              placeholder="Select Starting Location"
              variant="outlined"
              size="small"
              name="startLocation"
              value={formik.values.startLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.startLocation && Boolean(formik.errors.startLocation)}
              helperText={formik.touched.startLocation && formik.errors.startLocation}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 0 }}>
                    <IconButton sx={{ padding: 0 }}>
                      <img src={Arrowdown} height={"16px"} width={"20px"} alt="Arrow Icon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                  marginLeft: "5px",
                },
                width: {
                   xs: "90%", 
                   sm: "90%" ,
                   lg: "36%"
                  },
              }}
            />
          </Box>

          {/* End Location Field */}
          <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
              End Location
            </Typography>
            <TextField
              placeholder="Select Ending Location"
              variant="outlined"
              size="small"
              name="endLocation"
              value={formik.values.endLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.endLocation && Boolean(formik.errors.endLocation)}
              helperText={formik.touched.endLocation && formik.errors.endLocation}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 0 }}>
                    <IconButton sx={{ padding: 0 }}>
                      <img src={Arrowdown} height={"16px"} width={"20px"} alt="Arrow Icon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                  marginLeft: "5px",
                },
                width: {
                   xs: "90%", 
                   sm: "90%" ,
                   lg: "36%"
                  },
              }}
            />
          </Box>

          {/* Status Field */}
          {/* <Box sx={addTripStyles.containerItemWidth}>
            <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
              Status
            </Typography>
            <TextField
              placeholder="Select Status"
              variant="outlined"
              size="small"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: 0 }}>
                    <IconButton sx={{ padding: 0 }}>
                      <img src={Arrowdown} height={"16px"} width={"20px"} alt="Arrow Icon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "50px",
                  marginLeft: "5px",
                },
                width: { xs: "100%", sm: "35%" },
              }}
            />
          </Box> */}
          {/* Status Field */}
<Box sx={addTripStyles.containerItemWidth}>
  <Typography variant="subtitle1" mt={3} mb={1} style={addTripStyles.label}>
    Status
  </Typography>
  <FormControl fullWidth>
    {/* <InputLabel>Select Status</InputLabel> */}
    <Select
      variant="outlined"
      size="medium"
      name="status"
      value={formik.values.status}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.status && Boolean(formik.errors.status)}
      helperText={formik.touched.status && formik.errors.status}
      sx={{
        "& .MuiInputBase-root": {
          height: "50px",
          marginLeft: "5px",
        },
        width: {
           xs: "90%", 
           sm: "90%" ,
           lg: "36%"
          },
      }}
    >
      <MenuItem value="upcoming">upcoming</MenuItem>
      <MenuItem value="active">active</MenuItem>
      <MenuItem value="delayed">delayed</MenuItem>
    </Select>
  </FormControl>
</Box>


        
          
        </Box>

        {/* Add Button */}
        <Stack sx={{ gap: "24px" }} mt={6} ml={1}>
          <Button 
          type="submit" variant="contained" 
          sx={addTripStyles.button}
          // onClick={handleRegister}
          >
            Add
          </Button>
          <CustomAlert open={alert.open} onClose={handleAlertClose} severity={alert.severity} message={alert.message} />
                    
        </Stack>
      </Box>
    </Paper>
  );
}

export default AddTrip;
