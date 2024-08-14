import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CookiePolicy = () => {
  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'rgb(238, 238, 238)' }}>
      <Box sx={{ backgroundColor: 'rgb(165, 215, 232)', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>
          Cookie Policy
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(19, 75, 112)' }}>
          SocioGraphy uses cookies to enhance your experience on our platform. Learn more about how we use cookies and how you can control them.
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Container>
  );
};

export default CookiePolicy;
