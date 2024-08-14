import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialBar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'rgb(11, 36, 71)' }} // Updated color
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'rgb(25, 55, 109)' }} // Updated color
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'rgb(87, 108, 188)' }} // Updated color
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'rgb(165, 215, 232)' }} // Updated color
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default SocialBar;
