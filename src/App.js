

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Tabs, Tab, ThemeProvider, createTheme, Box } from '@mui/material';
import EditSection from './components/EditSection';
import PreviewSection from './components/PreviewSection';
import CopySection from './components/CopySection';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  const [metaData, setMetaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const fetchMetaTags = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/mockData.json'); 
      const data = response.data.metaTags.find(tag => tag.url === url.trim());
      
      if (data) {
        setMetaData(data);
      } else {
        alert("No data found for this URL.");
      }
    } catch (error) {
      console.error("Error fetching meta tags:", error);
      alert("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setMetaData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSave = (updatedMetaData) => {
    console.log("Saving changes:", updatedMetaData);
    setMetaData(updatedMetaData);
    
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#bb86fc' : '#1976d2',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#aaaaaa' : '#666666',
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff',
        paper: darkMode ? '#1e1e1e' : '#f5f5f5',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{ padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 600, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" color="text.primary">
            Meta Tag Scraper
          </Typography>
          <TextField 
            label="Enter Full URL" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            helperText="Make sure to enter a valid URL"
            InputProps={{
              style: { color: darkMode ? '#ffffff' : '#000000' },
            }}
            InputLabelProps={{
              style: { color: darkMode ? '#aaaaaa' : '#666666' },
            }}
            sx={{ backgroundColor: darkMode ? '#333333' : '#ffffff' }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={fetchMetaTags} 
            disabled={loading} 
            fullWidth
            sx={{ marginTop: 2, marginBottom: 3 }}
          >
            {loading ? "Loading..." : "Check Website"}
          </Button>

          {metaData && (
            <>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Edit" />
                <Tab label="Preview" />
                <Tab label="Copy" />
              </Tabs>
              
              <Box sx={{ marginTop: 2 }}>
                {tabIndex === 0 && (
                  <EditSection metaData={metaData} onInputChange={handleInputChange} onSave={handleSave} />
                )}
                {tabIndex === 1 && (
                  <PreviewSection metaData={metaData} />
                )}
                {tabIndex === 2 && (
                  <CopySection metaData={metaData} />
                )}
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
