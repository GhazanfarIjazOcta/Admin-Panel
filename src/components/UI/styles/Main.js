export const dashboardStyles = {
  headerText: { color: "#14181F" },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  leftcontainer: {
    width: "74%",
    // height: "80vh",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // backgroundColor: "blue",
  },
  barchartStyles: {
    width: "100%%",
    height: "36vh",
  },
  DashboardTableHeaderStyles: {
    width: "100%",
    height: "30vh",
    // backgroundColor: "yellow",
  },
  rightcontainer: {
    width: "25%",

    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  DashboardMaintenanceCardStyles: {
    width: "100%",
    height: "30vh",
  },
  DashboardLocationCardStyles: {
    width: "100%",
    height: "36vh",
    // backgroundColor: "red",
  },
};

export const addUserStyles = {
  mainContainerStyles: {
    // boxShadow: "none",
    // height: "86%",
    // width: "100%",
    // marginTop: "1%",
    flexGrow: 1,
    position: "absolute",
    width: "82%",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically

    position: "absolute",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 0, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically
    width: { lg: "82%", xs: "88%" }, // Ensure it takes full width
    // maxWidth: "1200px", // Set a max width as needed
    py: 1,
  },
  container: {
    height: "95%",
    width: "92%",
    padding: "2",
  },
  textFieldStyles: { width: { lg: "100%", xs: "90%" }, marginLeft: "0px" },
  buttonStyles: {
    marginRight: "opx",
    marginLeft: {xs:"0px", sm:"0px" , lg:"0px"},
    width: "161px",
    height: "43px",
    backgroundColor: "#15294E",
    color: "white",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#15294E",
      border: "1px solid #15294E",
    },
    border: "1px solid #15294E",
  },
};

export const addVehicleStyles = {
  mainContainer: {
    // boxShadow: "none",
    // height: "86%",
    // width: "100%",
    // marginTop: "1%",
    position: "absolute",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically
    width: { lg: "82%", xs: "87%" }, // Ensure it takes full width
    // maxWidth: "1200px", // Set a max width as needed
  },
  container: {
    height: "95%",
    width: "95%",
  },
  leftTextField: { width: "100%", marginLeft: "5px" },
  rightTextField: { width: "100%", marginLeft: "5px" },
  uploadImage: {
    width: "70%",
    height: "140px",
    border: "1px dashed #B7B7B7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    fontWeight: 600,
    color: "#494949",
    fontSize: "12px",
    fontStyle: "Inter",
  },
  secondaryText: {
    fontWeight: 400,
    color: "#4949494D",
    fontSize: "12px",
    fontStyle: "Inter",
  },
  label: { fontWeight: 500 },
  button: {
    marginRight: "opx",
    marginLeft: {xs:"0px", sm:"0px" , lg:"0px" },
    width: "161px",
    height: "43px",
    backgroundColor: "#15294E",
    color: "white",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#15294E",
      border: "1px solid #15294E",
    },
    border: "1px solid #15294E",
  },
};

export const addDeviceStyles = {
  mainContainer: {
    // boxShadow: "none",
    // height: "86%",
    // width: "100%",
    // marginTop: "1%",
    position: "absolute",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically
    width: { lg: "82%", xs: "85%" }, // Ensure it takes full width
    // maxWidth: "1200px", // Set a max width as needed
  },
  container: {
    height: "95%",
    width: "95%",
  },
  label: { fontWeight: 500 },
  textField: { width: { lg: "36%", xs: "90%" }, marginLeft: "5px" },
  button: {
    marginRight: "opx",
    marginLeft:  {xs:"0px", sm:"0px" , lg:"0px" },
    width: "161px",
    height: "43px",
    backgroundColor: "#15294E",
    color: "white",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#15294E",
      border: "1px solid #15294E",
    },
    border: "1px solid #15294E",
  },
};

export const addDriverStyles = {
  mainContainer: {
    // boxShadow: "none",
    // height: "86%",
    // width: "100%",
    // marginTop: "1%",
    position: "absolute",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 1, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 1, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically
    width: { lg: "82%", xs: "80%" }, // Ensure it takes full width
    // maxWidth: "1200px", // Set a max width as needed
  },
  container: {
    height: "95%",
    width: "95%",
  },
  label: { fontWeight: 500 },
  textField: { width: { lg: "36%", xs: "90%" }, marginLeft: "5px" },
  button: {
    marginRight: "opx",
    marginLeft: "0px",
    width: "161px",
    height: "43px",
    backgroundColor: "#15294E",
    color: "white",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#15294E",
      border: "1px solid #15294E",
    },
    border: "1px solid #15294E",
  },
};

