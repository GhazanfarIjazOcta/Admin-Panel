import React, { useEffect, useState } from "react";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  CircularProgress,
  TextField,
  Modal,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { headerStyle } from "./ChatStyles";

// Dummy chat messages for testing
const dummyMessages = [
  {
    id: 1,
    content: "Hello! How are you?",
    User: {
      id: 1, // This could be your user ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 2,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 2, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 3,
    content: "Have you completed the project we discussed?",
    User: {
      id: 1, // This is your message
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 4,
    content: "Yes, I just finished it yesterday. I will send it over.",
    User: {
      id: 2, // This is the other user's message
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 5,
    content: "Great! Looking forward to seeing it.",
    User: {
      id: 1, // This is another message from you
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 6,
    content: "Let me know if you need anything else.",
    User: {
      id: 2, // Another message from the other user
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 7,
    content: "Thanks for your help!",
    User: {
      id: 1, // Another message from you
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 1,
  },
  {
    id: 1,
    content: "Hello! How are you?",
    User: {
      id: 1, // This could be your user ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 2,
  },
  {
    id: 2,
    content: "I'm good, thanks! How about you?",
    User: {
      id: 2, // This is the other user's ID
      image:
        "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
    },
    chatid: 2,
  },
];

const ChatView = ({
  currentUser = {
    id: 2,
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730104832/adminlogo2_ghz4jq.webp",
  },
  chatUser = {
    id: 1,
    firstName: "Alice",
    lastName: "Bowam",
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg",
  },

  // messages = [], // Default to empty array
  isLoadingChat,
  message,
  setMessage,
  handleSend,
  handleImageUpload,
  handleCloseModal,
  openModal,
  image,
  loading,
  projectName = "Alicee",
  selectedConversationId,
  chatId,
  setChatId,
}) => {
  const chatuserImage =
    "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730103376/R_kol7ep.jpg";

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      const filteredMessages = dummyMessages.filter(
        (msg) => msg.chatid == chatId,
      );
      setMessages(filteredMessages);
      console.log("Filtered Messages:", filteredMessages);
    } else {
      console.log("No valid chat selected");
      setMessages([]);
    }
  }, [chatId]);

  return (
    <Stack
      direction={"column"}
      justifyContent={"flex-start"}
      height={{ lg: "85%", xs: "82%" }}
      position={{ lg: "relative", xs: "fixed" }}
    >
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Box sx={headerStyle.head}>
          <Avatar src={chatuserImage} sx={{ marginRight: "1rem" }} />
          {console.log("here is the chat user ", messages)}
          <Typography
            sx={{
              fontFamily: "var(--main-font-family)",
              fontSize: { xl: "15px", lg: "12px", md: "15px", xs: "15px" },
              fontWeight: 600,
            }}
          >
            {projectName || ` ${"Alice"} `}
          </Typography>
          <IconButton>
            <FiberManualRecordIcon sx={{ fontSize: 15, color: "#3B9434" }} />
          </IconButton>
        </Box>
      </Stack>
      <Divider sx={{ marginBottom: "1px" }} />
      <Box
        sx={{
          height: "calc(72vh)",
          overflowY: "scroll",
          padding: 2,
          bgcolor: "#FAFAFA",
          borderRadius: "8px",
        }}
      >
        {isLoadingChat ? (
          <Stack height={"90%"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress />
          </Stack>
        ) : image ? (
          <Box
            height={"95%"}
            sx={{
              backgroundColor: "#FAFAFA",
              borderRadius: "8px",
              margin: "8px",
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleCloseModal}>
              <CloseRoundedIcon />
            </IconButton>
            <img
              src={image}
              alt="file"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "contain",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                filter: loading ? "blur(5px)" : "",
              }}
            />
          </Box>
        ) : (
          <Box>
            {messages.length > 0 ? (
              messages.map((msg) => {
                const isSender = msg?.User?.id === currentUser?.id;
                return (
                  <Box
                    key={msg?.id}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: isSender ? "flex-end" : "flex-start",
                      marginBottom: 2,
                    }}
                  >
                    {!isSender && (
                      <Avatar
                        src={msg?.User?.image}
                        sx={{ width: 25, height: 25, marginRight: 1 }}
                      />
                    )}
                    <Box
                      sx={{
                        bgcolor: isSender ? "#15294E" : "#F2F2F2",
                        color: isSender ? "#FFFFFF" : "#000000",
                        borderRadius: isSender
                          ? "10px 10px 0 10px"
                          : "10px 10px 10px 0",
                        py: 1.5,
                        px: 3,
                        maxWidth: "35%",
                        wordWrap: "break-word",
                      }}
                    >
                      {msg.content}
                    </Box>
                    {isSender && (
                      <Avatar
                        src={currentUser?.image}
                        sx={{ width: 25, height: 25, marginLeft: 1 }}
                      />
                    )}
                  </Box>
                );
              })
            ) : (
              <Typography
                sx={{
                  fontFamily: "var(--main-font-family)",
                  marginLeft: "1rem",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                No chat available...
              </Typography>
            )}
          </Box>
        )}
      </Box>
      <Box
        component={"form"}
        onSubmit={handleSend}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: { lg: 0, xs: 2 },
          ml: 2,
          mr: 2,
          mt: 1,
        }}
      >
        <label htmlFor="file-input">
          <AttachFileIcon color="#6A6A6A" sx={{ transform: "rotate(35deg)" }} />
        </label>
        <input
          id="file-input"
          onChange={handleImageUpload}
          type="file"
          style={{ display: "none" }}
        />
        <TextField
          name="message"
          placeholder="Please enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flexGrow: 1, marginRight: 1 }}
        />
        <IconButton color="primary" aria-label="send" type="submit">
          <SendIcon sx={{ transform: "rotate(45deg)" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default ChatView;
