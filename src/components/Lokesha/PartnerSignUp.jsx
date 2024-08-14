import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, IconButton, InputAdornment, Box, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import axios from 'axios'; // Adjust the path as necessary
import { useAuth } from '../common/AuthContext';

const PartnerSignUp = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [organizationDetails, setOrganizationDetails] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {signup} = useAuth();

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic((e.target.files[0]));
    }
  };

  // const handleSignup = async () => {
  //   const newPartner = {
  //     name,
  //     username,
  //     password,
  //     email,
  //     phone,
  //     profilePic,
  //     organizationDetails,
  //     tagline,
  //     description,
  //   };

  //   try {
  //     // Make sure to send profilePic as a URL or handle it properly if you need to upload the file
  //     await axios.post('/partners', newPartner);
  //     console.log('Partner signed up successfully');
  //     navigate('/home');
  //   } catch (error) {
  //     console.error('Error signing up partner:', error);
  //   }
  // };

  const handleSignup = async () => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('organizationDetails', organizationDetails);
        formData.append('tagline', tagline);
        formData.append('description', description);

        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        const response = await axios.post('http://localhost:8080/api/partners/signup', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        // Handle response as needed
        console.log('Signup successful:', response.data);
        navigate('/');
    } catch (error) {
        console.error('Error signing up partner:', error);
    }
};

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', padding: '20px', backgroundColor: 'rgb(165, 215, 232)' }} // Background color
    >
      <AppBar position="absolute" color="transparent" elevation={0} sx={{ padding: '10px' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="Log.png" alt="Logo" sx={{ height: '70px' }} />
          <Typography variant="h6" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}>
            Sociography
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid item xs={12} sm={10} md={6}>
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
          >
            Partner Sign Up
          </Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profile-pic"
                  type="file"
                  onChange={handleProfilePicChange}
                />
                <label htmlFor="profile-pic">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<PhotoCameraIcon />}
                    sx={{
                      backgroundColor: 'rgb(25, 55, 109)', // Button background color
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgb(11, 36, 71)', // Button hover color
                      }
                    }}
                  >
                    Upload Profile Picture
                  </Button>
                </label>
                {profilePic && (
                  <Box mt={2} textAlign="center">
                    <img
                      src={profilePic}
                      alt="Profile Preview"
                      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                  </Box>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Organization Details"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={organizationDetails}
                  onChange={(e) => setOrganizationDetails(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tagline"
                  variant="outlined"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(25, 55, 109)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(87, 108, 188)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                    '& .MuiInput-root': {
                      color: 'rgb(11, 36, 71)',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSignup}
                  sx={{
                    backgroundColor: 'rgb(25, 55, 109)', // Button background color
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgb(11, 36, 71)', // Button hover color
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PartnerSignUp;
