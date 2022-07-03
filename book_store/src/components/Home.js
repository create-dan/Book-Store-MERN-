import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="homeBackground">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{
            marginTop: 15,
            backgroundColor: "orange",
            color: "red",
            fontWeight: "bold",
          }}
          varient="contained"
        >
          <Typography
            varient="h1"
            style={{ fontWeight: "Bold", color: "white" }}
          >
            View All Books
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
