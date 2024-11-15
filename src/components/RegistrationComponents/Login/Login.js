import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import LoginImg from "../../../assets/Login.png";
import Ukeylogo from "../../../assets/UkeyLogo.png";
import GoogleLogo from "../../../assets/Google.svg";
import { useNavigate } from "react-router-dom";
import { RegistrationStyles } from "../../UI/Styles";
import "../../UI/Styles.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useAuth } from "../../../Authentication/AuthContext";

import { useLoginUserMutation } from "../../../Api/apiSlice"; // Adjust the import path accordingly

import CustomAlert from "../../UI/CustomAlert";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signupNavigation = () => {
    setSlideRight(true);
    setTimeout(() => {
      navigate("/signup");
    }, 500);
  };

  const [loginUser, { isLoading, error }] = useLoginUserMutation();


  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await loginUser({ email, password }).unwrap();
     
  //     localStorage.setItem("authToken", result.token); // Assuming token is returned
  //     //   login();
  //     console.log("here is the result, ", result.user.role);

  //     if (result.user.role === "superAdmin" || result.user.role === "admin"){

  //       const role = "admin"; // Or get this value based on user login data
  //       const user_ID = result.user.id
  //       login(role , user_ID); // Pass the role when logging in

  //       console.log("hello in admin or super admin");
  //       navigate("/dashboard/dashboardmain");
        

  //     } else if (result.user.role === "customer") {

  //       console.log("hello in customer");
  //       const role = "customer"; // Or get this value based on user login data
  //       const user_ID = result.user.id
  //       login(role, user_ID); // Pass the role when logging in
  //       navigate("/dashboard/customerdashboardmain");

  //     } else {

  //       alert("no role assigned");

  //     }
  //   } catch (err) {

  //     console.error("Login failed:", err);
  //     alert("Login failed. Please check your credentials.");
      
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await loginUser({ email, password }).unwrap();
    
    const token = result.token;
    const role = result.user.role;
    const name = result.user.name;
    const user_ID = result.user.id;
    //hello

    if (!token) {
      throw new Error("No token returned from login response");
    }
    setAlert({
      open: true,
      severity: "success",
      message: "Login Successfull:"
    });

    // Store the token and user information in localStorage
    localStorage.setItem("authToken", token); 


    if (role === "superAdmin" || role === "admin") {
      const   Newrole = "admin"
        login(Newrole, user_ID , name);  // Call login with role and user_ID to update auth context
    }else{
      const   Newrole = "customer"
      login(Newrole, user_ID, name);  // Call login with role and user_ID to update auth context
    }
    

    // Redirect based on role after everything is set
    if (role === "superAdmin" || role === "admin") {
      navigate("/dashboard/dashboardmain");
    } else if (role === "customer" || role === "driver") {
      navigate("/dashboard/customerdashboardmain");
    } else {
      
      setAlert({
        open: true,
        severity: "warning",
        message: "No role assigned"
      });
    }
    

  } catch (err) {
    console.error("Login failed:", err);
    // alert("Login failed. Please check your credentials.");
    setAlert({
      open: true,
      severity: "error",
      message: "Login failed. Please check your credentials."
    });
  }
};


  return (
    <Box
      sx={{
        backgroundImage: `url(${LoginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      <Box
        className={`sliding-box ${slideRight ? "slide-right" : ""}`}
        sx={{
          width: { xl: "45%", lg: "50%", md: "60%", sm: "100%", xs: "100%" },
          opacity: "95%",
          background: "#FFF",
          height: "100vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "90%",
            maxHeight: "100%",
            overflow: "hidden",
            padding: { xs: "2rem", sm: "2rem", md: "2rem" }
          }}
        >
          <Box
            sx={{
              paddingBottom: { xl: "0rem", lg: "0rem" },
              paddingTop: {
                xl: "2rem",
                lg: "2rem",
                md: "4rem",
                sm: "2rem",
                xs: "3rem"
              }
            }}
          >
            <Box
              component="img"
              src={Ukeylogo}
              sx={{
                height: {
                  xl: "90px",
                  lg: "50px",
                  md: "30px",
                  sm: "40px",
                  xs: "30px"
                },
                width: {
                  xl: "200px",
                  lg: "150px",
                  md: "100px",
                  sm: "100px",
                  xs: "80px"
                }
              }}
              alt="Logo"
            />
          </Box>

          <Typography
            variant="h1"
            mt={{
              xl: "1em",
              lg: "0rem",
              md: "0.2rem",
              sm: "0.1rem",
              xs: "0.2rem"
            }}
            sx={{
              fontWeight: 600,
              fontSize: {
                xl: "2rem",
                lg: "1.6rem",
                md: "1.2rem",
                sm: "1.5rem",
                xs: "1.25rem"
              },
              fontFamily: "Inter",
              color: "#14181F"
            }}
          >
            Login
          </Typography>

          <Typography
            mt="1.6em"
            sx={{
              fontSize: "0.6rem",
              fontFamily: "Inter",
              color: "#14181F",
              textAlign: "center"
            }}
          >
            If you don't have an account register
          </Typography>
          <Stack direction={"row"} gap={2}>
            <Typography
              color={"#F38712"}
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "Inter",
                cursor: "pointer"
              }}
              onClick={signupNavigation}
            >
              Register here!
            </Typography>
          </Stack>

          <Box
            sx={{
              width: { xs: "80%", sm: "60%" },
              maxWidth: "370px",
              pt: "1.5rem"
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                fontSize: "0.8rem",
                fontFamily: "Inter",
                color: "#14181F"
              }}
            >
              E-mail/Phone Number
            </Typography>
            <TextField
              sx={RegistrationStyles.textField}
              fullWidth
              size="small"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ style: { fontSize: "0.8rem" } }}
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
              sx={{
                fontWeight: 500,
                fontSize: "0.8rem",
                fontFamily: "Inter",
                color: "#14181F"
              }}
            >
              Password
            </Typography>
            <TextField
              sx={RegistrationStyles.textField}
              fullWidth
              size="small"
              placeholder="Enter your password"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ style: { fontSize: "0.8rem" } }}
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
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Checkbox size="small" />
              <Typography
                color={"#14181F"}
                style={{
                  fontWeight: 300,
                  fontFamily: "Poppins",
                  fontSize: "0.75rem"
                }}
              >
                Remember me
              </Typography>
            </Stack>
            <Typography
              color={"#6F7C8E"}
              style={{
                fontWeight: 300,
                fontFamily: "Poppins",
                fontSize: "0.75rem"
              }}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              width: { xs: "80%", sm: "60%" },
              maxWidth: "370px",
              height: "3rem",
              backgroundColor: "#212122",
              color: "white",
              marginTop: "1.8em",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#212122"
              },
              fontSize: { md: "0.9rem" }
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>

          <CustomAlert
        open={alert.open}
        onClose={handleAlertClose}
        severity={alert.severity}
        message={alert.message}
      />

          <Typography
            variant="body1"
            mt={2}
            mb={1}
            color={"#6F7C8E"}
            style={{
              fontWeight: 500,
              fontSize: "0.9rem",
              fontFamily: "Poppins",
              cursor: "pointer",
              marginTop: "2rem"
            }}
          >
            or continue with
          </Typography>

          <Stack mt={1} mb={5}>
            <img
              src={GoogleLogo}
              style={{ height: "30px", width: "30px" }}
              alt="Google Login"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
