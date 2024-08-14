import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProfileAvatar from './ProfileAvatar';

export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 800, // Increased width
        display: 'flex',
        boxShadow: 3, // Initial shadow
        borderRadius: 2, // Rounded corners
        backgroundColor: 'rgb(165, 215, 232)', // Background color updated
        padding: 2, // Padding inside the card
        transition: 'all 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          boxShadow: 6, // Increased shadow on hover
          transform: 'translateY(-10px)', // Moves the card up on hover
        },
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ paddingLeft: 2 }}>
          <ProfileAvatar imageUrl="/profilepic1.jpg" altText="Profile Picture" height="150px" width="150px" />
        </Grid>
        <Grid item xs>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(11, 36, 71)' }}>
              Lizard
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'League Spartan, sans-serif', fontSize: '1.1rem', color: 'rgb(25, 55, 109)' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontFamily: 'League Spartan, sans-serif', color: 'white', backgroundColor: 'rgb(87, 108, 188)', '&:hover': { backgroundColor: 'rgb(25, 55, 109)' } }}>
              Connect
            </Button>
            <Button size="small" sx={{ fontFamily: 'League Spartan, sans-serif', color: 'white', backgroundColor: 'rgb(87, 108, 188)', '&:hover': { backgroundColor: 'rgb(25, 55, 109)' } }}>
              Learn More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
