import React from 'react';
import { Card, CardContent, Typography, Grid, Paper , AppBar , Toolbar , Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '40px',
  textAlign: 'center',
  background: 'linear-gradient(to bottom, rgb(165, 215, 232), rgb(87, 108, 188))', // Gradient background
  borderRadius: '15px',
  boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 12px rgba(0,0,0,0.2)',
  },
});

const StyledCard = styled(Card)({
  cursor: 'pointer',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  borderRadius: '10px',
  textAlign: 'center',
  padding: '20px',
  boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
  backgroundColor: 'white',
});

const IconStyled = styled('div')({
  fontSize: 80,
  color: 'rgb(25, 55, 109)', // Icon color
});

const SignupSelection = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >

<AppBar position="absolute" color="transparent" elevation={0} sx={{ padding: '10px' }}>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Box component="img" src="Log.png" alt="Logo" sx={{ height: '70px' }} />
    <Typography variant="h6" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}>
      Sociography
    </Typography>
  </Toolbar>
</AppBar>

      <Grid item xs={12} sm={10} md={8}>
        <StyledPaper>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
          >
            Choose Your Role!
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <StyledCard onClick={() => handleCardClick('/photographer-signup')}>
                <CardContent>
                  <IconStyled>
                    <CameraAltIcon />
                  </IconStyled>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ fontFamily: 'League Spartan, sans-serif', marginTop: '10px', color: 'rgb(11, 36, 71)' }}
                  >
                    Photographer
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard onClick={() => handleCardClick('/partner-signup')}>
                <CardContent>
                  <IconStyled>
                    <BusinessCenterIcon />
                  </IconStyled>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ fontFamily: 'League Spartan, sans-serif', marginTop: '10px', color: 'rgb(11, 36, 71)' }}
                  >
                    Partner
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default SignupSelection;
