import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#23F3D" }}>
      <Toolbar>
      <NavLink to='/' style={{color: 'white'}}>
        <Typography>
          <BookIcon />
        </Typography>
        </NavLink>

        <Tabs
          sx={{ ml: "auto" }}
          textColor="inherit"
          value={value}
          indicatorColor="secondary"
          onChange={(e, val) => setValue(val)}
        >
          <Tab LinkComponent={NavLink} to="/add" label="Add Proudct" />
          <Tab  LinkComponent={NavLink} to="/books" label="Books" />
          <Tab  LinkComponent={NavLink} to="/about" label="About Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
