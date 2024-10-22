import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import styles from "./MyCalendar.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Right from "../../assets/calander/right.png";
import Left from "../../assets/calander/left.png";
import { textFieldContainerStyle } from "../../components/UI/styles/Layout";
import SearchIcon from "@mui/icons-material/Search";
import blueEventIcon from "../../assets/calander/blueEventIcon.png";
import greenEventIcon from "../../assets/calander/greenEventIcon.png";
import orangeEvantIcon from "../../assets/calander/orangeEvantIcon.png";
import purpleEventIcon from "../../assets/calander/purpleEventIcon.png";
import redEventIcon from "../../assets/calander/redEventIcon.png";
const localizer = momentLocalizer(moment);
// const EmptyGutter = () => <div style={{ display: "none" }} />;
function CustomToolbar(props) {
  const [selectedView, setSelectedView] = useState("week"); // Initialize state

  const handleViewChange = (view) => {
    setSelectedView(view);
    props.onView(view); // Notify parent of view change
  };

  const getButtonStyles = (view) => ({
    width: "58px",
    height: "28px",
    backgroundColor: selectedView === view ? "#F38712" : "#F4F4F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
  });

  const getTextStyles = (view) => ({
    fontWeight: 500,
    fontSize: "12px",
    color: selectedView === view ? "#FFFFFF" : "#71717A",
    fontFamily: "Inter",
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        
      }}
      p={4}
    >
      {/* Left Side: Today, Back, and Next buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "125px",
          height: "28px",
          backgroundColor: "#F4F4F5",
          justifyContent: "space-between",
          borderRadius: "20px",
        }}
      >
        <img
          src={Left}
          width={"28px"}
          height={"28px"}
          onClick={() => props.onNavigate("PREV")}
          style={{ cursor: "pointer" }}
        />
        <Typography
          fontWeight={400}
          fontSize={"12px"}
          sx={{ color: "#18181B", cursor: "pointer" }}
          fontFamily={"Inter"}
          onClick={() => props.onNavigate("TODAY")}
        >
          Today
        </Typography>
        <img
          src={Right}
          width={"28px"}
          height={"28px"}
          onClick={() => props.onNavigate("NEXT")}
          style={{ cursor: "pointer" }}
        />
      </Box>

      {/* Center: View buttons */}

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={getButtonStyles("day")}
          onClick={() => handleViewChange("day")}
        >
          <Typography sx={getTextStyles("day")}>Day</Typography>
        </Box>
        <Box
          sx={getButtonStyles("week")}
          onClick={() => handleViewChange("week")}
        >
          <Typography sx={getTextStyles("week")}>Week</Typography>
        </Box>
        <Box
          sx={getButtonStyles("month")}
          onClick={() => handleViewChange("month")}
        >
          <Typography sx={getTextStyles("month")}>Month</Typography>
        </Box>
      </Box>
      {/* Right Side: Search field */}
      <div>
        <Box sx={textFieldContainerStyle}>
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginRight: 0 }}>
                  <IconButton sx={{ padding: 0 }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: "44px", // Adjust the height as needed
                width: { xs: "100%", sm: "296px" }, // Responsive width
              },
            }}
          />
        </Box>
      </div>
    </Box>
  );
}

