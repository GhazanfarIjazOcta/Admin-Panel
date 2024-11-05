import LoginImg from "../../../assets/Login.png";

export const SignupStyles = {
   
    MainBox : {
        backgroundImage: `url(${LoginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        minHeight: "100vh",
        width: "100vw"
      } ,

    whiteBox: {
        width: { lg: "45%", md: "50%", sm: "100%", xs: "100%" },
        opacity: "95%",
        background: "#FFF",
        height: "100vh"
      },

     RegisterTypography: {
        fontWeight: 600,
        fontSize: {
          xl: "1.675rem",
          lg: "1.2rem",
          md: "0.7rem",
          sm: "1.25rem",
          xs: "1.6rem"
        },
        fontFamily: "Inter",
        color: "#14181F"
      }  ,


      TextFieldTypography : {
        fontWeight: 500,
        fontSize: "0.8rem",
        fontFamily: "Inter",
        color: "#14181F"
      },


      MainButton : {
                
        width: { xs: "80%", sm: "60%" },
        maxWidth: "370px",
        height: "3.1rem",
        backgroundColor: "#212122",
        color: "white",
        textTransform: "none",
        "&:hover": { backgroundColor: "#212122" }
      },



  };
