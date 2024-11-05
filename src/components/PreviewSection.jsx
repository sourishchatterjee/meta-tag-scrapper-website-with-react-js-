

import React from 'react';
import { Typography, Box } from '@mui/material';

const PreviewSection = ({ metaData }) => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: 'background.default', 
        borderRadius: 2,
        boxShadow: 2, 
      }}
    >
      <Typography variant="h5" color="text.primary" gutterBottom>
        Preview
      </Typography>

    
      <Box className="platform-preview" sx={{ marginY: 3, padding: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="h6" color="text.primary">Facebook Preview</Typography>
        <Typography color="text.secondary"><strong>Title:</strong> {metaData['og:title']}</Typography>
        <Typography color="text.secondary"><strong>Description:</strong> {metaData['og:description']}</Typography>
        {metaData['og:image'] && (
          <img src={metaData['og:image']} alt="Facebook Preview" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
        )}
      </Box>

    
      <Box className="platform-preview" sx={{ marginY: 3, padding: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="h6" color="text.primary">Twitter Preview</Typography>
        <Typography color="text.secondary"><strong>Title:</strong> {metaData['twitter:title']}</Typography>
        <Typography color="text.secondary"><strong>Description:</strong> {metaData['twitter:description']}</Typography>
        {metaData['twitter:image'] && (
          <img src={metaData['twitter:image']} alt="Twitter Preview" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
        )}
      </Box>

  
      <Box className="platform-preview" sx={{ marginY: 3, padding: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="h6" color="text.primary">Discord Preview</Typography>
        <Typography color="text.secondary"><strong>Title:</strong> {metaData['og:title']}</Typography>
        <Typography color="text.secondary"><strong>Description:</strong> {metaData['og:description']}</Typography>
        {metaData['og:image'] && (
          <img src={metaData['og:image']} alt="Discord Preview" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
        )}
      </Box>

  
      <Box className="platform-preview" sx={{ marginY: 3, padding: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="h6" color="text.primary">Instagram Preview</Typography>
        {metaData['og:image'] && (
          <img src={metaData['og:image']} alt="Instagram Preview" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
        )}
      </Box>
    </Box>
  );
};

export default PreviewSection;
