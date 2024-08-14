// import React, { useState, useEffect } from 'react';
// import {
//   Grid, Typography, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, TextField
// } from '@mui/material';
// import ProfileAvatar from '../common/ProfileAvatar';
// import DribbbleShot from '../common/DribbbleShot';
// import UploadDialog from './UploadDialog';
// import { useAuth } from '../common/AuthContext';

// const About = () => {
//   const { authState } = useAuth();
//   const [profileData, setProfileData] = useState({});
//   const [images, setImages] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [contactRequestSent, setContactRequestSent] = useState(false);
//   const [followed, setFollowed] = useState(false);

//   useEffect(() => {
//     if (!authState) return;
//     const token = authState.token;
//     const email = authState.email;

//     // Fetch profile data
//     fetch(`http://localhost:8080/photographers/email/${email}`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       credentials: 'include',
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Profile Data:', data.photographer);
//         if (data.photographer.ph_profilepic) {
//           data.photographer.imageUrl = convertToBase64(data.photographer.ph_profilepic);
//         }
//         setProfileData(data.photographer);
//         setFormData(data.photographer);
//       })
//       .catch(error => console.error('Error fetching profile data:', error));

//     // Fetch images
//     fetch(`http://localhost:8080/photographers/${email}/pictures`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       credentials: 'include',
//     })
//       .then(response => response.json())
//       .then(data => {
//         const imagesWithBase64 = data.map(image => ({
//           ...image,
//           picture: convertToBase64(image.picture)
//         }));
//         setImages(imagesWithBase64);
//       })
//       .catch(error => console.error('Error fetching pictures:', error));
//   }, [authState]);

