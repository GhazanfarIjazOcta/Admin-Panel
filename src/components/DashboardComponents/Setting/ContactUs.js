import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import callLogo from "../../../assets/setting/settingCallIcon.png";
import mailLogo from "../../../assets/setting/settingMailIcon.png";
import { settingStyles } from "../../UI/styles/Main";
function ContactUs() {
  return (
    <Paper sx={settingStyles.contactUsPaper}>
      <Box  
            sx={{
              ...settingStyles.contactUsBox,
              paddingLeft: {
                  xs: '20px', // Padding for extra-small devices
                  lg: '40px', // Padding for large devices
              },
            }} 
      
      >
        <Box sx={settingStyles.contactUsContainer} mt={4}>
          <Box sx={settingStyles.contactUsBoxWidth}>
            <Typography sx={settingStyles.conatactUsLeftLabel}>
              Get in touch
            </Typography>
            <Typography sx={settingStyles.conatactUsLeftbottomLabel} mt={2}>
              Need an experienced and skilled hand with custom IT projects? .
            </Typography>
            <Typography sx={settingStyles.conatactUsLeftbottomLabel}>
              Fill out the form to get a free consultation
            </Typography>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={4}
                style={settingStyles.profileLabel}
              >
                Name
              </Typography>
              <TextField
                sx={settingStyles.conatactUsTextField}
                label="Enter your full name"
              />
            </Box>
            <Box sx={loginLeftContentContainerItemWidth}>
              <Typography
                variant="subtitle1"
                mt={4}
                style={settingStyles.profileLabel}
              >
                Message
              </Typography>
              <Box sx={{ height: "180px" }}>
                <TextField
                  sx={settingStyles.conatactUsTextFieldMessage}
                  style={{ height: "140px" }}
                  label="Enter your full name"
                  InputLabelProps={{
                    style: {
                      height: "140px",
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "140px",
                    },
                  }}
                />
              </Box>
            </Box>
            <Stack
              direction={{lg:"row" , xs:"column"}}
              justifyContent={"space-around"}
              width={{lg:"65%" , xs:"20%"}}
              mt={5}
            >
              <Box>
                <Paper sx={settingStyles.contactUsContactBox}>
                  <img src={callLogo} width={"36px"} height={"33px"} />
                  <Typography style={settingStyles.contactUsCallLabel}>
                    Call us
                  </Typography>
                  <Typography style={settingStyles.contactUsPhone}>
                    +92-0000000000
                  </Typography>
                </Paper>
              </Box>
              <Box>
                <Paper sx={settingStyles.contactUsContactBox}>
                  <img src={mailLogo} width={"36px"} height={"33px"} />
                  <Typography style={settingStyles.contactUsCallLabel}>
                    Email us
                  </Typography>
                  <Typography style={settingStyles.contactUsPhone}>
                    +92-0000000000
                  </Typography>
                </Paper>
              </Box>
            </Stack>

            <Stack sx={settingStyles.contactUsButtonContainer} mr={1} mt={{lg:0 , xs:3}}  >
          <Button variant="contained" sx={settingStyles.contactUsButton}>
            Send
          </Button>
        </Stack>
          </Box>

          <Box sx={settingStyles.contactUsBoxWidth} pr={5}>
            <iframe
              width={"100%"}
              height={"585px"}
              borderRadius="0px"
              frameBorder="0"
              style={{ border: 0, borderRadius: "0px" }}
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330400.5089714776!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5d4b2f1f7db%3A0x8c4f2ef328e24f6c!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </Box>
         

        </Box>
       
      </Box>
    </Paper>
  );
}

export default ContactUs;
