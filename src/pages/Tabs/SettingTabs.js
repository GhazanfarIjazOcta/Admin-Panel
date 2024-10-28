import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Material UI Icons
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import GavelIcon from "@mui/icons-material/Gavel";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SettingTabs({ handleChange, value }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      p={3}
      overflow={isMobile ? "auto" : "visible"}
      whiteSpace={isMobile ? "nowrap" : "normal"}
      position="relative" // Added for absolute positioning of indicators
    >
      {/* Optional: Scroll indicators */}
      {isMobile && (
        <>
          <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1 }}>
            <span style={{ cursor: "pointer", color: "#F38712", fontSize: "24px" }}>❮</span>
          </div>
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1 }}>
            <span style={{ cursor: "pointer", color: "#F38712", fontSize: "24px" }}>❯</span>
          </div>
        </>
      )}

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="setting tabs"
        TabIndicatorProps={{
          style: {
            background: "#F38712",
            height: isMobile ? "2px" : "4px", // Smaller underline for mobile
          },
        }}
        sx={{
          "&.Mui-selected": {
            color: "#F38712",
          },
          "& .MuiTab-root": {
            margin: isMobile ? "0 4px" : "0 16px", // Adjust margin for tabs
          },
        }}
        centered={isMobile} // Center tabs on mobile
        variant={isMobile ? "scrollable" : "standard"} // Allow scrolling on mobile
        scrollButtons={isMobile ? "auto" : "off"} // Enable scroll buttons for mobile
      >
        {/* Profile Tab */}
        <Tab
          value="Profile"
          label={!isMobile ? "Profile" : null}
          icon={isMobile ? <PersonIcon fontSize="small" /> : null} // Use small icon on mobile
          sx={{
            fontSize: isMobile ? "10px" : "16px", // Adjust font size for mobile
            padding: isMobile ? "2px" : "8px", // Smaller padding for mobile
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />

        {/* Change Password Tab */}
        <Tab
          value="Password"
          label={!isMobile ? "Change Password" : null}
          icon={isMobile ? <LockIcon fontSize="small" /> : null} // Use small icon on mobile
          sx={{
            fontSize: isMobile ? "10px" : "16px",
            padding: isMobile ? "2px" : "8px",
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />

        {/* Contact Us Tab */}
        <Tab
          value="Contact"
          label={!isMobile ? "Contact Us" : null}
          icon={isMobile ? <ContactMailIcon fontSize="small" /> : null}
          sx={{
            fontSize: isMobile ? "10px" : "16px",
            padding: isMobile ? "2px" : "8px",
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />

        {/* Privacy Policy Tab */}
        <Tab
          value="Policy"
          label={!isMobile ? "Privacy Policy" : null}
          icon={isMobile ? <PrivacyTipIcon fontSize="small" /> : null}
          sx={{
            fontSize: isMobile ? "10px" : "16px",
            padding: isMobile ? "2px" : "8px",
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />

        {/* Terms and Conditions Tab */}
        <Tab
          value="Terms"
          label={!isMobile ? "Terms and Condition" : null}
          icon={isMobile ? <GavelIcon fontSize="small" /> : null}
          sx={{
            fontSize: isMobile ? "10px" : "16px",
            padding: isMobile ? "2px" : "8px",
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />

        {/* Sound Settings Tab */}
        {/* <Tab
          value="Sound"
          label={!isMobile ? "Sound Settings" : null}
          icon={isMobile ? <SettingsIcon fontSize="small" /> : null}
          sx={{
            fontSize: isMobile ? "10px" : "16px",
            padding: isMobile ? "2px" : "8px",
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: isMobile ? "8px" : "16px",
              fontWeight: 500,
            },
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        /> */}
      </Tabs>
    </Box>
  );
}
