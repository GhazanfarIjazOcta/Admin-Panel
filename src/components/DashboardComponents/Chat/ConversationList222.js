import {
    Box,
    Divider,
    List,
    Stack,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
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
  
  const ConversationList = () => {
    const [tabValue, setTabValue] = useState(0);
  
    // Sample static conversation data
    const staticConversations = [
      { id: 1, name: "Conversation 1", lastMessage: "Hello, how are you?" },
      { id: 2, name: "Conversation 2", lastMessage: "Are you coming today?" },
      { id: 3, name: "Conversation 3", lastMessage: "Let’s meet up soon!" },
    ];
  
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };
  
    const handleConversationClick = (id) => {
      console.log("Selected Conversation ID:", id);
    };
  
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
              {staticConversations.length > 0 ? (
                staticConversations.map((conversation) => (
                  <ConversationCard
                    key={conversation.id}
                    conversation={conversation}
                    onConversationClick={() => handleConversationClick(conversation.id)}
                  />
                ))
              ) : (
                <div>No Conversations</div>
              )}
            </List>
          </TabPanel>
        </Tabs>
      </Stack>
    );
  };
  
  export default ConversationList;
  