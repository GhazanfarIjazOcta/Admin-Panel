import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ConversationCard from "./ConversationCard";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  ml: 2,
  mt: 1.5,
  mb: 1,
};

const dummyConversations = [
  {
    ChatConversation: { id: "1" },
    firstName: "Alice",
    lastMessage: { content: "Hello, how are you?" },
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
  },
  {
    ChatConversation: { id: "2" },
    firstName: "Bob",
    lastMessage: { content: "Are we still on for the meeting?" },
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg",
  },
];

const ConversationList = ({ onConversationSelect, chatId, setChatId }) => {
  const [tabValue, setTabValue] = useState();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  //getting id from grandchilderen
  const handleConversationClick = (id) => {
    console.log("Selected Conversation ID:", id);
    // Additional functionality when a conversation is clicked can go here
    if (onConversationSelect) {
      onConversationSelect(id); // Send ID to parent component
    }
  };

  return (
    <Stack>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Box sx={{ ...headerStyle }}>
          {/* Replaced user name and image with the search bar */}
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            sx={{
              flex: 1, // Allows the search bar to take available space
              marginRight: "1rem", // Space between search bar and avatar
              width: {
                xl: "330px",
                lg: "235px",
                md: "240px",
                sm: "200px",
                xs: "200px",
              },
            }}
          />
        </Box>
        <Divider sx={{ marginBottom: "1px" }} />
      </Stack>
      <Divider sx={{ marginBottom: "1px" }} />

      <Tabs aria-label="Basic tabs" onChange={handleTabChange}>
        {/* <TabList>
          <Tab sx={{ width: "100%" }}>
              <Typography fontSize={"14px"} sx={{ fontFamily: "var(--main-font-family)" }}>
                Private Chat
              </Typography>
            </Tab>
            <Tab style={{ width: "100%", padding: "0px" }}>
              <Typography fontSize={"14px"} sx={{ fontFamily: "var(--main-font-family)" }}>
                Group Chat
              </Typography>
            </Tab>
            
          </TabList> */}
        {/* <TabPanel style={{ padding: 0 }} value={0}>
            <List sx={{ width: "100%", maxWidth: { xl: 360 }, bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start" style={{ fontFamily: "var(--main-font-family)", paddingTop: 0 }}>
                <ListItemAvatar>
                  <Avatar alt={""} src={""} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ display: "flex", fontFamily: "var(--main-font-family)" }} component="span" variant="body1" color="text.primary">
                      Project Chat: Dummy Project
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </List>
          </TabPanel> */}
        <TabPanel style={{ padding: 0 }}>
          <List
            sx={{
              fontFamily: "var(--main-font-family)",
              width: "100%",
              maxWidth: { xl: 360 },
              bgcolor: "background.paper",
            }}
          >
            {dummyConversations.map((conversation) => (
              <ConversationCard
                key={conversation.ChatConversation.id}
                conversation={conversation}
                onConversationClick={handleConversationClick}
                chatId={chatId}
                setChatId={setChatId}
              />
            ))}
          </List>
        </TabPanel>
      </Tabs>
    </Stack>
  );
};

export default ConversationList;
