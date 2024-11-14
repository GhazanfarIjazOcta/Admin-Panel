import { Box, Button, Paper, Stack, Grid, TextField } from "@mui/material";
import React from "react";
import editIcon from "../../../assets/setting/editIcon.png";
import {
  maintenanceSchedulingStyles,
  settingStyles,
} from "../../UI/styles/Main";
import { Slider } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SoundLogo from "../../../assets/Card/SoundLogo.png";
import {
  BorderColor,
  SignalWifiStatusbarConnectedNoInternet4,
} from "@mui/icons-material";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const CardContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const LogoContainer = styled("div")({
  marginRight: "10px",
});

const PlusMinusContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "10px",
  marginRight: "10px",
});

const PlusMinusButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 35, // Adjust width for circle size
  height: 35, // Adjust height for circle size
  borderRadius: "50%", // Makes the background circular
  backgroundColor: "#FFF4F2",
  border: "none",
  color: "#fb8c00", // // Darker orange
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#ffffff",
    BorderColor: "#fb8c00",
    border: "2px solid orange",
  },
});

function SoundAndConfiguration() {
  const [volume, setVolume] = React.useState(26);

  const handleVolumeChange = (event, newValue) => {
    if (newValue >= 0 && newValue <= 100) {
      setVolume(newValue);
    }
  };

  return (
    <Paper sx={settingStyles.policyPaper}>
      <Box
        sx={{
          ...settingStyles.policyBox,
        }}
        pl={0}
      >
        <Box
          sx={{
            paddingLeft: {
              xs: "40px", // Padding for extra-small devices
              lg: "40px", // Padding for large devices
            },
            paddingRight: {
              xs: "40px", // Padding for extra-small devices
              lg: "40px", // Padding for large devices
            },
          }}
        >
          <Box sx={settingStyles.policyEdit} pr={0}>
            <img
              src={editIcon}
              width={"21px"}
              height={"21px"}
              alt="Edit Icon"
            />
          </Box>

          <Grid container spacing={3} columns={{ xs: 12, sm: 12 }}>
            <Grid item xs={12} sm={5}>
              <Card sx={{ padding: 3, marginBottom: 2 }}>
                {/* <Typography variant="body2"> <VolumeUpIcon /> Sound Control</Typography> */}
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ marginBottom: 2 }}
                >
                  <Box sx={maintenanceSchedulingStyles.boxContainer}>
                    <img src={SoundLogo} height={"24px"} width={"24px"} />
                  </Box>
                  <Box ml={2}>
                    <Typography variant="h6" fontWeight="bold">
                      Sound Control
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" color="textSecondary">
                        {volume} %
                      </Typography>
                      {/* <SignalWifiStatusbarConnectedNoInternet4 /> */}
                    </Box>
                  </Box>
                </Box>

                <PlusMinusContainer>
                  <PlusMinusButton
                    onClick={() => setVolume(Math.max(0, volume - 5))}
                  >
                    -
                  </PlusMinusButton>
                  <PrettoSlider
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                    sx={{
                      width: { lg: "340px", xs: "200px" },
                      color: "orange",
                      height: "20px",
                    }} // Ensure it takes appropriate width
                  />
                  <PlusMinusButton
                    onClick={() => setVolume(Math.min(100, volume + 5))}
                  >
                    +
                  </PlusMinusButton>
                </PlusMinusContainer>
              </Card>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Card sx={{ padding: 4, marginBottom: 2, height: "55%" }}>
                <Box>
                  <Typography variant="h6">Update Configuration</Typography>{" "}
                  {/* Changed to h6 */}
                  <TextField
                    variant="outlined"
                    placeholder="Update here" // Placeholder for the text box
                    fullWidth // Make the text box take full width
                    // sx={{ marginBottom: 2 }} // Margin below the text box
                  />
                  {/* <Button variant="contained" color="primary">
          Update Here
        </Button> */}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Stack sx={settingStyles.policyButtonContainer} mr={5}>
          {/* <Button variant="outlined" sx={settingStyles.policyDisagree}>
            Disagree
          </Button> */}
          <Button variant="contained" sx={settingStyles.policyAcceptAll}>
            Accept
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default SoundAndConfiguration;
