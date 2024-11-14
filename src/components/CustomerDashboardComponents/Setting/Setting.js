import { Box, Paper } from "@mui/material";
import React from "react";
import CustomerSettingTabs from "../../../pages/Tabs/CustomerSettingTabs";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import { settingStyles } from "../../UI/styles/Main";
import SoundAndConfiguration from "./SoundAndConfiguration";

function Setting() {
  const [value, setValue] = React.useState("Profile");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("value", value);
  return (
    <Paper sx={settingStyles.mainContainer}>
      <Box sx={settingStyles.header}>
        <CustomerSettingTabs handleChange={handleChange} value={value} />
        {value == "Profile" && <Profile />}
        {value == "Password" && <ChangePassword />}
        {value == "Contact" && <ContactUs />}
        {value == "Policy" && <PrivacyPolicy />}
        {value == "Terms" && <TermsAndCondition />}
        {value == "Sound" && <SoundAndConfiguration />}
      </Box>
    </Paper>
  );
}

export default Setting;
