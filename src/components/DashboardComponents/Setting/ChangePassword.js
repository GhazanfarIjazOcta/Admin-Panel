import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { loginLeftContentContainerItemWidth } from "../../UI/styles/Login";
import PasswordInput from "../../UI/Input/PasswordInput";
import { settingStyles } from "../../UI/styles/Main";

function ChangePassword() {
  return (
    <Paper sx={settingStyles.changePasswordPaper}>
      <Box sx={settingStyles.changePasswordContainer} pl={8}>
        <Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={4}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Enter Old Password
            </Typography>
            <Box sx={settingStyles.textFieldBox}>
              <PasswordInput label={"Enter old Password"} />
            </Box>
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Password
            </Typography>
            <Box sx={settingStyles.textFieldBox}>
              <PasswordInput label={"Enter Password"} />
            </Box>
          </Box>
          <Box sx={loginLeftContentContainerItemWidth}>
            <Typography
              variant="subtitle1"
              mt={3}
              mb={1}
              style={settingStyles.profileLabel}
            >
              Confirm Password
            </Typography>
            <Box sx={settingStyles.textFieldBox}>
              <PasswordInput label={"Confirm Password"} />
            </Box>
          </Box>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "24px",
          }}
          mr={5}
        >
          <Button
            variant="outlined"
            sx={{
              marginRight: "opx",
              marginLeft: "0px",
              width: "185px",
              height: "53px",
              backgroundColor: "white",
              color: "#F38712",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              "&:hover": {
                backgroundColor: "white",
                border: "1px solid #F38712",
              },
              border: "1px solid #F38712",
            }}
          >
            Reset Changes
          </Button>
          <Button
            variant="contained"
            sx={{
              marginRight: "opx",
              marginLeft: "0px",
              width: "247px",
              height: "53px",
              backgroundColor: "#F38712",
              color: "white",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              "&:hover": {
                backgroundColor: "#F38712",
                border: "1px solid #F38712",
              },
              border: "1px solid #F38712",
            }}
          >
            Update
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default ChangePassword;
