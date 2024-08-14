// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// const PartnerCard = ({ id, title, description, imageUrl }) => {
//   return (
//     <Card 
//       sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         bgcolor: 'rgb(11, 36, 71)', 
//         color: 'rgb(165, 215, 232)', 
//         boxShadow: 3,
//         transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
//         '&:hover': {
//           transform: 'scale(1.05)', // Scale up the card
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increased shadow for floating effect
//         },
//       }}
//     >
//       <Avatar 
//         src={`data:image/jpeg;base64,${imageUrl}`} 
//         alt={title} 
//         sx={{ 
//           width: 100, 
//           height: 100, 
//           m: 2 
//         }} 
//       />
//       <CardContent sx={{ flex: '1 0 auto' }}>
//         <Typography component="div" variant="h5" color="rgb(165, 215, 232)">
//           {title}
//         </Typography>
//         <Typography variant="subtitle1" color="rgb(165, 215, 232)">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
//         <Stack direction="row" spacing={2}>
//           <Button variant="contained" color="primary">Connect</Button>
//           <Button variant="contained" component={Link} to={`/partner-profile`} color="secondary">Learn More</Button>
//         </Stack>
//       </CardActions>
//     </Card>
//   );
// };

// export default PartnerCard;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const PartnerCard = ({ id, title, description, imageUrl }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: 'rgb(11, 36, 71)', 
        color: 'rgb(165, 215, 232)', 
        boxShadow: 3,
        transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
        '&:hover': {
          transform: 'scale(1.05)', // Scale up the card
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increased shadow for floating effect
        },
      }}
    >
      <Avatar 
        src={`data:image/jpeg;base64,${imageUrl}`} 
        alt={title} 
        sx={{ 
          width: 100, 
          height: 100, 
          m: 2 
        }} 
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" color="rgb(165, 215, 232)">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="rgb(165, 215, 232)">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 2 }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">Connect</Button>
          <Button variant="contained" component={Link} to={`/partner-page/${id}`} color="secondary">Learn More</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PartnerCard;
