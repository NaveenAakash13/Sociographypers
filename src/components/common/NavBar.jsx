// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { Container, Box, Menu, MenuItem, Avatar } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import NotificationDropdown from './NotificationDropdown';
// import logo from '../Naveen/pics/Log.png';
// import { useAuth } from '../common/AuthContext';
// import axios from '../common/axiosInstance';
// import { convertToBase64 } from '../common/convertToBase64'

// const Navbar = () => {
//   const [query, setQuery] = useState('');
//   // const [anchorEl, setAnchorEl] = useState(null);
//   // const [profilePicture, setProfilePicture] = useState('path/to/defaultProfilePic.jpg'); // Define the state
//   const { authState, logout } = useAuth();

//   // useEffect(() => {
//   //   if (authState.token) {
//   //     fetchProfilePicture(authState.token);
//   //   }
//   // }, [authState.token]);

//   // const fetchProfilePicture = async (token) => {
//   //   try {
//   //     const response = await axios.get('http://localhost:8080/api/user/profile-picture', {
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     }); 
//   //     setProfilePicture(convertToBase64(response.data.profilePic) || '');
//   //   } catch (error) {
//   //     console.error('Failed to fetch profile picture', error);
//   //   }
//   // };

//   const [authenticated, setAuthenticated] = useState(false);
//   const [profilePic, setProfilePic] = useState('');
//   const navigate = useNavigate();
//   const { mode, photographerId } = authState;

//   useEffect(() => {
//     setAuthenticated(!!authState.token);

//     // Fetch profile picture based on mode
//     if (mode && (mode === 'partner' || mode === 'photographer')) {
//       axios.get(`/${mode === 'partner' ? 'partners' : 'photographers'}/${photographerId}`)
//         .then(response => {
//           const profileData = response.data;
//           console.log(profileData);
//           setProfilePic(convertToBase64(profileData.profilePic) || ''); // Assuming 'profilePic' is the key
//         })
//         .catch(error => {
//           console.error('Error fetching profile picture:', error);
//         });
//     }
//   }, [mode, photographerId]);

//   const handleSearchChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     if (event.key === 'Enter' && query.trim()) {
//       navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   const handleAvatarClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = () => {
//     navigate('/profile');
//     handleMenuClose();
//   };

