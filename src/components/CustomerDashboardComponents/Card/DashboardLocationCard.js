import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Stack, Typography } from "@mui/material";
import maintenanceLogo from "../../../assets/Card/maintenanceLogo.png";
import ArrowDown from "../../../assets/Card/fi_chevron-down.png";
export default function DashboardLocationCard() {
  return (
    <Box sx={{ height: "100%", mt: { xs: 1, md: 0 } }}>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          boxShadow: "none",
          height: "700px",
        }}
      >
        <React.Fragment>
          <Box height={{ md: "1000px", xs: "250px" }}>
            <iframe
              width={"100%"}
              height={"60%"}
              borderRadius="0px"
              frameBorder="0"
              style={{ border: 0, borderRadius: "0px" }}
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330400.5089714776!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5d4b2f1f7db%3A0x8c4f2ef328e24f6c!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </Box>
        </React.Fragment>
      </Card>
    </Box>
  );
}