function MyCalendar() {
  const myEventsList = [
    {
      start: moment().day(1).startOf("day").add(8, "hours").toDate(), // Monday 8 AM
      end: moment().day(1).startOf("day").add(9, "hours").toDate(), // Assuming 1 hour duration
      title: "Oil Change",
      eventType: "scheduled",
      icon: blueEventIcon, // Optional: You can use an icon if needed
      backgroundColor: "#E7F6FD", // Custom background color
      mainColor: "#0369A1",
    },
    {
      start: moment().day(3).startOf("day").add(8, "hours").toDate(), // Wednesday 8 AM
      end: moment().day(3).startOf("day").add(9, "hours").toDate(), // Assuming 1 hour duration
      title: "Tire Rotation",
      eventType: "completed",
      icon: greenEventIcon, // Optional: You can use an icon if needed
      backgroundColor: "#E8F8F3", // Custom background color
      mainColor: "#047857",
    },
    {
      start: moment().day(2).startOf("day").add(11, "hours").toDate(), // Tuesday 11 AM
      end: moment().day(2).startOf("day").add(12, "hours").toDate(), // Assuming 1 hour duration
      title: "Engine Repair",
      eventType: "urgent Maintenance",
      icon: redEventIcon, // Optional: You can use an icon if needed
      backgroundColor: "#FFE4E6", // Custom background color
      mainColor: "#BE123C",
    },
    {
      start: moment().day(5).startOf("day").add(10, "hours").toDate(), // Friday 10 AM
      end: moment().day(5).startOf("day").add(11, "hours").toDate(), // Assuming 1 hour duration
      title: "Brake Replacement",
      eventType: "Routine Inspection",
      icon: purpleEventIcon, // Optional: You can use an icon if needed
      backgroundColor: "#F4EFFF", // Custom background color
      mainColor: "#6D28D9",
    },
    {
      start: moment().day(1).startOf("day").add(14, "hours").toDate(), // Monday 2 PM
      end: moment().day(1).startOf("day").add(15, "hours").toDate(), // Assuming 1 hour duration
      title: "Safety Inspection",
      eventType: "pending Approval",
      icon: orangeEvantIcon, // Optional: You can use an icon if needed
      backgroundColor: "#FEF6E7", // Custom background color
      mainColor: "#D0905C",
    },
  ];

  function eventStyleGetter(event) {
    let backgroundColor = event.backgroundColor || "#D9EAD3"; // Default color if not specified

    return {
      style: {
        backgroundColor: backgroundColor,
        borderRadius: "5px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        border: "none",
        marginLeft: "5px",
        width: "90px", // Adjust the width as needed
        whiteSpace: "nowrap", // Prevent text from wrapping
      },
    };
  }

  function EventComponent({ event }) {
    const { start, icon } = event;

    // Format the start time as needed
    const startTime = moment(start).format("HH:mm");

    return (
      <>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            marginBottom: "2px",
            backgroundColor: event.backgroundColor,
            height: "100%",
            width: "100%",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            gap: "0px",
            // color: "#fff",
            //   padding: "5px",
            border: "none", // Ensure no border is applied
            fontSize: "12px", // Adjust font size if needed
            position: "absolute",
            top: "2px",
            left: "12px",
            marginBottom: "2px",
          }}
        >
          <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <span
              style={{
                fontSize: "16px",
                color: event.mainColor,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                margin: "none",
                padding: "none",
              }}
            >
              {startTime}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: event.mainColor,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                margin: "none",
                padding: "none",
                // marginLeft: "5px",
              }}
            >
              AM
            </span>
            <span>
              <img src={event.icon} height={"12px"} width={"12px"} />
            </span>
          </span>
          <Typography
            sx={{
              fontSize: "1.2em",
              color: event.mainColor,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              style: "italic",
            }}
          >
            {event.eventType}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3em",
              color: event.mainColor,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {event.title}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "2px",
            left: "0px",
            marginBottom: "2px",
            backgroundColor: event.mainColor,
            height: "100%",
            width: "4px",
          }}
        ></Box>
        {/* <Box
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            marginBottom: "2px",
            backgroundColor: "white",
            height: "100%",
            width: "50px",
            borderBottom: "1px solid #E0E0E0",
          }}
        ></Box> */}
      </>
    );
  }

  return (
    <div style={{ width: "100%", height: "850px", overflow: "hidden" }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{
          width: "100%",
          height: "100%",
          border: "none", // Remove the border around the calendar
        }}
        defaultView={Views.WEEK}
        views={["week", "day", "month"]}
        step={30}
        timeslots={2}
        min={new Date(2024, 7, 12, 7, 0)} // Start time at 7 AM
        max={new Date(2024, 7, 12, 17, 0)} // End time at 5 PM
        components={{
          toolbar: CustomToolbar, // Use the custom toolbar
          event: EventComponent, // Use custom event component
          // timeGutterHeader: EmptyGutter, // Hide time gutter header
          // timeGutter: EmptyGutter, // Hide time gutter
        }}
        eventPropGetter={eventStyleGetter} // Apply custom styles
        dayPropGetter={(date) => ({
          style: {
            backgroundcolor:
              date.getDay() === 0 || date.getDay() === 6
                ? "#F7F7F7"
                : "white" && date.getDay() === 4
                ? "#FFF2E3"
                : "white", // Example: Different background color for Sundays
            borderBottom: "none", // Remove bottom border
            borderLeft: "none", // Remove left border
            borderTop: "none", // Remove top border
          },
        })}
        timeSlotWrapper={({ children }) =>
          React.cloneElement(children, {
            style: {
              borderTop: "none", // Remove top border
              borderLeft: "none", // Remove left border
              borderBottom: "none", // Remove bottom border
            },
          })
        }
      />
    </div>
  );
}

export default MyCalendar;
