import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import styles from "./MyCalendar.module.css"; // Ensure the styles are being imported
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Modal,
  PopoverPaper
} from "@mui/material";
import Right from "../../assets/calander/right.png";
import Left from "../../assets/calander/left.png";
import SearchIcon from "@mui/icons-material/Search";
import { ChevronRight, FormatListBulleted } from "@mui/icons-material";

const localizer = momentLocalizer(moment);

function CustomToolbar(props) {
  const [selectedView, setSelectedView] = useState("week");

  const handleViewChange = (view) => {
    setSelectedView(view);
    props.onView(view);
  };

  const getButtonStyles = (view) => ({
    width: "70px",
    height: "28px",
    backgroundColor: selectedView === view ? "#F38712" : "#F4F4F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
    margin: "0 2px"
  });

  const getTextStyles = (view) => ({
    fontWeight: 500,
    fontSize: "12px",
    color: selectedView === view ? "#FFFFFF" : "#71717A",
    fontFamily: "Inter"
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        p: 2,
        flexWrap: "wrap"
      }}
    >
      {/* Left Side: Today, Back, and Next buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: { lg: "250px", xs: "300px" },
          marginBottom: { xs: 2, sm: 0 }
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
          flexWrap: "wrap"
        }}
      >
        {["day", "week", "month"].map((view) => (
          <Box
            key={view}
            sx={getButtonStyles(view)}
            onClick={() => handleViewChange(view)}
          >
            <Typography sx={getTextStyles(view)}>
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right Side: Search field */}

      <Box
        sx={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
          flexWrap: "wrap",

          mt: { xs: 2, lg: 0 }
        }}
      >
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
            )
          }}
          sx={{
            "& .MuiInputBase-root": {
              height: "44px",
              width: { xs: "100%", sm: "200px" },
              justifyContent: "center"
            }
          }}
        />
      </Box>
    </Box>
  );
}

function MyCalendar() {
  const myEventsList = [
    {
      start: moment().day(1).startOf("day").add(8, "hours").toDate(),
      end: moment().day(1).startOf("day").add(9, "hours").toDate(),
      title: "Oil Change",
      eventType: "Scheduled",
      backgroundColor: "#FFB6C1", // Light pink
      mainColor: "#D5006D" // Dark pink
    },
    {
      start: moment().day(2).startOf("day").add(10, "hours").toDate(),
      end: moment().day(2).startOf("day").add(11, "hours").toDate(),
      title: "Team Meeting",
      eventType: "Meeting",
      backgroundColor: "#ADD8E6", // Light blue
      mainColor: "#0000FF" // Blue
    },
    {
      start: moment().day(3).startOf("day").add(12, "hours").toDate(),
      end: moment().day(3).startOf("day").add(13, "hours").toDate(),
      title: "Project Deadline",
      eventType: "Deadline",
      backgroundColor: "#90EE90", // Light green
      mainColor: "#006400" // Dark green
    },
    {
      start: moment().day(4).startOf("day").add(14, "hours").toDate(),
      end: moment().day(4).startOf("day").add(15, "hours").toDate(),
      title: "Lunch with Client",
      eventType: "Meeting",
      backgroundColor: "#FFFFE0", // Light yellow
      mainColor: "#FFD700" // Gold
    },
    {
      start: moment().day(5).startOf("day").add(16, "hours").toDate(),
      end: moment().day(5).startOf("day").add(17, "hours").toDate(),
      title: "Conference Call",
      eventType: "Call",
      backgroundColor: "#E6E6FA", // Lavender
      mainColor: "#6A5ACD" // Slate blue
    },
    {
      start: moment().day(6).startOf("day").add(9, "hours").toDate(),
      end: moment().day(6).startOf("day").add(10, "hours").toDate(),
      title: "Website Launch",
      eventType: "Launch",
      backgroundColor: "#FFE4E1", // Misty rose
      mainColor: "#FF69B4" // Hot pink
    },
    {
      start: moment().day(7).startOf("day").add(11, "hours").toDate(),
      end: moment().day(7).startOf("day").add(12, "hours").toDate(),
      title: "Team Outing",
      eventType: "Event",
      backgroundColor: "#FFDAB9", // Peach puff
      mainColor: "#FF4500" // Orange red
    }
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function eventStyleGetter(event) {
    return {
      style: {
        backgroundColor: event.backgroundColor || "#D9EAD3",
        borderRadius: "5px",
        color: "black",
        
        display: "flex",
        alignItems: "center",
        padding: "5px",
        border: "none",
        marginLeft: "5px",
        height: "40px",
        cursor: "pointer"
      }
    };
  }

  function EventComponent({ event }) {
    return (
      <div
        onClick={() => {
          setSelectedEvent(event);
          setOpenModal(true);
        }}
        style={{
          backgroundColor: event.backgroundColor,
          borderRadius: "5px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          marginLeft:"30px",
          cursor: "pointer", // Make boxes clickable
          color: event.mainColor,
          fontSize: "14px"
        }}
      >
        {" "}
        <spam display={{ xs: "none" }}>{event.title} </spam>
        {/* Text is removed for mobile view */}
        <Typography
          sx={{
            display: { xs: "none" } // Hide text for calendar view in mobile
          }}
        >
          {event.title}
        </Typography>
      </div>
    );
  }

  const handleClose = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.WEEK} // Set default view to week
        style={{
          height: isMobile ? "50vh" : "100vh",
          minHeight: "400px" // Ensure minimum height
        }}
        components={{
          toolbar: CustomToolbar,
          event: EventComponent
        }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          setOpenModal(true);
        }}
        eventPropGetter={eventStyleGetter}
      />

      {/* List of Events */}
      {isMobile && (
        <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
          {myEventsList.map((event, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: event.backgroundColor,
                borderRadius: "5px",
                marginBottom: 1,
                padding: 2,
                color: event.mainColor,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px"
              }}
              onClick={() => {
                setSelectedEvent(event);
                setOpenModal(true);
              }}
            >
              {event.title}
            </Box>
          ))}
        </Box>
      )}

      {openModal && (
        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { lg: 300, xs: 230 },
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4
            }}
          >
            <Typography variant="h6" component="h2">
              {selectedEvent?.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Event Type: {selectedEvent?.eventType}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Start:{" "}
              {moment(selectedEvent?.start).format("MMMM Do YYYY, h:mm a")}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              End: {moment(selectedEvent?.end).format("MMMM Do YYYY, h:mm a")}
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default MyCalendar;
