import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
export default function SettingTabs({ handleChange, value }) {
  return (
    <Box sx={{}} p={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        TabIndicatorProps={{
          style: { background: "#F38712", color: "#F38712" },
        }}
        sx={{
          "&.Mui-selected": {
            color: "#F38712",
          },
        }}
      >
        <Tab
          value="Profile"
          label="Profile"
          sx={{
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: "16px",
              fontWeight: 500,
            },
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
        <Tab
          value="Password"
          label="Change Password"
          sx={{
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: "16px",
              fontWeight: 500,
            },
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
        <Tab
          value="Contact"
          label="Contact Us"
          sx={{
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: "16px",
              fontWeight: 500,
            },
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
        <Tab
          value="Policy"
          label="Privacy Policy"
          sx={{
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: "16px",
              fontWeight: 500,
            },
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
        <Tab
          value="Terms"
          label="Terms and Condition"
          sx={{
            "&.Mui-selected": {
              color: "#F38712",
              fontSize: "16px",
              fontWeight: 500,
            },
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
      </Tabs>
    </Box>
  );
}
