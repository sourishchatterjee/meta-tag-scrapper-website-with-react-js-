

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const EditSection = ({ metaData, onInputChange, onSave }) => {
  const [editedMetaData, setEditedMetaData] = useState(metaData);

  useEffect(() => {
    setEditedMetaData(metaData); 
  }, [metaData]);

  const handleInputChange = (field, value) => {
    setEditedMetaData(prevData => ({
      ...prevData,
      [field]: value,
    }));
    onInputChange(field, value); 
  };

  const handleSave = () => {
    onSave(editedMetaData); 
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Edit Meta Tags
      </Typography>
      <TextField
        label="Title"
        value={editedMetaData["og:title"] || ""}
        onChange={(e) => handleInputChange("og:title", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={editedMetaData["og:description"] || ""}
        onChange={(e) => handleInputChange("og:description", e.target.value)}
        fullWidth
        margin="normal"
      />
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: 2 }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default EditSection;
