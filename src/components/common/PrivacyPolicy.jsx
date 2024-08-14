import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'rgb(238, 238, 238)' }}>
      <Box sx={{ backgroundColor: 'rgb(165, 215, 232)', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(19, 75, 112)' }}>
          We value your privacy. This policy outlines how we collect, use, and protect your personal information when you use SocioGraphy.
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
