// import React, { useState } from 'react';
// import { TextField, Button, Grid, Typography, IconButton, InputAdornment, Paper, Box, AppBar, Toolbar } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async () => {
//     try {
//       const params = new URLSearchParams();
//       params.append('username', username);
//       params.append('password', password);

//       const response = await axios.post('http://localhost:8080/api/auth/login', params, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });

//       if (response.status === 200 && (response.data === "Partner login successful" || response.data === "Photographer login successful")) {
//         navigate('/home');
//       } else {
//         setErrorMessage('Invalid username or password'); // Set error message for invalid credentials
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Invalid username or password'); // Set error message on exception
//     }
//   };

//   const handleRegister = () => {
//     navigate('/signup-selection'); // Redirect to the signup page
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       sx={{ minHeight: '100vh', padding: '20px', backgroundColor: 'rgb(165, 215, 232)' }} // Background color
//     >
//       <AppBar position="absolute" color="transparent" elevation={0} sx={{ padding: '10px' }}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Box component="img" src="Log.png" alt="Logo" sx={{ height: '70px' }} />
//           <Typography variant="h6" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}>
//             Sociography
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Paper elevation={6} sx={{ padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
//             <Typography
//               variant="h4"
//               align="center"
//               gutterBottom
//               sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
//             >
//               Welcome back! Log in to your account
//             </Typography>
//             <Box component="form" noValidate autoComplete="off">
//               <TextField
//                 fullWidth
//                 label="Username"
//                 margin="normal"
//                 variant="outlined"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 sx={{
//                   fontFamily: 'League Spartan, sans-serif',
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'rgb(25, 55, 109)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'rgb(87, 108, 188)',
//                     },
//                   },
//                   '& .MuiInputLabel-root': {
//                     color: 'rgb(11, 36, 71)',
//                   },
//                   '& .MuiInput-root': {
//                     color: 'rgb(11, 36, 71)',
//                   },
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 margin="normal"
//                 variant="outlined"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={handlePasswordChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   )
//                 }}
//                 sx={{
//                   fontFamily: 'League Spartan, sans-serif',
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'rgb(25, 55, 109)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'rgb(87, 108, 188)',
//                     },
//                   },
//                   '& .MuiInputLabel-root': {
//                     color: 'rgb(11, 36, 71)',
//                   },
//                   '& .MuiInput-root': {
//                     color: 'rgb(11, 36, 71)',
//                   },
//                 }}
//               />
//               {errorMessage && (
//                 <Typography variant="body2" color="error" align="center" sx={{ marginTop: '10px' }}>
//                   {errorMessage}
//                 </Typography>
//               )}
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   onClick={handleLogin}
//                   sx={{
//                     fontFamily: 'League Spartan, sans-serif',
//                     marginTop: '20px',
//                     backgroundColor: 'rgb(25, 55, 109)', // Button background color
//                     color: 'white',
//                     '&:hover': {
//                       backgroundColor: 'rgb(11, 36, 71)', // Button hover color
//                     },
//                     borderRadius: '20px', // Add rounded corners
//                     padding: '10px 20px', // Adjust padding
//                   }}
//                 >
//                   Login
//                 </Button>
//               </motion.div>
//             </Box>
//             <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
//               Don't have an account? <Button onClick={handleRegister} sx={{ color: 'rgb(25, 55, 109)' }}>Register</Button>
//             </Typography>
//           </Paper>
//         </motion.div>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, IconButton, InputAdornment, Paper, Box, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { motion } from 'framer-motion';
import { useAuth } from '../common/AuthContext'; // Import the useAuth hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const { login } = useAuth(); // Use the login function from the context
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Invalid email or password'); // Set error message on exception
    }
  };

  const handleRegister = () => {
    navigate('/signup-selection'); // Redirect to the signup page
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', padding: '20px', backgroundColor: 'rgb(165, 215, 232)' }} // Background color
    >
      <AppBar position="absolute" color="transparent" elevation={0} sx={{ padding: '10px' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="Log.png" alt="Logo" sx={{ height: '70px' }} />
          <Typography variant="h6" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}>
            Sociography
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={6} sx={{ padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(11, 36, 71)' }}
            >
              Welcome back! Log in to your account
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
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
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
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
              {errorMessage && (
                <Typography variant="body2" color="error" align="center" sx={{ marginTop: '10px' }}>
                  {errorMessage}
                </Typography>
              )}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  sx={{
                    fontFamily: 'League Spartan, sans-serif',
                    marginTop: '20px',
                    backgroundColor: 'rgb(25, 55, 109)', // Button background color
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgb(11, 36, 71)', // Button hover color
                    },
                    borderRadius: '20px', // Add rounded corners
                    padding: '10px 20px', // Adjust padding
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </Box>
            <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
              Don't have an account? <Button onClick={handleRegister} sx={{ color: 'rgb(25, 55, 109)' }}>Register</Button>
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
