import {
  Box,
  Divider,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ConversationCard from "./ConversationCard";
import TabPanel from "@mui/joy/TabPanel";
import Tabs from "@mui/joy/Tabs";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  ml: 2,
  mt: 1.5,
  mb: 1,
};

const ConversationList = ({
  onConversationSelect,
  chatId,
  setChatId,
  chatlist,
  setchatlist,
}) => {
  const [tabValue, setTabValue] = useState(0); // Ensure it starts with a valid tab value

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleConversationClick = (id) => {
    console.log("Selected Conversation ID:", id);
    // Send ID to parent component if the function is passed
    if (onConversationSelect) {
      onConversationSelect(id);
    }
  };

  // Check if chatlist is valid and set default value if empty
  useEffect(() => {
    if (!chatlist) {
      setchatlist([]); // Ensure chatlist is always an array
    }
  }, [chatlist, setchatlist]);

  return (
    <Stack>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Box sx={headerStyle}>
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            sx={{
              flex: 1,
              marginRight: "1rem",
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
      
      <Tabs aria-label="Basic tabs" value={tabValue} onChange={handleTabChange}>
        <TabPanel style={{ padding: 0 }} value={tabValue}>
          <List
            sx={{
              fontFamily: "var(--main-font-family)",
              width: "100%",
              maxWidth: { xl: 360 },
              bgcolor: "background.paper",
            }}
          >
            {Array.isArray(chatlist) && chatlist.length > 0 ? (
              chatlist.map((conversation) => (
                conversation.ChatConversation ? ( // Ensure this property exists
                  <ConversationCard
                    key={conversation.ChatConversation.id} // Ensure conversation.ChatConversation.id exists
                    conversation={conversation}
                    onConversationClick={handleConversationClick}
                    chatId={chatId}
                    setChatId={setChatId}
                    chatlist={chatlist}
                    setchatlist={setchatlist}
                  />
                ) : null
              ))
            ) : (
              <div>No Conversations</div> // Display a message if chatlist is empty
            )}
          </List>
        </TabPanel>
      </Tabs>
    </Stack>
  );
};

export default ConversationList;