//   const handleLogoutClick = () => {
//     logout(); // Call the logout function
//     navigate('/'); // Redirect to login page after logout
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'rgb(11, 36, 71)' }}>
//       <Container>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             <Typography 
//               component={Link} 
//               to="/home" 
//               variant="h6" 
//               sx={{ 
//                 color: 'rgb(165, 215, 232)', 
//                 fontFamily: 'League Spartan, sans-serif', 
//                 fontWeight: 600, 
//                 textDecoration: 'none' 
//               }}
//             >
//               SocioGraphy.
//             </Typography>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
//             <TextField
//               variant="outlined"
//               placeholder="Search..."
//               value={query}
//               onChange={handleSearchChange}
//               onKeyDown={handleSearchSubmit}
//               sx={{
//                 width: '50%',
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'rgb(165, 215, 232)',
//                 },
//               }}
//             />
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button 
//               color="inherit" 
//               sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(165, 215, 232)' }} 
//               component={Link} 
//               to="/partner-listing"
//             >
//               Partners
//             </Button>
//             <NotificationDropdown />
//             <Avatar 
//               alt="Profile"
//               src={`data:image/jpeg;base64,${profilePicture}`}
//               sx={{ marginLeft: 2, cursor: 'pointer', bgcolor: 'rgb(25, 55, 109)' }}
//               onClick={handleAvatarClick}
//               onError={(e) => { e.target.src = 'path/to/defaultProfilePic.jpg'; }}
//             />
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               PaperProps={{
//                 sx: {
//                   maxHeight: 48 * 4.5,
//                   width: '20ch',
//                   backgroundColor: 'rgb(25, 55, 109)',
//                   color: 'rgb(165, 215, 232)',
//                 },
//               }}
//             >
//               <MenuItem onClick={handleProfileClick}>
//                 Profile
//               </MenuItem>
//               <MenuItem onClick={handleLogoutClick}>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

//-------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { Container, Box, Menu, MenuItem, Avatar } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import NotificationDropdown from './NotificationDropdown';
// import logo from '../Naveen/pics/Log.png';
// import { useAuth } from '../common/AuthContext';
// import axios from '../common/axiosInstance';
// import { convertToBase64 } from '../common/convertToBase64'

// const Navbar = () => {
//   const [query, setQuery] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl and setAnchorEl
//   const [profilePic, setProfilePic] = useState(''); // Define profilePic
//   const { authState, logout } = useAuth();
//   const [authenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate();
//   const { mode, photographerId } = authState;

//   useEffect(() => {
//     if (authState.token) {
//       setAuthenticated(!!authState.token);

//       // Fetch profile picture based on mode
//       if (mode && (mode === 'partner' || mode === 'photographer')) {
//         axios.get(`/${mode === 'partner' ? 'partners' : 'photographers'}/${photographerId}`)
//           .then(response => {
//             const profileData = response.data;
//             console.log(profileData);
//             setProfilePic(convertToBase64(profileData.profilePic) || ''); // Assuming 'profilePic' is the key
//           })
//           .catch(error => {
//             console.error('Error fetching profile picture:', error);
//           });
//       }
//     }
//   }, [mode, photographerId, authState.token]);

//   const handleSearchChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     if (event.key === 'Enter' && query.trim()) {
//       navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   const handleAvatarClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = () => {
//     navigate('/profile');
//     handleMenuClose();
//   };

//   const handleLogoutClick = () => {
//     logout(); // Call the logout function
//     navigate('/'); // Redirect to login page after logout
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'rgb(11, 36, 71)' }}>
//       <Container>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
//             <Typography 
//               component={Link} 
//               to="/home" 
//               variant="h6" 
//               sx={{ 
//                 color: 'rgb(165, 215, 232)', 
//                 fontFamily: 'League Spartan, sans-serif', 
//                 fontWeight: 600, 
//                 textDecoration: 'none' 
//               }}
//             >
//               SocioGraphy.
//             </Typography>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
//             <TextField
//               variant="outlined"
//               placeholder="Search..."
//               value={query}
//               onChange={handleSearchChange}
//               onKeyDown={handleSearchSubmit}
//               sx={{
//                 width: '50%',
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'rgb(87, 108, 188)',
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'rgb(165, 215, 232)',
//                 },
//               }}
//             />
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button 
//               color="inherit" 
//               sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(165, 215, 232)' }} 
//               component={Link} 
//               to="/partner-listing"
//             >
//               Partners
//             </Button>
//             <NotificationDropdown />
//             <Avatar 
//               alt="Profile"
//               src={`data:image/jpeg;base64,${profilePic}`}
//               sx={{ marginLeft: 2, cursor: 'pointer', bgcolor: 'rgb(25, 55, 109)' }}
//               onClick={handleAvatarClick}
//               onError={(e) => { e.target.src = 'path/to/defaultProfilePic.jpg'; }} // Update path if necessary
//             />
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               PaperProps={{
//                 sx: {
//                   maxHeight: 48 * 4.5,
//                   width: '20ch',
//                   backgroundColor: 'rgb(25, 55, 109)',
//                   color: 'rgb(165, 215, 232)',
//                 },
//               }}
//             >
//               <MenuItem onClick={handleProfileClick}>
//                 Profile
//               </MenuItem>
//               <MenuItem onClick={handleLogoutClick}>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Box, Menu, MenuItem, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown';
import logo from '../Naveen/pics/Log.png';
import { useAuth } from '../common/AuthContext';
import axios from '../common/axiosInstance';
import { convertToBase64 } from '../common/convertToBase64';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const { authState, logout } = useAuth();
  const navigate = useNavigate();
  const { mode, photographerId } = authState;

  useEffect(() => {
    if (authState.token) {
      // Fetch profile picture based on mode
      if (mode && (mode === 'partner' || mode === 'photographer')) {
        axios.get(`/${mode === 'partner' ? 'partners' : 'photographers'}/${photographerId}`)
          .then(response => {
            const profileData = response.data;
            console.log(profileData)
            const base64Pic = convertToBase64(profileData.profilePic); // Ensure profileData.profilePic is valid
            setProfilePic(base64Pic);
            console.log(profilePic)
            //setProfilePic(convertToBase64(profileData.ph_profilepic) || '');
          })
          .catch(error => {
            console.error('Error fetching profile picture:', error);
          });
      }
    }
  }, [mode, photographerId, authState.token]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    logout(); // Call the logout function
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(11, 36, 71)' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography 
              component={Link} 
              to="/home" 
              variant="h6" 
              sx={{ 
                color: 'rgb(165, 215, 232)', 
                fontFamily: 'League Spartan, sans-serif', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}
            >
              SocioGraphy.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              sx={{
                width: '50%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(87, 108, 188)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(87, 108, 188)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(87, 108, 188)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'rgb(165, 215, 232)',
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              color="inherit" 
              sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(165, 215, 232)' }} 
              component={Link} 
              to="/partner-listing"
            >
              Partners
            </Button>
            <NotificationDropdown />
            <Avatar 
              alt="Profile"
              src={profilePic}
              sx={{ marginLeft: 2, cursor: 'pointer', bgcolor: 'rgb(25, 55, 109)' }}
              onClick={handleAvatarClick}
              // onError={(e) => { e.target.src = 'path/to/defaultProfilePic.jpg'; }} // Ensure the path is correct
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                  backgroundColor: 'rgb(25, 55, 109)',
                  color: 'rgb(165, 215, 232)',
                },
              }}
            >
              <MenuItem onClick={handleProfileClick}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogoutClick}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
