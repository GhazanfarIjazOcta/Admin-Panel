import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { maintenanceSchedulingStyles } from "../../UI/styles/Main";

import MyDeviceLogo from "../../../assets/Card/MyDeviceLogo.png";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#ffffff",
  width: "100%",
  maxWidth: "400px",
});

const IconBox = styled(Box)({
  backgroundColor: "#ffebee",
  borderRadius: "50%",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StatusDot = styled(Box)({
  width: "10px",
  height: "10px",
  backgroundColor: "#4caf50",
  borderRadius: "50%",
  marginLeft: "5px",
});

const DataItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "5px 0",
});

const RequestButton = styled(Button)({
  backgroundColor: "#ff9800",
  color: "white",
  marginTop: "15px",
  "&:hover": {
    backgroundColor: "#fb8c00",
  },
});

const SendButton = styled(Button)({
  backgroundColor: "#ff9800", // Orange color
  color: "white",
  "&:hover": {
    backgroundColor: "#fb8c00", // Slightly darker on hover
  },
});

function DashboardMyDeviceCard() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          borderRadius: "10px",
          boxShadow: 3,
          padding: "1rem 1rem ",
          marginRight: 2,
        }}
      >
        {/* Header Section */}
        <Box display="flex" alignItems="center">
          {/* <IconBox>
            <Typography>📟</Typography>
          </IconBox> */}

          <Box sx={maintenanceSchedulingStyles.boxContainer}>
            <img src={MyDeviceLogo} height={"24px"} width={"24px"} />
          </Box>
          <Box ml={2}>
            <Typography variant="h6" fontWeight="bold">
              My Device
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="textSecondary">
                Active Now
              </Typography>
              <StatusDot />
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* Data Section */}
        <Box mt={2}>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              ID
            </Typography>
            <Typography variant="body2">001</Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Passcode
            </Typography>
            <Typography variant="body2">1234abcd!</Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Assigned Vehicle
            </Typography>
            <Typography variant="body2">Vehicle 101</Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Location
            </Typography>
            <Typography variant="body2">New York, NY</Typography>
          </DataItem>
          <Divider sx={{ my: 1 }} />
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Name / Model
            </Typography>
            <Typography variant="body2">GPS Tracker A</Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Battery Level
            </Typography>
            <Typography variant="body2">85%</Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Signal Strength
            </Typography>
            <Typography variant="body2" color="success.main">
              Good
            </Typography>
          </DataItem>
          <DataItem>
            <Typography variant="body2" color="textSecondary">
              Last Active
            </Typography>
            <Typography variant="body2">2024-01-10, 11:00</Typography>
          </DataItem>
        </Box>

        {/* Request Button */}
        <RequestButton fullWidth variant="contained" onClick={handleOpenPopup}>
          Request to Admin
        </RequestButton>
      </Card>

      {/* Modal for Help Request */}
      <Dialog open={isPopupOpen} onClose={handleClosePopup}>
        <DialogTitle>Help Center</DialogTitle>
        <DialogContent>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: "#ff9800", // Set the outline color
              color: "#ff9800", // Set the text color
              "&:hover": {
                borderColor: "#fb8c00", // Darker orange on hover
                color: "#fb8c00", // Darker orange text on hover
              },
            }}
          >
            How do I reset the device?
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: "#ff9800", // Set the outline color
              color: "#ff9800", // Set the text color
              "&:hover": {
                borderColor: "#fb8c00", // Darker orange on hover
                color: "#fb8c00", // Darker orange text on hover
              },
            }}
          >
            How can I update the passcode?
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              borderColor: "#ff9800", // Set the outline color
              color: "#ff9800", // Set the text color
              "&:hover": {
                borderColor: "#fb8c00", // Darker orange on hover
                color: "#fb8c00", // Darker orange text on hover
              },
            }}
          >
            Why is my device showing low signal strength?
          </Button>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Or type your question below..."
            multiline
            rows={4}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="secondary">
            Cancel
          </Button>
          {/* <Button variant="contained" color="ff9800">Send</Button> */}
          <SendButton variant="contained">Send</SendButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DashboardMyDeviceCard;
