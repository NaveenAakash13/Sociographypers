// import React from 'react';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import Link from '@mui/joy/Link';
// import Divider from '@mui/joy/Divider';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// const PostCard = ({
//   src,
//   description,
//   location,
//   date,
//   likes,
//   author,
//   avatar,
//   category,
//   comments,
//   onClick
// }) => {
//   return (
//     <Card
//       variant="outlined"
//       sx={{
//         width: '300px', // Adjusted width
//         height: '350px', // Adjusted height
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden',
//         gap: 1,
//         position: 'relative',
//         transition: 'transform 0.3s, border 0.3s',
//         backgroundColor: 'rgb(11, 36, 71)',
//         color: 'rgb(165, 215, 232)',
//         '&:hover': {
//           borderColor: 'rgb(87, 108, 188)',
//           transform: 'translateY(-1px)'
//         },
//       }}
//       onClick={onClick}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           height: '50%', // Adjusted to take half of the card height
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <img
//           src={src}
//           alt={description}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           p: 1,
//           height: '50%', // Adjusted to take half of the card height
//           backgroundColor: 'rgb(25, 55, 109)',
//           color: 'rgb(25, 55, 109)',
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//           <Avatar src={avatar} alt={author} sx={{ mr: 1 }} />
//           <Typography variant="plain" fontWeight="bold" sx={{ color: 'rgb(165, 215, 232)' }}>
//             {author}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
//             <IconButton
//               size="sm"
//               variant="plain"
//               color="neutral"
//               sx={{ color: 'rgb(165, 215, 232)' }}
//             >
//               <FavoriteBorderRoundedIcon />
//             </IconButton>
//           </Box>
//         </Box>
//         <Box sx={{ mt: 'auto' }}>
//           <Typography level="h6" sx={{ mb: 1 }}>
//             <Link
//               href="#"
//               underline="none"
//               sx={{ color: 'rgb(165, 215, 232)', '&:hover': { textDecoration: 'underline' } }}
//             >
//               {description}
//             </Link>
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="body2" sx={{ color: 'rgb(165, 215, 232)' }}>
//               {location}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'rgb(165, 215, 232)' }}>
//               {date}
//             </Typography>
//           </Box>
//           {comments && comments.length > 0 && (
//             <Box sx={{ mt: 1 }}>
//               <Divider sx={{ backgroundColor: 'rgb(87, 108, 188)' }} />
//               <Typography variant="body2" sx={{ mt: 1, color: 'rgb(165, 215, 232)' }}>
//                 {comments[0].user}: {comments[0].text} <Link href="#" sx={{ color: 'rgb(165, 215, 232)' }}>more...</Link>
//               </Typography>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default PostCard;

import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';

const PostCard = ({ src, onClick }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '300px', // Adjusted width
        height: '300px', // Adjusted height to make it square
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        gap: 1,
        position: 'relative',
        transition: 'transform 0.3s, border 0.3s',
        backgroundColor: 'rgb(165, 215, 232)',
        color: 'rgb(165, 215, 232)',
        borderColor: 'rgb(165, 215, 232)', // Set border color to match the background
        '&:hover': {
          borderColor: 'rgb(87, 108, 188)',
          transform: 'translateY(-1px)'
        },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%', // Adjusted to take the full card height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={src}
          alt="Post"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Card>
  );
};

export default PostCard;
