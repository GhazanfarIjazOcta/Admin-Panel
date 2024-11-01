import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const ConversationCard = ({ conversation , onConversationClick  ,chatId ,setChatId}) => {
    const lastMessageContent = conversation?.lastMessage?.content || "No messages yet";
    console.log("chat id |||||||||| = ", chatId )
    const handleClick = () => {
      if (onConversationClick) {
        setChatId(conversation.ChatConversation.id);
      }
    };
  
    return (
      <React.Fragment key={conversation.ChatConversation.id}>
        <ListItem
         onClick={handleClick}
          alignItems="flex-start"
          style={{
            fontFamily: "var(--main-font-family)",
            cursor: "pointer",
            marginBottom: "1px",
            transition: "background-color 0.1s ease",
            paddingTop: 0,
          }}
          
        >
          <ListItemAvatar>
            <Avatar alt={conversation.firstName} src={conversation.image} />
          </ListItemAvatar>
          <ListItemText
            secondaryTypographyProps={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: "inline",
                    fontFamily: "var(--main-font-family)",
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {conversation.firstName}
                </Typography>{" "}
                <Typography
                  fontFamily={"var(--main-font-family)"}
                  component="p"
                  variant="body2"
                  color="text.primary"
                >
                  {lastMessageContent.length > 50
                    ? `${lastMessageContent.substring(0, 50)}...`
                    : lastMessageContent}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    );
  };
  
  export default ConversationCard;
  