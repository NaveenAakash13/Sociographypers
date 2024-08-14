import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'rgb(238, 238, 238)' }}>
      <Box sx={{ backgroundColor: 'rgb(165, 215, 232)', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>
          Terms of Service
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(19, 75, 112)' }}>
          By using SocioGraphy, you agree to comply with our terms and conditions. This document outlines your rights and responsibilities when using our platform.
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Container>
  );
};

export default TermsOfService;
