import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";

import Ukeylogo from "../../../assets/UkeyLogo.png";
import GoogleLogo from "../../../assets/Google.svg";
import { useNavigate } from "react-router-dom";
import { RegistrationStyles } from "../../UI/Styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { SignupStyles } from "./SignupStyles";

function Signup() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // Step state to handle pagination

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleNext = () => {
    setStep(2); // Go to the next step
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleRegister = () => {
    navigate("/dashboard/dashboardmain"); // Redirect after registration
  };

  return (
    <Box
      sx={ SignupStyles.MainBox}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={SignupStyles.whiteBox}
      >
        <Box sx={{ paddingBottom: { sm: "1rem", xs: "0.5rem" } }}>
          <img
            src={Ukeylogo}
            alt="Ukey Logo"
            style={{ maxHeight: "143px", maxWidth: "200px" }}
          />
        </Box>

        <Typography
          variant="h1"
          mt={{ xl: "1em", lg: "-1em", md: "0em", sm: "1em", xs: "0.8em" }}
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
                xs: "1rem"
              }
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
                xs: "1rem"
              }
            }}
            style={{
              fontWeight: 600,
              fontFamily: "Inter",
              cursor: "pointer",
              textAlign: "center"
            }}
            onClick={() => navigate("/login")}
          >
            Login here
          </Typography>
        </Stack>

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
                placeholder="Enter your Phone number"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "80%", sm: "60%" },
                maxWidth: "370px",
                position: "relative"
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
                type={passwordVisible ? "text" : "password"}
              />
              <Box
                sx={RegistrationStyles.passwordEyeBox}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
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
                position: "relative"
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
                placeholder="Confirm your password"
                type={confirmPasswordVisible ? "text" : "password"}
              />
              <Box
                sx={RegistrationStyles.passwordEyeBox}
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? (
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
              />
            </Box>
          </>
        )}

        <Button
          variant="contained"
          sx={SignupStyles.MainButton}
          onClick={step === 1 ? handleNext : handleRegister}
        >
          {step === 1 ? "Next" : "Register"}
        </Button>

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
                mt: { xl: "1em", sm: "1rem" }
              }}
            >
              or continue with
            </Typography>

            <Stack mt={{ xl: "1em", lg: "0em", sm: "0em" }}>
              <img src={GoogleLogo} alt="Google logo" />
            </Stack>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              
              sx={{...SignupStyles.MainButton,
                mt:2
              }}
              onClick={handleBack}
            >
              {step === 2 ? "Back" : "Next"}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Signup;
