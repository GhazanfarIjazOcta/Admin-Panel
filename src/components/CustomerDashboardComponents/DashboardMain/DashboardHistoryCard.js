import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  IconButton,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Calendar icon

function DashboardHistoryCard() {
  const [selected, setSelected] = useState("Today"); // Track the selected button

  const logs = [
    {
      id: 1,
      date: "2024-03-18",
      startTime: "12:00 PM",
      stopTime: "12:00 PM",
      duration: "4 hr: 34 min",
    },
    {
      id: 2,
      date: "2024-03-18",
      startTime: "12:00 PM",
      stopTime: "12:00 PM",
      duration: "4 hr: 34 min",
    },
  ];

  return (
    <Card sx={{ padding: "16px", borderRadius: "12px", boxShadow: 3, mt: 0 }}>
      <CardHeader
        title={
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "1.25rem", // Mobile view
                sm: "1.5rem", // Tablet view
                md: "1.75rem", // Laptop view
                lg: "2rem", // Desktop view
              },
            }}
          >
            History
          </Typography>
        }
        action={
          <Box display="flex" justifyContent="flex-end">
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ border: "1px  #ff9800" }}
            >
              <Button
                onClick={() => setSelected("Today")}
                sx={{
                  fontSize: {
                    xs: "0.7rem", // Mobile view
                    sm: "0.8rem", // Tablet view
                    md: "0.9rem", // Laptop view
                  },
                  padding: {
                    xs: "5px 10px", // Mobile view
                    sm: "6px 12px", // Tablet view
                    md: "8px 16px", // Laptop view
                  },
                  color: selected === "Today" ? "#ff9800" : "inherit",
                  borderColor: "#ff9800",
                  "&:hover": {
                    backgroundColor:
                      selected === "Today"
                        ? "transparent"
                        : "rgba(255, 152, 0, 0.1)",
                  },
                }}
              >
                Today
              </Button>
              <Button
                onClick={() => setSelected("Last Week")}
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                  },
                  padding: {
                    xs: "4px 9px",
                    sm: "6px 12px",
                    md: "8px 16px",
                  },
                  color: selected === "Last Week" ? "#ff9800" : "inherit",
                  borderColor: "#ff9800",
                  "&:hover": {
                    backgroundColor:
                      selected === "Last Week"
                        ? "transparent"
                        : "rgba(255, 152, 0, 0.1)",
                  },
                }}
              >
                Last Week
              </Button>
              <Button
                onClick={() => setSelected("Last Month")}
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "0.9rem",
                  },
                  padding: {
                    xs: "4px 9px",
                    sm: "6px 12px",
                    md: "8px 16px",
                  },
                  color: selected === "Last Month" ? "#ff9800" : "inherit",
                  borderColor: "#ff9800",
                  "&:hover": {
                    backgroundColor:
                      selected === "Last Month"
                        ? "transparent"
                        : "rgba(255, 152, 0, 0.1)",
                  },
                }}
              >
                Last Month
              </Button>
            </ButtonGroup>
          </Box>
        }
        sx={{ paddingBottom: 2 }}
      />

      <Divider sx={{ marginBottom: "16px" }} />

      <Grid container spacing={2}>
        {logs.map((log) => (
          <Grid item xs={12} md={6} key={log.id}>
            <Card sx={{ padding: "16px", borderRadius: "8px", boxShadow: 2 }}>
              <Typography variant="h6">Engine Logs</Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  <CalendarTodayIcon fontSize="small" /> {log.date}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  Start: {log.startTime}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Stop: {log.stopTime}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Duration: {log.duration}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default DashboardHistoryCard;
