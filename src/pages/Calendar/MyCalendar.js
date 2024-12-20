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
  PopoverPaper,
  Button,
} from "@mui/material";
import Right from "../../assets/calander/right.png";
import Left from "../../assets/calander/left.png";
import SearchIcon from "@mui/icons-material/Search";
import {
  AddAPhoto,
  AddIcCallOutlined,
  AddReaction,
  AddTask,
  ChevronRight,
  FormatListBulleted,
} from "@mui/icons-material";

import {
  useAddMaintainanceMutation,
  useGetMaintainanceDashboardQuery,
} from "../../Api/apiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";

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
    margin: "0 2px",
  });

  const getTextStyles = (view) => ({
    fontWeight: 500,
    fontSize: "12px",
    color: selectedView === view ? "#FFFFFF" : "#71717A",
    fontFamily: "Inter",
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("add-maintenence");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        p: 2,
        flexWrap: "wrap",
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
          marginBottom: { xs: 2, sm: 0 },
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
          flexWrap: "wrap",
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

      <Box
        sx={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
          flexWrap: "wrap",
          mt: { xs: 2, lg: 0 },
        }}
      >
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#15294E", // Themed blue color
            color: "#fff", // White text color
            textTransform: "none", // Prevent uppercase transformation
            "&:hover": {
              backgroundColor: "#16383E", // Slightly darker blue on hover
            },
            height: "44px",
            width: { xs: "100%", sm: "200px" }, // Adjust size responsively
          }}
          onClick={handleNavigate}
          startIcon={<AddTask />} // Add icon at the start of the button
        >
          Add Schedule
        </Button>
      </Box>
    </Box>
  );
}

function MyCalendar(selectedOption, setSelectedOption) {
  const { data, error, isLoading } = useGetMaintainanceDashboardQuery();

  console.log("select option for !!~~{{~~ ", selectedOption);
  // Define a list of colors
  const colors = [
    "#FFB6C1",
    "#ADD8E6",
    "#90EE90",
    "#FFD700",
    "#FFA07A",
    "#D8BFD8",
    "#FF4500",
    "#6495ED",
    "#20B2AA",
    "#7FFF00",
  ];

  // Helper function to get a unique color
  const getColor = (index) => colors[index % colors.length];

  // Dynamic selection
  // const isSelected = "devices"; // Change to "vehicles" or "devices" as needed

  const isSelected = selectedOption.selectedOption; // Change to "vehicles" or "devices" as needed

  // Extract events from API data based on isSelected
  const myEventsList =
    isSelected === "vehicles"
      ? data?.vehicles?.flatMap((vehicle, vehicleIndex) =>
          vehicle.Maintenances.map((maintenance) => ({
            start: new Date(maintenance.startDate),
            end: new Date(maintenance.endDate),
            title: `${vehicle.vehicleType} - ${maintenance.maintenanceType}`,
            eventType: "Maintenance",
            backgroundColor: getColor(vehicleIndex),
            mainColor: getColor(vehicleIndex),
          })),
        ) || []
      : data?.devices?.flatMap((device, deviceIndex) =>
          device.DeviceMaintenances.map((maintenance) => ({
            start: new Date(maintenance.startDate),
            end: new Date(maintenance.endDate),
            title: `${device.deviceType} - ${maintenance.maintenanceType}`,
            eventType: "Device Maintenance",
            backgroundColor: getColor(deviceIndex),
            mainColor: getColor(deviceIndex),
          })),
        ) || [];

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
        justifyContent: "center",
        padding: "5px",
        border: "none",
        marginLeft: "5px",
        height: "40px",
        width: "100%",
        cursor: "pointer",
        fontSize: isMobile ? "12px" : "14px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
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
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
          marginLeft: "5px",
          cursor: "pointer",
          color: "black",
          fontSize: isMobile ? "12px" : "14px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: "100%",
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.WEEK}
        style={{
          height: isMobile ? "50vh" : "100vh",
          minHeight: "400px",
        }}
        components={{
          toolbar: CustomToolbar,
          event: EventComponent,
        }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          setOpenModal(true);
        }}
        eventPropGetter={eventStyleGetter}
      />

      {isMobile && (
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1, // Add space between boxes
          }}
        >
          {myEventsList.map((event, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: event.backgroundColor,
                borderRadius: "5px",
                padding: 1,
                color: "black",
                fontWeight: 600,
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                textAlign: "center",
                overflow: "hidden",
              }}
              onClick={() => {
                setSelectedEvent(event);
                setOpenModal(true);
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {event.title}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "10px" }}>
                {moment(event.start).format("MMM DD")} -{" "}
                {moment(event.end).format("MMM DD")}
              </Typography>
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
              p: 4,
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
