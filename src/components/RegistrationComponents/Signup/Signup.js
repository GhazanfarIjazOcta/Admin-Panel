import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../Api/apiSlice"; // Import the mutation hook
import Ukeylogo from "../../../assets/UkeyLogo.png";
import GoogleLogo from "../../../assets/Google.svg";
import { RegistrationStyles } from "../../UI/Styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { SignupStyles } from "./SignupStyles";

import CustomAlert from "../../UI/CustomAlert";

function Signup() {
  const navigate = useNavigate();
  const [userPasswordVisible, setuserPasswordVisible] = useState(false);
  const [confirmuserPasswordVisible, setConfirmuserPasswordVisible] =
    useState(false);
  const [step, setStep] = useState(1);

  // Form fields
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [confirmuserPassword, setConfirmuserPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  // Hook to call the register API mutation
  const [registerUser, { isLoading, error, isSuccess }] =
    useRegisterUserMutation();

  const toggleuserPasswordVisibility = () => {
    setuserPasswordVisible(!userPasswordVisible);
  };

  const toggleConfirmuserPasswordVisibility = () => {
    setConfirmuserPasswordVisible(!confirmuserPasswordVisible);
  };

  const handleNext = () => {
    setStep(2); // Go to the next step
  };

  const handleBack = () => {
    setStep(1); // Go back to the first step
  };

  const handleRegister = async () => {
    // Collect user data for registration
    const userData = {
      orgName,
      orgAddress,
      userName,
      userEmail,
      userPassword,
      userPhone,
    };

    console.log("here is the registeration data ", userData);

    // Trigger the registration API call
    try {
      await registerUser(userData).unwrap();
      navigate("/login"); // Navigate to the dashboard on success
      setAlert({
        open: true,
        severity: "success",
        message: "Registeration Successfull, now login your credentials",
      });
    } catch (err) {
      console.error("Registration failed", err);
      setAlert({
        open: true,
        severity: "error",
        message: "Registration failed",
      });
    }
  };

  return (
    <Box sx={SignupStyles.MainBox}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={SignupStyles.whiteBox}
      >
        <Box
          sx={{ paddingBottom: { sm: "0rem", xs: "0rem", md: "0", lg: "0" } }}
        >
          <img
            src={Ukeylogo}
            alt="Ukey Logo"
            style={{ maxHeight: "143px", maxWidth: "200px" }}
          />
        </Box>

        <Typography
          variant="h1"
          mt={{
            xl: "1em",
            lg: "-1em",
            md: "-0.3em",
            sm: "-0.3em",
            xs: "-0.3em",
          }}
          sx={SignupStyles.RegisterTypography}
        >
          Register
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} gap={"3px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#14181F",
              textAlign: "center",
              fontSize: {
                xl: "1rem",
                lg: "0.8rem",
                md: "0.7rem",
                sm: "1rem",
                xs: "1rem",
              },
            }}
          >
            Already have an account?
          </Typography>
          <Typography
            color={"#F38712"}
            sx={{
              fontSize: {
                xl: "1rem",
                lg: "0.8rem",
                md: "0.7rem",
                sm: "1rem",
                xs: "1rem",
              },
              fontWeight: 600,
              fontFamily: "Inter",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate("/login")}
          >
            Login here
          </Typography>
        </Stack>

        {/* First Step (Personal Details) */}
        {step === 1 ? (
          <>
            <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Full Name
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter your full name"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </Box>

            <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                E-mail
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
              />
            </Box>

            <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Phone Number
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter your phone number"
                value={userPhone}
                onChange={(e) => setuserPhone(e.target.value)}
              />
            </Box>

            {/* userPassword Fields */}
            <Box
              sx={{
                width: { xs: "80%", sm: "60%" },
                maxWidth: "370px",
                position: "relative",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Password
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter your password"
                type={userPasswordVisible ? "password" : "text"}
                value={userPassword}
                onChange={(e) => setuserPassword(e.target.value)}
              />
              <Box
                sx={RegistrationStyles.passwordEyeBox}
                onClick={toggleuserPasswordVisibility}
              >
                {userPasswordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "80%", sm: "60%" },
                maxWidth: "370px",
                position: "relative",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Confirm Password
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Confirm your userPassword"
                type={confirmuserPasswordVisible ? "password" : "text"}
                value={confirmuserPassword}
                onChange={(e) => setConfirmuserPassword(e.target.value)}
              />
              <Box
                sx={RegistrationStyles.passwordEyeBox}
                onClick={toggleConfirmuserPasswordVisibility}
              >
                {confirmuserPasswordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Organization Name
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter organization name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </Box>

            <Box sx={{ width: { xs: "80%", sm: "60%" }, maxWidth: "370px" }}>
              <Typography
                variant="subtitle1"
                sx={SignupStyles.TextFieldTypography}
              >
                Organization Address
              </Typography>
              <TextField
                sx={RegistrationStyles.textField}
                fullWidth
                size="small"
                placeholder="Enter Organization address"
                value={orgAddress}
                onChange={(e) => setOrgAddress(e.target.value)}
              />
            </Box>
          </>
        )}

        <Button
          variant="contained"
          sx={SignupStyles.MainButton}
          onClick={step === 1 ? handleNext : handleRegister}
          disabled={isLoading} // Disable the button while the request is being processed
        >
          {isLoading ? "Registering..." : step === 1 ? "Next" : "Register"}
        </Button>
        <CustomAlert
          open={alert.open}
          onClose={handleAlertClose}
          severity={alert.severity}
          message={alert.message}
        />

        {step === 1 ? (
          <>
            <Typography
              variant="body1"
              color={"#6F7C8E"}
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                fontFamily: "Poppins",
                cursor: "pointer",
                mt: { xl: "1em", sm: "1rem" },
              }}
            >
              or continue with
            </Typography>
            <Stack
              mt={{ xl: "1em", lg: "0em", sm: "1em", xs: "0.5em" }}
              gap="1em"
              direction="row"
              justifyContent="center"
            >
              <Box sx={{ width: "50px", cursor: "pointer" }}>
                <img alt="google logo" src={GoogleLogo} />
              </Box>
            </Stack>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{ ...SignupStyles.MainButton, mt: 2 }}
              onClick={handleBack}
            >
              Back
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Signup;
