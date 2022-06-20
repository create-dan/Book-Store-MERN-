import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Button LinkComponent={Link} to='/books' sx={{marginTop:15, backgroundColor: 'orange' , color: 'red', fontWeight:'bold'}} varient="contained">
          <Typography varient='h1'>View all products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
