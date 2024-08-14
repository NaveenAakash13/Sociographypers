import React from 'react';
import { Container, Box, Typography, Link, Grid, Divider } from '@mui/material';
import SocialBar from './SocialBar'; // Import the SocialBar component

const Footer = () => {
  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Divider sx={{ marginBottom: '2rem', color: 'rgb(87, 108, 188)', width: '80%' }} /> {/* Divider above the footer */}
      <Box sx={{ backgroundColor: 'rgb(165, 215, 232)', padding: '2rem 0', fontFamily: 'Roboto, sans-serif' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'rgb(11, 36, 71)' }}>
                About Us
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(11, 36, 71)' }}>
                SocioGraphy is a social platform connecting people and ideas.
              </Typography>
              <Link href="/about" underline="none" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(25, 55, 109)' }}>
                Learn more
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'rgb(11, 36, 71)' }}>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(11, 36, 71)' }}>
                Email: contact@sociography.com
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(11, 36, 71)' }}>
                Phone: +123 456 7890
              </Typography>
              <Link href="/contact" underline="none" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(25, 55, 109)' }}>
                Contact Form
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'rgb(11, 36, 71)' }}>
                Legal
              </Typography>
              <Link href="/privacy-policy" underline="none" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(25, 55, 109)' }}>
                Privacy Policy
              </Link>
              <br />
              <Link href="/terms-of-service" underline="none" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(25, 55, 109)' }}>
                Terms of Service
              </Link>
              <br />
              <Link href="/cookie-policy" underline="none" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(25, 55, 109)' }}>
                Cookie Policy
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, textAlign: 'center', color: 'rgb(11, 36, 71)' }}
              >
                Follow Us
              </Typography>
              <SocialBar /> {/* Add the SocialBar component */}
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(11, 36, 71)' }}>
              &copy; {new Date().getFullYear()} SocioGraphy. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
