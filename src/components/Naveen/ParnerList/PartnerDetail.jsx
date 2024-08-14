import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid
} from '@mui/material';
import { Sheet } from '@mui/joy';
import ProfileAvatar from '../../common/ProfileAvatar';
import axios from 'axios';

const PartnerDetail = () => {
  const [open, setOpen] = useState(false); 
  const [formData, setFormData] = useState({});
  const [contactRequestSent, setContactRequestSent] = useState(false);
  const [loading, setLoading] = useState(true);

  // Assume you have a way to get the current partner's ID or some identifier
  const partnerId = 'current_partner_id'; // This should be replaced with the actual logic to get the ID

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/partners/${partnerId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching partner data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartnerData();
  }, [partnerId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContactRequest = () => {
    setContactRequestSent(true);
    console.log('Contact request sent');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/partners/${partnerId}`, formData);
      console.log('Profile updated:', formData);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    handleClose();
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          pb: 2,
          borderBottom: '2px solid',
          borderColor: 'rgb(87, 108, 188)',
        }}
      >
        <ProfileAvatar 
          imageUrl={formData.imageUrl || 'default_image_url.jpg'} // Fallback if no image
          altText={`${formData.name}'s Profile Picture`} 
          sx={{ width: 182, height: 182 }} 
        />
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h3" 
            sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
          >
            {formData.name}
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(25, 55, 109)' }}
          >
            {formData.tagline}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'rgb(165, 215, 232)',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography sx={{ fontWeight: 'lg', color: 'rgb(11, 36, 71)' }}>
                Likes
              </Typography>
              <Typography sx={{ fontWeight: 'lg', color: 'rgb(11, 36, 71)' }}>{formData.likesCount}</Typography> 
            </div>
            <div>
              <Typography sx={{ fontWeight: 'lg', color: 'rgb(11, 36, 71)' }}> 
                Contacted
              </Typography>
              <Typography sx={{ fontWeight: 'lg', color: 'rgb(11, 36, 71)' }}>{formData.contactedCount}</Typography> 
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
            <Button 
              variant="contained" 
              onClick={handleClickOpen}
              sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(87, 108, 188)', color: 'white' }}
            >
              Edit Profile
            </Button>
            <Button
              variant="contained"
              onClick={handleContactRequest}
              disabled={contactRequestSent}
              sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(25, 55, 109)', color: 'white' }}
            >
              {contactRequestSent ? 'Request Sent' : 'Contact Request'}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom
          sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', borderBottom: '2px solid rgb(87, 108, 188)', display: 'inline-block', paddingBottom: '4px' }}
        >
          Description
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: 'rgb(11, 36, 71)' }}>
          {formData.description}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom
          sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', borderBottom: '2px solid rgb(87, 108, 188)', display: 'inline-block', paddingBottom: '4px' }}
        >
          Address
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: 'rgb(11, 36, 71)' }}>
          {formData.address}
        </Typography>
      </Box>

      <Box>
        <Typography 
          variant="h5" 
          gutterBottom
          sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', borderBottom: '2px solid rgb(87, 108, 188)', display: 'inline-block', paddingBottom: '4px' }}
        >
          Website
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: 'rgb(11, 36, 71)' }}>
          <a href={formData.website} target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(25, 55, 109)' }}>
            {formData.website}
          </a>
        </Typography>
      </Box>

      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { borderRadius: '10px' } }}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                sx={{ color: 'rgb(11, 36, 71)' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tagline"
                name="tagline"
                value={formData.tagline || ''}
                onChange={handleChange}
                sx={{ color: 'rgb(25, 55, 109)' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{ color: 'rgb(87, 108, 188)' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
                sx={{ color: 'rgb(165, 215, 232)' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                value={formData.website || ''}
                onChange={handleChange}
                sx={{ color: 'rgb(11, 36, 71)' }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PartnerDetail;