export const addTripStyles = {
  mainContainer: {
    // boxShadow: "none",
    // height: "86%",
    // width: "100%",
    // marginTop: "7%",
    position: "absolute",
    mt: { xs: 13, sm: 12, md: 12, lg: 12 },
    // Adjust padding based on the screen size
    px: { xs: 1, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
    ml: { xs: 1, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
    overflow: "none", // Prevent overflowing horizontally and vertically
    width: { lg: "82%", xs: "85%" }, // Ensure it takes full width
    // maxWidth: "1200px", // Set a max width as needed
  },
  container: {
    height: "95%",
    width: "95%",
  },
  label: { fontWeight: 500 },
  textField: { width: { lg: "36%", xs: "90%" }, marginLeft: "5px" },
  button: {
    marginRight: "opx",
    marginLeft: "0px",
    width: "161px",
    height: "43px",
    backgroundColor: "#15294E",
    color: "white",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "&:hover": {
      backgroundColor: "#15294E",
      border: "1px solid #15294E",
    },
    border: "1px solid #15294E",
  },
};

export const maintenanceSchedulingStyles = {
  headerMainContainer: { boxShadow: "none" },
  boxContainer: {
    width: "44px",
    height: "40px",
    backgroundColor: "#FFF4F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
  },
  mainenanceText: {
    fontSize: "16px",
    color: "#5A607F",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },
  mainenanceText2: {
    fontSize: "24px",
    color: "#2A3547",
    fontWeight: 600,
    fontFamily: "Plus Jakarta Sans, sans-serif",
  },
  vehicalText: {
    fontSize: "12px",
    color: "#64748B",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },
  historyText: {
    fontSize: "16px",
    color: "#F38712",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
  },
};

export const historyStyles = {
  mainContainer: { height: "77%", width: { lg: "100%", xs: "auto" } },
  container: { width: "100%", height: "100%" },
  paperContainer: { boxShadow: "none", width: "100%", height: "100%" },
  boxContainer: {
    width: { lg: "310px", xs: "auto" },
    height: "128px",
    backgroundColor: "#F4EFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  time: {
    fontWeight: 500,
    color: "#6D28D9",
    fontSize: "12px",
  },
  date: {
    fontWeight: 500,
    color: "#6D28D9",
    fontSize: "12px",
  },
  driverText: {
    fontWeight: 400,
    color: "#6D28D9",
    fontSize: "10px",
  },
  secondBox: {
    width: { lg: "310px", xs: "auto" },
    height: "128px",
    backgroundColor: "#D4F2E8",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  secondDate: {
    fontWeight: 500,
    color: "#047857",
    fontSize: "12px",
  },
  middleText: {
    fontWeight: 400,
    color: "#6D28D9",
    fontSize: "10px",
  },
  secondMiddleText: {
    fontWeight: 400,
    color: "#047857",
    fontSize: "10px",
  },
  secondDriver: {
    fontWeight: 400,
    color: "#047857",
    fontSize: "10px",
  },
  endText: {
    fontWeight: 500,
    color: "#047857",
    fontSize: "12px",
  },
  endright: {
    fontWeight: 400,
    color: "#047857",
    fontSize: "10px",
  },
  endRightBottom: {
    fontWeight: 500,
    color: "#047857",
    fontSize: "12px",
  },
  secondTime: {
    fontWeight: 500,
    color: "#047857",
    fontSize: "12px",
  },
};

export const fuelManagmentStyles = {
  mainContainer: { flexGrow: 1 },
  topContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "29%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  rightContainer: { width: "70%" },
  rightContainerPaper: { boxShadow: "none", elevation: "none" },
  arrow: { position: "relative", top: "20px", right: "30px" },
  arrowText: {
    fontSize: "12px",
    color: "#BEC0CA",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },
};
export const settingStyles = {
  mainContainer: {
    // boxShadow: "none",
    height: "84%",
    marginTop: "6rem",
    flexGrow: 1,
    position: "absolute",
    // mt: { xs: 6, sm: 6, md: 6, lg: 6 },
    overflowY: "none",
    // height: "85vh",
    // background: "#F4F7F7",
    // gap: "0.5rem",
    width: { lg: "82%", xs: "100%" }, // Prevent overflowing horizontally and vertically
  },
  header: { height: "100%", width: "100%", overflowY: "auto" },

  profilePaper: {
    boxShadow: "none",
    height: "88%",
    width: { lg: "100%", xs: "100%" }, // Prevent overflowing horizontally and vertically
    overflowY: "auto",
    mb: 2,
  },
  profileContainer: {
    height: "95%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: { lg: "95%", xs: "100%" }, // Prevent overflowing horizontally and vertically
  },
  profileTextField: { width: { lg: "35%", xs: "100%" }, marginLeft: "5px" },
  profileLabel: { fontWeight: { lg: 500, xs: 200 } },
  addPhoto: {
    width: "110px",
    height: "44px",
    backgroundColor: "#F4F4F4",
    borderRadius: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "24px",

    paddingLeft: {
      xs: "40px", // Padding for extra-small devices
      lg: "40px", // Padding for large devices
    },
  },
  resetButtomn: {
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
  },
  updateButton: {
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
  },
  changePasswordPaper: {
    boxShadow: "none",
    height: "88%",
    width: { lg: "100%", xs: "100%" }, // Prevent overflowing horizontally and vertically
    overflowY: "auto",
    mb: 2,
  },
  changePasswordContainer: {
    height: "95%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: { lg: "95%", xs: "100%" }, // Prevent overflowing horizontally and vertically
  },
  textFieldBox: { width: { lg: "35%", xs: "100%" } },
  contactUsPaper: {
    boxShadow: "none",
    height: "100%",
    width: "100%",

    height: "88%",

    mb: 2,
  },
  contactUsBox: {
    height: "95%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: { lg: "95%", xs: "100%" }, // Prevent overflowing horizontally and vertically
  },
  contactUsContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: {
      xs: "column", // Stack vertically for mobile view
      lg: "row", // Side by side for large screens
    },
    gap: { xs: 0, lg: 0 }, // Add spacing between elements in mobile view
  },
  contactUsBoxWidth: {
    width: {
      xs: "70%", // Full width in mobile view
      lg: "50%", // Half width in large screens
    },

    direction: "row",
  },
  conatactUsLeftLabel: {
    fontSize: "36px",
    color: "#383C3E",
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
  },
  conatactUsLeftbottomLabel: {
    fontSize: "14px",
    color: "#737B7D",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
  },
  conatactUsTextField: {
    width: { lg: "80%", xs: "120%" },
    marginLeft: "5px",
    marginTop: "4px",
  },
  conatactUsTextFieldMessage: {
    width: { lg: "80%", xs: "120%" },
    marginLeft: "5px",
    height: "100%",
    marginTop: "4px",
  },
  contactUsContactBox: {
    width: { lg: "196px", xs: "320%" },
    height: "126px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    boxShadow: "none",
    border: "1px solid #F2F2F2",
  },
  contactUsCallLabel: {
    fontWeight: 500,
    color: "#F38712",
    fontSize: "16px",
  },
  contactUsPhone: {
    fontWeight: 400,
    color: "#717171",
    fontSize: "14px",
  },
  contactUsButtonContainer: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "flex-start",

    ml: { lg: 120, xs: 2 },
  },
  contactUsButton: {
    // marginRight: "opx",
    // marginLeft: "70%",
    // paddingleft: "200px",
    marginBottom: "20px",
    width: { lg: "247px", xs: "500%" },
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
  },
  policyPaper: {
    boxShadow: "none",
    height: "88%",
    width: { lg: "100%", xs: "100%" }, // Prevent overflowing horizontally and vertically
    overflowY: "auto",
    mb: 2,
  },
  policyBox: {
    height: "95%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: { lg: "95%", xs: "100%" }, // Prevent overflowing horizontally and vertically
  },
  policyEdit: { display: "flex", justifyContent: "flex-end" },
  policyButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "24px",
    paddingLeft: {
      xs: "40px", // Padding for extra-small devices
      lg: "40px", // Padding for large devices
    },
  },
  policyDisagree: {
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
  },
  policyAcceptAll: {
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
  },
  termsPaper: {
    boxShadow: "none",
    height: "88%",
    width: "100%",
  },
  termsBox: {
    height: "95%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};


