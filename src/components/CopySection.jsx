// // import React from 'react';

// // const CopySection = ({ metaData }) => {
// //   const handleCopy = () => {
// //     const metaTags = `
// //       <meta property="og:title" content="${metaData.title}" />
// //       <meta property="og:description" content="${metaData.description}" />
// //       <meta property="og:image" content="${metaData.image}" />
// //       <meta property="og:url" content="${metaData.url}" />
// //       <meta property="og:type" content="${metaData.type}" />
      
// //       <meta name="twitter:card" content="${metaData.twitter_card}" />
// //       <meta name="twitter:site" content="${metaData.twitter_site}" />
// //       <meta name="twitter:creator" content="${metaData.twitter_creator}" />
// //       <meta name="twitter:title" content="${metaData.twitter_title || metaData.title}" />
// //       <meta name="twitter:description" content="${metaData.twitter_description || metaData.description}" />
// //       <meta name="twitter:image" content="${metaData.twitter_image || metaData.image}" />
// //     `;
// //     navigator.clipboard.writeText(metaTags);
// //     alert("Meta tags copied to clipboard!");
// //   };

// //   return (
// //     <div>
// //       <h2>Copy Meta Tags</h2>
// //       <button onClick={handleCopy}>Copy to Clipboard</button>
// //     </div>
// //   );
// // };

// // export default CopySection;


// // src/components/CopySection.js
// import React from 'react';

// const CopySection = ({ metaData }) => {
//   const copyToClipboard = () => {
//     const metaTags = `
//       <meta property="og:title" content="${metaData.title}" />
//       <meta property="og:description" content="${metaData.description}" />
//       <meta property="og:image" content="${metaData.image}" />
//     `;
//     navigator.clipboard.writeText(metaTags).then(() => {
//       alert('Meta tags copied to clipboard!');
//     });
//   };

//   return (
//     <div>
//       <h2>Copy Meta Tags</h2>
//       <button onClick={copyToClipboard}>Copy to Clipboard</button>
//     </div>
//   );
// };

// export default CopySection;



// import React from 'react';

// const CopySection = ({ metaData }) => {
//   const copyToClipboard = () => {
//     const metaTags = `
//       <meta property="og:title" content="${metaData['og:title']}" />
//       <meta property="og:description" content="${metaData['og:description']}" />
//       <meta property="og:image" content="${metaData['og:image']}" />
//       <meta property="og:url" content="${metaData['og:url']}" />
//       <meta name="twitter:title" content="${metaData.twitter_title}" />
//       <meta name="twitter:description" content="${metaData.twitter_description}" />
//       <meta name="twitter:image" content="${metaData.twitter_image}" />
//     `;
//     navigator.clipboard.writeText(metaTags).then(() => {
//       alert('Meta tags copied to clipboard!');
//     });
//   };

//   return (
//     <div>
//       <h2>Copy Meta Tags</h2>
//       <button onClick={copyToClipboard}>Copy to Clipboard</button>
//     </div>
//   );
// };

// export default CopySection;



// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';

// const CopySection = ({ metaData }) => {
//   const copyToClipboard = () => {
//     const metaTags = `
//       <meta property="og:title" content="${metaData['og:title']}" />
//       <meta property="og:description" content="${metaData['og:description']}" />
//       <meta property="og:image" content="${metaData['og:image']}" />
//       <meta name="twitter:title" content="${metaData['twitter:title']}" />
//       <meta name="twitter:description" content="${metaData['twitter:description']}" />
//       <meta name="twitter:image" content="${metaData['twitter:image']}" />
//     `;
//     navigator.clipboard.writeText(metaTags).then(() => {
//       alert("Meta tags copied to clipboard!");
//     });
//   };

