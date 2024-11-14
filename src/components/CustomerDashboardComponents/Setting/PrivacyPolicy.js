import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../assets/setting/editIcon.png";
import { settingStyles } from "../../UI/styles/Main";
function PrivacyPolicy() {
  return (
    <Paper sx={settingStyles.policyPaper}>
      <Box
        sx={{
          ...settingStyles.policyBox,
        }}
      >
        <Box
          sx={{
            paddingLeft: {
              xs: "30px", // Padding for extra-small devices
              lg: "40px", // Padding for large devices
            },
            paddingRight: {
              xs: "30px", // Padding for extra-small devices
              lg: "0px", // Padding for large devices
            },
          }}
        >
          <Box sx={settingStyles.policyEdit} pr={8}>
            <img src={editIcon} width={"21px"} height={"21px"} />
          </Box>
          <Box>
            <Typography
              //   variant="subtitle1"
              mt={4}
              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              Your privacy is important to us. It is Brainstorming's policy to
              respect your privacy regarding any information we may collect from
              you across our website, and other sites we own and operate.
            </Typography>
            <Typography
              //   variant="subtitle1"
              mt={4}
              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why
            </Typography>
            <Typography
              //   variant="subtitle1"

              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              we’re collecting it and how it will be used.
            </Typography>
            <Typography
              //   variant="subtitle1"
              mt={4}
              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent
            </Typography>
            <Typography
              //   variant="subtitle1"

              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              loss and theft, as well as unauthorized access, disclosure,
              copying, use or modification.
            </Typography>
            <Typography
              //   variant="subtitle1"
              mt={4}
              style={{ fontWeight: 400, fontSize: "14px", fontStyle: "Inter" }}
            >
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </Typography>
          </Box>
        </Box>
        <Stack sx={settingStyles.policyButtonContainer} mr={5}>
          <Button variant="outlined" sx={settingStyles.policyDisagree}>
            Disagree
          </Button>
          <Button variant="contained" sx={settingStyles.policyAcceptAll}>
            Accept All
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default PrivacyPolicy;
