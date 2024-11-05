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

  import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    ml: 2,
    mt: 1.5,
    mb: 1
  };
  

  
 
  
  const ConversationList = ({onConversationSelect , chatId, setChatId , chatlist , setchatlist }) => {
    
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
      <Stack >
        
        <Stack justifyContent={"space-between"} direction={"row"} >
      <Box sx={{ ...headerStyle }}>
        {/* Replaced user name and image with the search bar */}
        <TextField
          variant="outlined"
          label="Search"
          size="small"
          sx={{
            flex: 1, // Allows the search bar to take available space
            marginRight: "1rem", // Space between search bar and avatar
            width: { xl:"330px", lg:"235px", md:"240px" , sm:"200px",  xs:"200px"}
          }}
        />
    
 

      </Box>
      <Divider sx={{ marginBottom: "1px" }} />
    </Stack>
    <Divider sx={{ marginBottom: "1px" }} />

        {/* <Typography fontFamily={"var(--main-font-family)"} variant="h6" pl={2}>
          Chat
        </Typography> */}
        {/* <Stack direction={"row"} width={"100%"}>
          <Button
            sx={{
              borderRadius: 15,
              fontSize: "14px !important",
              backgroundColor: "#FFAC00",
              margin: 1,
              "&:hover": {
                backgroundColor: "#FFAC00",
              },
            }}
          >
            <Select
              value={""}
              displayEmpty
              sx={{
                padding: 0,
                width: "100%",
                height: "18px",
                "& .Mui-focused": {
                  border: "none",
                  borderWidth: "0px !important",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderWidth: "0px !important",
                },
              }}
            >
              <MenuItem
                disabled
                value=""
              >
                <Typography
                  textTransform={"capitalize"}
                  fontFamily={'var(--main-font-family)'}
                  fontSize={{ xl: "11px", lg: "9px" }}
                  pt={0.5}
                  ml={0.6}
                  color={"white"}
                >
                  Start New Conversation
                </Typography>
              </MenuItem>
              {dummyTeam.map((user) => (
                <MenuItem
                  key={user.userId}
                  value={user.userId}
                >
                  <Avatar
                    sx={{ width: "25px", height: "25px" }}
                    src={user.image}
                    alt={`${user.firstName}'s profile`}
                  />
                  <Typography fontSize={"14px"}>
                    {user.firstName} {user.lastName}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </Button>
        </Stack> */}
        <Tabs aria-label="Basic tabs"  onChange={handleTabChange}>
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
          <TabPanel style={{ padding: 0 }} >
            <List sx={{ fontFamily: "var(--main-font-family)", width: "100%", maxWidth: { xl: 360 }, bgcolor: "background.paper" }}>
              {chatlist.map((conversation) => (
                <ConversationCard key={conversation.ChatConversation.id} conversation={conversation} onConversationClick={handleConversationClick} chatId={chatId} setChatId={setChatId} chatlist={chatlist} setchatlist={setchatlist} />
              ))}
            </List>
          </TabPanel>
        </Tabs>
      </Stack>
    );
  };
  
  export default ConversationList;
  