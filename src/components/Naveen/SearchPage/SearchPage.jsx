// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import axios from '../../common/axiosInstance'; // Adjust import path as necessary

// // const SearchPage = () => {
// //   const [query, setQuery] = useState('');
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSearch = async () => {
// //     if (query.trim()) {
// //       try {
// //         const response = await axios.get('http://localhost:8080/pictures/search', { // Full URL
// //           params: { keyword: query.trim() } // Ensure parameter name matches the backend
// //         });
// //         const results = response.data;
// //         console.log(results);
// //         if (results.length > 0) {
// //           navigate('/search-results', { state: { results } }); // Ensure this route exists
// //         } else {
// //           setError('No results found. Please try a different query.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching search results:', error);
// //         setError('Failed to fetch search results. Please try again.');
// //       }
// //     } else {
// //       setError('Please enter a search query.');
// //     }
// //   };
  

// //   return (
// //     <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //       <TextField
// //         variant="outlined"
// //         placeholder="Search..."
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //         sx={{
// //           width: '50%',
// //           '& .MuiOutlinedInput-root': {
// //             borderRadius: '25px',
// //             backgroundColor: 'white',
// //             '& fieldset': {
// //               borderColor: 'transparent',
// //             },
// //             '&:hover fieldset': {
// //               borderColor: 'transparent',
// //             },
// //             '&.Mui-focused fieldset': {
// //               borderColor: 'transparent',
// //             },
// //           },
// //         }}
// //         InputProps={{
// //           style: {
// //             paddingLeft: '15px',
// //             paddingRight: '15px',
// //           },
// //         }}
// //       />
// //       <Button
// //         onClick={handleSearch}
// //         variant="contained"
// //         sx={{
// //           marginLeft: '10px',
// //           borderRadius: '25px',
// //           padding: '10px 20px',
// //           backgroundColor: '#50c878',
// //           '&:hover': {
// //             backgroundColor: '#45b36b',
// //           },
// //         }}
// //       >
// //         Search
// //       </Button>
// //       {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
// //     </Box>
// //   );
// // };

// // export default SearchPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import axios from '../../common/axiosInstance'; // Adjust import path as necessary

// const SearchPage = () => {
//   const [query, setQuery] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     if (query.trim()) {
//       try {
//         const response = await axios.get('http://localhost:8080/pictures/search', { // Full URL
//           params: { keyword: query.trim() } // Ensure parameter name matches the backend
//         });
//         const results = response.data;
//         console.log(results);
//         if (results.length > 0) {
//           navigate('/search-results', { state: { results } }); // Ensure this route exists
//         } else {
//           setError('No results found. Please try a different query.');
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//         setError('Failed to fetch search results. Please try again.');
//       }
//     } else {
//       setError('Please enter a search query.');
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <TextField
//         variant="outlined"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyPress}
//         sx={{
//           width: '50%',
//           '& .MuiOutlinedInput-root': {
//             borderRadius: '25px',
//             backgroundColor: 'white',
//             '& fieldset': {
//               borderColor: 'transparent',
//             },
//             '&:hover fieldset': {
//               borderColor: 'transparent',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: 'transparent',
//             },
//           },
//         }}
//         InputProps={{
//           style: {
//             paddingLeft: '15px',
//             paddingRight: '15px',
//           },
//         }}
//       />
//       <Button
//         onClick={handleSearch}
//         variant="contained"
//         sx={{
//           marginLeft: '10px',
//           borderRadius: '25px',
//           padding: '10px 20px',
//           backgroundColor: '#50c878',
//           '&:hover': {
//             backgroundColor: '#45b36b',
//           },
//         }}
//       >
//         Search
//       </Button>
//       {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//     </Box>
//   );
// };

// export default SearchPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
    } else {
      setError('Please enter a search query.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        sx={{
          width: '50%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            backgroundColor: 'white',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
        InputProps={{
          style: {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
        }}
      />
      <Button
        onClick={handleSearch}
        variant="contained"
        sx={{
          marginLeft: '10px',
          borderRadius: '25px',
          padding: '10px 20px',
          backgroundColor: '#50c878',
          '&:hover': {
            backgroundColor: '#45b36b',
          },
        }}
      >
        Search
      </Button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </Box>
  );
};

export default SearchPage;
