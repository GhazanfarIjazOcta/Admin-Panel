import React, { useEffect, useRef, useState } from "react";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  CircularProgress,
  TextField,
  Modal
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { headerStyle } from "./ChatStyles";
import { format } from 'date-fns'; // Ensure you have date-fns installed for formatting

const ChatView = ({
  currentUser = {
    id: 2,
    image:
      "https://res.cloudinary.com/dnfc9g33c/image/upload/t_Profile/v1730104832/adminlogo2_ghz4jq.webp"
  },
  isLoadingChat,
  handleImageUpload,
  handleCloseModal,
  openModal,
  image,
  loading,
  chatId,
  setChatId,
  message,
  setMessage,
  chatlist,
  setchatlist
}) => {
  const [messages, setMessages] = useState([]);
  const [text, settext] = useState();
  const messageBoxRef = useRef(null); // Create a ref for the message box

  useEffect(() => {
    if (chatId) {
      const filteredMessages = message.filter((msg) => msg.chatid == chatId);
      setMessages(filteredMessages);
      console.log("Filtered Messages:", filteredMessages);
    } else {
      console.log("No valid chat selected");
      setMessages([]);
    }
  }, [chatId]);


  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]); // Trigger on messages change

  const userdetails = chatId
    ? chatlist.filter((chat) => chat.ChatConversation.id === chatId)
    : [];

  const userimage = userdetails?.[0]?.image || "defaultImagePath"; // Fallback image path
  const userName = userdetails?.[0]?.firstName || "No Name Available"; // Fallback name
  const onlineStatus = userdetails?.[0]?.onlineStatus || false;

  console.log("User Details: ||||||||||||||", onlineStatus);

  const handleMessageSent = (messageContent) => {
    if (!messageContent.trim()) return; // Prevent sending empty messages
    const getCurrentTimestamp = () => new Date().toISOString();
    const newMessage = {
      id: messages.length + 1, // Unique ID for the message
      content: messageContent,
      User: {
        id: currentUser.id,
        image: currentUser.image
      },
      chatid: chatId,
      timestamp: getCurrentTimestamp()

    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"flex-start"}
      height={{ lg: "85%", xs: "82%" }}
      position={{ lg: "relative", xs: "fixed" }}
    >
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Box sx={headerStyle.head}>
          <Avatar src={userimage} sx={{ marginRight: "1rem" }} />
          {console.log("here is the chat user ", messages)}
          <Typography
            sx={{
              fontFamily: "var(--main-font-family)",
              fontSize: { xl: "15px", lg: "12px", md: "15px", xs: "15px" },
              fontWeight: 600
            }}
          >
            {/* {projectName ||  `${chatUser?.firstName} ${chatUser?.lastName}`} */}
            {userName || ` ${"Alice"} `}
          </Typography>

          <IconButton>
            <FiberManualRecordIcon
              sx={{ fontSize: 15, color: onlineStatus ? "#3B9434" : "#FF0000" }} // Green if online, red if offline
            />
          </IconButton>
        </Box>
      </Stack>
      <Divider sx={{ marginBottom: "1px" }} />
      <Box
      ref={messageBoxRef} // Attach the ref here
        sx={{
          height: "calc(72vh)",
          overflowY: "scroll",
          padding: 2,
          bgcolor: "#FAFAFA",
          borderRadius: "8px"
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
              alignItems: "center"
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
                filter: loading ? "blur(5px)" : ""
              }}
            />
          </Box>
        ) : (
<Box>
  {messages.length > 0 ? (
    messages.map((msg) => {
      const isSender = msg?.User?.id === currentUser?.id;

      // Format the timestamp
      const messageTime = new Date(msg.timestamp);
      const formattedTime = format(messageTime, 'hh:mm a'); // You can change this format as needed

      return (
        <Box
          key={msg?.id}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: isSender ? "flex-end" : "flex-start",
            marginBottom: 2
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
              display: 'flex',
              flexDirection: 'column' // Stack message content and time
            }}
          >
            <Typography sx={{ marginBottom: 0.5 }}>
              {msg.content}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem', // Adjust font size as needed
                color: isSender ? "#FFFFFF" : "#000000",
                marginTop: '0.5rem', // Add some space above the time
                
                alignItems: "flex-end",
              }}
            >
              {formattedTime}
            </Typography>
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
        display: "flex"
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
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          handleMessageSent(text); // Call the message sent handler with the current message state
          settext(""); // Optionally clear the message input after sending
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: { lg: 0, xs: 1 },
          ml: 2,
          mr: 2,
          mt: 1
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
          value={text}
          onChange={(e) => settext(e.target.value)} // Update the message state
          sx={{ flexGrow: 1, marginRight: 1 }}
        />
        <IconButton color="primary" aria-label="send" type="submit">
          <SendIcon sx={{ transform: "rotate(90deg)" }} />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default ChatView;
