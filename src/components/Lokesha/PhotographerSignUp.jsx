import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Box, IconButton, InputAdornment, Slide, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import axios from 'axios'; // Adjust the path as necessary
import { useAuth } from '../common/AuthContext';

const StyledPaper = styled(Paper)({
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0px 6px 12px rgba(0,0,0,0.1)',
  backgroundColor: 'white',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 12px 24px rgba(0,0,0,0.2)',
  },
});

const StyledButton = styled(Button)({
  fontFamily: 'League Spartan, sans-serif',
  marginTop: '20px',
  backgroundColor: 'rgb(25, 55, 109)', // Button background color
  color: 'white',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgb(11, 36, 71)', // Button hover color
  },
});

const PhotographerSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [selfInfo, setSelfInfo] = useState('');
  const [location, setLocation] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {signup} = useAuth();

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  // const handleSignup = async () => {
  //   const newPhotographer = {
  //     name,
  //     username,
  //     password,
  //     dob,
  //     profilePic,
  //     selfInfo,
  //     location,
  //     contactNo,
  //     email,
  //   };

  //   try {
  //     await axios.post('/photographers', newPhotographer);
  //     console.log('Photographer signed up successfully');
  //     navigate('/home');
  //   } catch (error) {
  //     console.error('Error signing up photographer:', error);
  //   }
  // };
  const handleSignup = async () => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('dob', dob);
        formData.append('selfInfo', selfInfo);
        formData.append('location', location);
        formData.append('contactNo', contactNo);
        formData.append('email', email);
        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        const response = await axios.post('http://localhost:8080/api/signup/photographer', formData);
        console.log(response.data);
        // Assuming the token is included in the response data
        const token = response.data.split('Token: ')[1];
        console.log(response.data.split('Token: ')[1]);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('mode', 'photographer');
        localStorage.setItem('photographerId', response.data.photographerId);
        await signup(); // Adjust according to response structure

        // Redirect or handle successful signup
        navigate('/');
    } catch (error) {
        console.error('Signup error:', error);
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

      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Grid item xs={12} sm={10} md={6}>
          <StyledPaper>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
            >
              Photographer Sign Up
            </Typography>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="profile-pic"
                    type="file"
                    onChange={handleProfilePicChange}
                  />
                  <label htmlFor="profile-pic">
                    <StyledButton
                      variant="contained"
                      component="span"
                      startIcon={<PhotoCameraIcon />}
                    >
                      Upload Profile Picture
                    </StyledButton>
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
                    label="Email or Phone"
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
                    label="Date of Birth"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
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
                    label="Location"
                    variant="outlined"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
                    label="Self Intro"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={selfInfo}
                    onChange={(e) => setSelfInfo(e.target.value)}
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
                  <StyledButton
                    fullWidth
                    variant="contained"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </StyledButton>
                </Grid>
              </Grid>
            </form>
          </StyledPaper>
        </Grid>
      </Slide>
    </Grid>
  );
};

export default PhotographerSignUp;
