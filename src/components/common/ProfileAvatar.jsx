import React from 'react';
import Avatar from '@mui/material/Avatar';

const ProfileAvatar = ({ imageUrl, altText, width = 200, height = 200 }) => {
  return (
    <Avatar
      alt={altText}
      src={imageUrl}
      sx={{
        width: width,
        height: height,
        backgroundColor: 'rgb(87, 108, 188)', // fallback color if image fails to load
        border: '2px solid rgb(165, 215, 232)', // new border color
      }}
    />
  );
}

export default ProfileAvatar;
