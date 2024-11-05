import {
  Divider,
  Grid,
  Paper,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import ChatView from "./ChatView";
import ConversationList from "./ConversationList";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChatStyles } from "./ChatStyles";

const dummyMessages1 = [
  {
    id: 1,
    content: "Hello! How are you?",
    User: {
      id: 1, // This could be your user ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 2,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 2, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 3,
    content: "Have you completed the project we discussed?",
    User: {
      id: 1, // This is your message
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 4,
    content: "Yes, I just finished it yesterday. I will send it over.",
    User: {
      id: 2, // This is the other user's message
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 5,
    content: "Great! Looking forward to seeing it.",
    User: {
      id: 1, // This is another message from you
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 6,
    content: "Let me know if you need anything else.",
    User: {
      id: 2, // Another message from the other user
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 7,
    content: "Thanks for your help!",
    User: {
      id: 1, // Another message from you
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg"
    },
    chatid: 1,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 8,
    content: "Hello! How are you?",
    User: {
      id: 1, // This could be your user ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 2,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 9,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 2, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 2,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 10,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 1, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 3,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 11,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 2, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 3,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 12,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 1, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 3,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    id: 15,
    content: "Why are you not Replying?",
    User: {
      id: 1, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg"
    },
    chatid: 3,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  }
];

const dummyConversations = [
  {
    ChatConversation: { id: "1" },
    firstName: "Alice",
    lastMessage: { content: "Hello, how are you?" },
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    messageStatus: true  ,
    onlineStatus : false ,
    timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    ChatConversation: { id: "2" },
    firstName: "Bob",
    lastMessage: { content: "Are we still on for the meeting?" },
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/v1730443621/bob_m1bra7.jpg",
      messageStatus: false, 
      onlineStatus : true,
      timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  },
  {
    ChatConversation: { id: "3" },
    firstName: "Sophia",
    lastMessage: { content: "Why are you not Replying?" },
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730801766/R_1_vaefke.jpg",
      messageStatus: false, 
      onlineStatus : true,
      timestamp: "2024-11-01T10:00:00Z" // Example timestamp
  }
];

const Chat = () => {
  const [chatId, setChatId] = useState();
  const [message , setmessage] = useState(dummyMessages1);
  const [chatlist , setchatlist] = useState(dummyConversations)

  // console.log("message is here " , message)
  console.log("chatlist is here " , chatlist)

  // Hook for theme and responsive checks
  const theme = useTheme();
  const matchesMdDown = useMediaQuery(theme.breakpoints.down("lg"));

  // State and hooks
  const [conversationId, setConversationId] = useState(null);
  const [chatUser, setChatUser] = useState(null);
  const { id } = useParams(); // Get conversation ID from URL
  const [value, setValue] = useState(id);
  const [isLoading, setIsLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle drawer visibility
  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to update the selected conversation value
  const handleValueChange = (id) => {
    setValue(id);
    setConversationId(null);
  };

  // Function to set the active conversation and chat user
  const handleSetConversationId = (id, user) => {
    if (id === conversationId) return;
    setIsLoading(true);
    setValue(user.id);
    setConversationId(id);
    setChatUser(user);
    if (matchesMdDown) {
      setDrawerOpen(false); // Close drawer on mobile view
    }
  };

  // Function to change the current chat user
  const handleChatUserChange = (user) => {
    setChatUser(user);
  };
  const handleSelectedConversation = (id) => {
    console.log("Selected Conversation ID in Parent:", id);
    // Additional functionality when a conversation is clicked can go here
    setSelectedConversationId(id);
  };

  const [selectedConversationId, setSelectedConversationId] = useState(1);

  return (
    <Box sx={ChatStyles.mainChatStyles}>
      <Grid container>
        {matchesMdDown && (
          <Grid item xs={1}>
            <IconButton
              sx={ChatStyles.iconbox}
              color="inherit"
              aria-label={drawerOpen ? "close drawer" : "open drawer"}
              onClick={handleToggleDrawer}
            >
              {drawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </Grid>
        )}

        {/* Drawer for conversation list */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={handleToggleDrawer}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            width: "300px",
            flexShrink: 0,
            display: { xs: matchesMdDown ? "block" : "none", sm: "block" }
          }}
          PaperProps={{
            style: {
              top: "168px",
              height: "calc(100% - 150px)",
              borderTopRightRadius: "16px",
              width: "84%",
              overflow: "auto"
            }
          }}
        >
          <ConversationList
            setChatId={setChatId}
            chatId={chatId}
            chatlist = {chatlist}
            setchatlist = {setchatlist}
          
            conversationId={conversationId}
            handleSetConversationId={handleSetConversationId}
            setConversationId={setConversationId}
            value={value}
            setValue={setValue}
            id={id}
            handleValueChange={handleValueChange}
            // Mock static data for conversations
            data={[]} // Replace this with your static data
            handleChatUserChange={handleChatUserChange}
            setIsLoading={setIsLoading}
            onConversationSelect={handleSelectedConversation}
          />
        </Drawer>

        {!matchesMdDown && (
          <Grid item xl={2.995} lg={2.995} xs={3}>
            <ConversationList
              setChatId={setChatId}
              chatId={chatId}
              chatlist = {chatlist}
              setchatlist = {setchatlist}
              conversationId={conversationId}
              handleSetConversationId={handleSetConversationId}
              setConversationId={setConversationId}
              value={value}
              setValue={setValue}
              id={id}
              handleValueChange={handleValueChange}
              // Mock static data for conversations
              data={[]} // Replace this with your static data
              handleChatUserChange={handleChatUserChange}
              setIsLoading={setIsLoading}
              onConversationSelect={handleSelectedConversation}
            />
          </Grid>
        )}

        {!matchesMdDown && (
          <Grid item xl={0.01} lg={0.01} xs={1} height={"80%"}>
            <Divider orientation="vertical" variant="fullWidth" />
          </Grid>
        )}

        <Grid item xl={8.995} lg={8.995} xs={!matchesMdDown ? 8 : 12}>
          <ChatView
            setChatId={setChatId}
            chatId={chatId}
            chatlist = {chatlist}
              setchatlist = {setchatlist}
            
            message = {message}
            setmessage = {setmessage}
            conversationId={conversationId}
            chatUser={chatUser}
            handleChatUserChange={handleChatUserChange}
            setConversationId={setConversationId}
            isAdminPage={true}
            value={value}
            setValue={setValue}
            id={id}
            isLoadingChat={isLoading}
            setIsLoadingChat={setIsLoading}
            selectedConversationId={selectedConversationId}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
