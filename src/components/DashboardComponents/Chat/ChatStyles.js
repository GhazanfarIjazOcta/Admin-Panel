export const ChatStyles = {
   
    mainChatStyles : {

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

    },

    iconbox: {
        ml: {
          xs: 33,  // For mobile width around 320px
          sm: 44,  // For mobile width around 375px
          md: 46   // For mobile width around 425px and larger
        }
      },



  };


  export const headerStyle = {

    head: {
    padding: {lg:"12px", xs:"auto"},
    display: "flex",
    alignItems: "center",   
    height: {xs:"10px" , lg:"auto"},
    mb:{xs:2.5 , lg:0 }
    }
  };