//   const convertToBase64 = (data) => {
//     return `data:image/jpeg;base64,${data}`;
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleContactRequest = () => {
//     setContactRequestSent(true);
//     console.log('Contact request sent');
//   };
//   const handleFollow = () => {
//     setFollowed(!followed);
//     console.log(followed ? 'Unfollowed' : 'Followed');
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const handleSave = () => {
//     console.log(formData);
//     handleClose();
//   };

//   return (
//     <div style={{ padding: '40px', backgroundColor: 'rgb(165, 215, 232)' }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <ProfileAvatar imageUrl={convertToBase64(profileData.profilePic)} altText={profileData.name} />
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Typography variant="h4" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(32, 30, 67)' }}>
//             {profileData.name}
//           </Typography>
//           <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', marginBottom: '10px', color: 'rgb(19, 75, 112)' }}>
//             {profileData.bio}
//           </Typography>
//           <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)', mb: 2 }}>
//             Followers: {profileData.followersCount} | Following: {profileData.followingCount}
//           </Typography>
//           <Grid container spacing={2} sx={{ mt: 2 }}>
//             <Grid item>
//               <Button variant="contained" sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(32, 30, 67)', color: 'rgb(165, 215, 232)' }} onClick={handleClickOpen}>
//                 Edit Profile
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(19, 75, 112)', color: 'white' }}
//                 onClick={handleContactRequest}
//                 disabled={contactRequestSent}
//               >
//                 {contactRequestSent ? 'Request Sent' : 'Contact Request'}
//               </Button>
//             </Grid>
//             <Grid item>
//               <UploadDialog
//                 onUploadStart={() => console.log('Upload started')}
//                 onUploadEnd={(success) => console.log(`Upload ${success ? 'succeeded' : 'failed'}`)}
//               />
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(80, 140, 155)', color: 'white' }}
//                 onClick={handleFollow}
//               >
//                 {followed ? 'Unfollow' : 'Follow'}
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Divider sx={{ marginY: 4, borderColor: 'rgb(11, 36, 71)' }} />

//       <Grid container spacing={2}>
//         {images.map((image) => (
//           <Grid item xs={12} sm={6} md={4} key={image.id}>
//             <DribbbleShot
//               image={image.picture}
//               description={image.description}
//               location={image.location}
//               date={image.date}
//               likes={image.likes}
//               author={profileData.name}
//               avatar={profileData.imageUrl}
//               category={image.category}
//               initialComments={image.comments}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: 'rgb(238, 238, 238)' } }}>
//         <DialogTitle sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>Edit Profile</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             name="name"
//             label="Name"
//             type="text"
//             fullWidth
//             value={formData.name || ''}
//             onChange={handleChange}
//             sx={{ marginBottom: '20px', backgroundColor: 'white' }}
//           />
//           <TextField
//             margin="dense"
//             name="bio"
//             label="Bio"
//             type="text"
//             fullWidth
//             value={formData.bio || ''}
//             onChange={handleChange}
//             multiline
//             rows={4}
//             sx={{ marginBottom: '20px', backgroundColor: 'white' }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>Cancel</Button>
//           <Button onClick={handleSave} sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(19, 75, 112)' }}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default About;
import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import ProfileAvatar from '../common/ProfileAvatar';
import DribbbleShot from '../common/DribbbleShot';
import UploadDialog from './UploadDialog';
import { useAuth } from '../common/AuthContext';

const About = () => {
  const { authState } = useAuth();
  const [profileData, setProfileData] = useState({});
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [contactRequestSent, setContactRequestSent] = useState(false);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (!authState) return;
    const token = authState.token;
    const email = authState.email;

    // Fetch profile data
    fetch(`http://localhost:8080/photographers/email/${email}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Profile Data:', data.photographer);
        if (data.photographer.ph_profilepic) {
          data.photographer.imageUrl = convertToBase64(data.photographer.ph_profilepic);
        }
        setProfileData(data.photographer);
        setFormData(data.photographer);
      })
      .catch(error => console.error('Error fetching profile data:', error));

    // Fetch images
    fetch(`http://localhost:8080/photographers/${email}/pictures`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        const imagesWithBase64 = data.map(image => ({
          ...image,
          picture: convertToBase64(image.picture)
        }));
        setImages(imagesWithBase64);
      })
      .catch(error => console.error('Error fetching pictures:', error));

    const photographerId = profileData.id;

    // Fetch follower count
    fetch(`http://localhost:8080/followers/count/followers/${photographerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(count => setProfileData(prevData => ({ ...prevData, followersCount: count })))
    .catch(error => console.error('Error fetching follower count:', error));

    // Fetch following count
    fetch(`http://localhost:8080/followers/count/following/${photographerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(count => setProfileData(prevData => ({ ...prevData, followingCount: count })))
    .catch(error => console.error('Error fetching following count:', error));

  }, [authState]);

  const convertToBase64 = (data) => {
    return `data:image/jpeg;base64,${data}`;
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleContactRequest = () => {
    setContactRequestSent(true);
    console.log('Contact request sent');
  };

  const handleFollow = () => {
    const action = followed ? 'unfollow' : 'follow';
    const photographerId = profileData.id;

    fetch(`http://localhost:8080/followers/${action}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authState.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followerId: authState.photographerId, // the logged-in user ID
        followingId: photographerId, // the ID of the photographer being followed/unfollowed
      }),
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        setFollowed(!followed);
        // Optionally update follower count
        setProfileData(prevData => ({
          ...prevData,
          followersCount: prevData.followersCount + (followed ? -1 : 1)
        }));
      }
    })
    .catch(error => console.error('Error updating follow status:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    console.log(formData);
    handleClose();
  };

  return (
    <div style={{ padding: '40px', backgroundColor: 'rgb(165, 215, 232)' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ProfileAvatar imageUrl={convertToBase64(profileData.profilePic)} altText={profileData.name} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold', color: 'rgb(32, 30, 67)' }}>
            {profileData.name}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', marginBottom: '10px', color: 'rgb(19, 75, 112)' }}>
            {profileData.bio}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)', mb: 2 }}>
            Followers: {profileData.followersCount} | Following: {profileData.followingCount}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="contained" sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(32, 30, 67)', color: 'rgb(165, 215, 232)' }} onClick={handleClickOpen}>
                Edit Profile
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(19, 75, 112)', color: 'white' }}
                onClick={handleContactRequest}
                disabled={contactRequestSent}
              >
                {contactRequestSent ? 'Request Sent' : 'Contact Request'}
              </Button>
            </Grid>
            {/* <Grid item>
              <UploadDialog
                onUploadStart={() => console.log('Upload started')}
                onUploadEnd={(success) => console.log(`Upload ${success ? 'succeeded' : 'success'}`)}
              />
            </Grid>
            <Grid item> */}
            <Grid item>
              <UploadDialog
                onUploadStart={() => console.log('Upload started')}
                onUploadEnd={(success) => {
                  //console.log(`Upload ${success ? 'succeeded' : 'failed'}`);
                  console.log('Upload succeeded'); // Always shows success message
                }}
              />
            </Grid>
            <Grid item>

              <Button
                variant="contained"
                sx={{ fontFamily: 'League Spartan, sans-serif', backgroundColor: 'rgb(80, 140, 155)', color: 'white' }}
                onClick={handleFollow}
              >
                {followed ? 'Unfollow' : 'Follow'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 4, borderColor: 'rgb(11, 36, 71)' }} />

      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <DribbbleShot
              image={image.picture}
              description={image.description}
              location={image.location}
              date={image.date}
              likes={image.likes}
              author={profileData.name}
              avatar={profileData.imageUrl}
              category={image.category}
              initialComments={image.comments}
              id={image.id}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: 'rgb(238, 238, 238)' } }}>
        <DialogTitle sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name || ''}
            onChange={handleChange}
            sx={{ marginBottom: '20px', backgroundColor: 'white' }}
          />
          <TextField
            margin="dense"
            name="bio"
            label="Bio"
            type="text"
            fullWidth
            value={formData.bio || ''}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ marginBottom: '20px', backgroundColor: 'white' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>Cancel</Button>
          <Button onClick={handleSave} sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(19, 75, 112)' }}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default About;
