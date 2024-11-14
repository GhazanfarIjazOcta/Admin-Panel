import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

const StatusNotifier = styled(Box)(({ status }) => ({
  backgroundColor: status === "Running" ? "#4caf50" : "#f44336", // Green for success, Red for error
  color: "white",
  padding: "5px 15px",
  borderRadius: "20px",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  minWidth: "100px",
}));

// StyledCard without theme provider
const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Hardcoded shadow
  backgroundColor: "#ffffff",
  width: "100%",
  maxWidth: "400px",
  height: "100%",
  maxHeight: "60px",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

// Styled Components
// const StyledCard = styled(Card)({
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#ffffff',
//     width: '100%',
//     maxWidth: '350px',
// });

function DashboardDeviceStatus() {
  const [status, setStatus] = useState("Running"); // Default status is "Running"

  const handleSuccessClick = () => {
    setStatus("Running");
  };

  const handleErrorClick = () => {
    setStatus("Stopped");
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: 3,
        padding: "1rem 1rem",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h7">Device</Typography>
        <StatusNotifier status={status} height={"15px"}>
          {status}
        </StatusNotifier>
      </Box>

      <ButtonContainer width={"auto"} height={"auto"}>
        <Button
          variant="contained"
          color="success"
          onClick={handleSuccessClick}
          sx={{ flex: 1, mr: 2, height: "25px" }}
        >
          Start
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleErrorClick}
          sx={{ flex: 1, height: "25px" }}
        >
          Stop
        </Button>
      </ButtonContainer>
    </Card>
  );
}

export default DashboardDeviceStatus;
