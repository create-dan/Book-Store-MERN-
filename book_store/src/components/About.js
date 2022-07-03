import React from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";

const About = () => {
  const cardStyle = {
    height: "90 vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="homeBackground" style={{ cardStyle }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
       
      >
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          BOOK STORE APP 
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4">
          By create-dan
        </Typography>
      </Box>
    </div>
  );
};

export default About;
