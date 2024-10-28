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
  
  const dummyTeam = [
    {
      userId: "1",
      firstName: "Alice",
      lastName: "Smith",
      image: "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    {
      userId: "2",
      firstName: "Bob",
      lastName: "Johnson",
      image: "https://via.placeholder.com/25",
    },
    {
      userId: "3",
      firstName: "Charlie",
      lastName: "Brown",
      image: "https://via.placeholder.com/25",
    },
  ];
  
  const dummyConversations = [
    {
      ChatConversation: { id: "1" },
      firstName: "Alice",
      lastMessage: { content: "Hello, how are you?" },
      image: "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    {
      ChatConversation: { id: "2" },
      firstName: "Bob",
      lastMessage: { content: "Are we still on for the meeting?" },
      image: "https://via.placeholder.com/50",
    },
  ];
  
  const ConversationList = () => {
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
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
        <Tabs aria-label="Basic tabs" value={tabValue} onChange={handleTabChange}>
          <TabList>
            <Tab style={{ width: "100%", padding: "0px" }}>
              <Typography fontSize={"14px"} sx={{ fontFamily: "var(--main-font-family)" }}>
                Group Chat
              </Typography>
            </Tab>
            <Tab sx={{ width: "100%" }}>
              <Typography fontSize={"14px"} sx={{ fontFamily: "var(--main-font-family)" }}>
                Private Chat
              </Typography>
            </Tab>
          </TabList>
          <TabPanel style={{ padding: 0 }} value={0}>
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
          </TabPanel>
          <TabPanel style={{ padding: 0 }} value={1}>
            <List sx={{ fontFamily: "var(--main-font-family)", width: "100%", maxWidth: { xl: 360 }, bgcolor: "background.paper" }}>
              {dummyConversations.map((conversation) => (
                <ConversationCard key={conversation.ChatConversation.id} conversation={conversation} />
              ))}
            </List>
          </TabPanel>
        </Tabs>
      </Stack>
    );
  };
  
  export default ConversationList;
  