//   return (
//     <Box>
//       <Typography variant="h5">Copy Meta Tags</Typography>
//       <Typography variant="body1" gutterBottom>
//         Click the button below to copy the meta tags to your clipboard.
//       </Typography>
//       <Button variant="contained" color="primary" onClick={copyToClipboard}>
//         Copy Meta Tags
//       </Button>
//       <Typography variant="body2" component="pre" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
//         {`<meta property="og:title" content="${metaData['og:title']}" />
// <meta property="og:description" content="${metaData['og:description']}" />
// <meta property="og:image" content="${metaData['og:image']}" />
// <meta name="twitter:title" content="${metaData['twitter:title']}" />
// <meta name="twitter:description" content="${metaData['twitter:description']}" />
// <meta name="twitter:image" content="${metaData['twitter:image']}" />`}
//       </Typography>
//     </Box>
//   );
// };

// export default CopySection;



// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';

// const CopySection = ({ metaData }) => {
//   const copyToClipboard = () => {
//     const metaTags = `
//       <meta property="og:title" content="${metaData['og:title']}" />
//       <meta property="og:description" content="${metaData['og:description']}" />
//       <meta property="og:image" content="${metaData['og:image']}" />
//       <meta name="twitter:title" content="${metaData['twitter:title']}" />
//       <meta name="twitter:description" content="${metaData['twitter:description']}" />
//       <meta name="twitter:image" content="${metaData['twitter:image']}" />
//     `;
//     navigator.clipboard.writeText(metaTags).then(() => {
//       alert("Meta tags copied to clipboard!");
//     });
//   };

//   return (
//     <Box>
//       <Typography variant="h5">Copy Meta Tags</Typography>
//       <Typography variant="body1" gutterBottom>
//         Click the button below to copy the meta tags to your clipboard.
//       </Typography>
//       <Button variant="contained" color="primary" onClick={copyToClipboard}>
//         Copy Meta Tags
//       </Button>
//       <Typography variant="body2" component="pre" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
//         {`<meta property="og:title" content="${metaData['og:title']}" />
// <meta property="og:description" content="${metaData['og:description']}" />
// <meta property="og:image" content="${metaData['og:image']}" />
// <meta name="twitter:title" content="${metaData['twitter:title']}" />
// <meta name="twitter:description" content="${metaData['twitter:description']}" />
// <meta name="twitter:image" content="${metaData['twitter:image']}" />`}
//       </Typography>
//     </Box>
//   );
// };

// export default CopySection;



import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const CopySection = ({ metaData }) => {
  const copyToClipboard = () => {
    const metaTags = `
      <meta property="og:title" content="${metaData['og:title']}" />
      <meta property="og:description" content="${metaData['og:description']}" />
      <meta property="og:image" content="${metaData['og:image']}" />
      <meta name="twitter:title" content="${metaData['twitter:title']}" />
      <meta name="twitter:description" content="${metaData['twitter:description']}" />
      <meta name="twitter:image" content="${metaData['twitter:image']}" />
    `;
    navigator.clipboard.writeText(metaTags).then(() => {
      alert("Meta tags copied to clipboard!");
    });
  };

  return (
    <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'primary.main', color: 'white', boxShadow: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Copy Meta Tags
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click the button below to copy the meta tags to your clipboard.
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={copyToClipboard} 
        sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' }, mb: 2 }}
      >
        Copy Meta Tags
      </Button>
      <Typography 
        variant="body2" 
        component="pre" 
        sx={{ 
          whiteSpace: 'pre-wrap', 
          wordWrap: 'break-word', 
          bgcolor: 'rgba(255, 255, 255, 0.1)', 
          p: 2, 
          borderRadius: 1 
        }}
      >
        {`<meta property="og:title" content="${metaData['og:title']}" />\n`}
        {`<meta property="og:description" content="${metaData['og:description']}" />\n`}
        {`<meta property="og:image" content="${metaData['og:image']}" />\n`}
        {`<meta name="twitter:title" content="${metaData['twitter:title']}" />\n`}
        {`<meta name="twitter:description" content="${metaData['twitter:description']}" />\n`}
        {`<meta name="twitter:image" content="${metaData['twitter:image']}" />`}
      </Typography>
    </Box>
  );
};

export default CopySection;
