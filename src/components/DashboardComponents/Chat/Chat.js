import {
  Divider,
  Grid,
  Paper,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import ChatView from "./ChatView";
import ConversationList from "./ConversationList";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Chat = () => {
  // Hook for theme and responsive checks
  const theme = useTheme();
  const matchesMdDown = useMediaQuery(theme.breakpoints.down("lg"));

  // State and hooks
  const [conversationId, setConversationId] = useState(8);
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

  return (
    <Box
      sx={{
        height: { lg: "83%", xs: "90%" },
        borderRadius: "4px",

        position: "fixed",
        mt: { xs: 11, sm: 12, md: 12, lg: 12 },
        // Adjust padding based on the screen size
        px: { xs: 2, sm: 2, md: 2, lg: 0 }, // Remove padding at larger screens where sidebar becomes toggle
        ml: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }, // Leave space for the sidebar on larger screens
        overflow: "none", // Prevent overflowing horizontally and vertically
        width: "99%", // Ensure it takes full width
        width: { lg: "81.5%", xs: "90%" }, // Ensure it takes full width
        // maxWidth: "1200px", // Set a max width as needed>
        //             background: "#F8DE7E",
        //   background: "#F8F8FF",
        background: "#ffffff",
        overflow: "none",

        boxShadow: 2,
      }}
    >
      <Grid container>
        {matchesMdDown && (
           <Grid item xs={1}>
           <IconButton
             sx={{
               ml: {
                 xs: 33,  // For mobile width around 320px
                 sm: 44,  // For mobile width around 375px
                 md: 46   // For mobile width around 425px and larger
               }
             }}
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
            keepMounted: true,
          }}
          sx={{
            width: "300px",
            flexShrink: 0,
            display: { xs: matchesMdDown ? "block" : "none", sm: "block" },
            
          }}
          PaperProps={{
            style: {
              top: "168px",
              height: "calc(100% - 150px)",
              borderTopRightRadius: "16px",
              width: "84%",
              overflow: "auto",
            },
          }}
        >
          <ConversationList
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
          />
        </Drawer>

        {!matchesMdDown && (
          <Grid item xl={2.995} lg={2.995} xs={3}>
            <ConversationList
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
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
