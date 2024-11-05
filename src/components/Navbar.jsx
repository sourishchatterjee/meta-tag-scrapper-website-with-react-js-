// components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Button, Box } from '@mui/material';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meta Tag Scraper
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Blog</Button>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
