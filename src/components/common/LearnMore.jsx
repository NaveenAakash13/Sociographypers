import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const LearnMore = () => {
  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'rgb(238, 238, 238)' }}>
      <Box sx={{ backgroundColor: 'rgb(165, 215, 232)', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>
          Learn More About SocioGraphy
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(19, 75, 112)' }}>
          SocioGraphy is a cutting-edge social media platform tailored for photographers and visual artists. Our goal is to connect creatives from around the world and provide them with a space to showcase their work, collaborate, and grow their careers.
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Container>
  );
};

export default LearnMore;