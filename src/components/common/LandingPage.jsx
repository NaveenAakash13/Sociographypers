// import React, { useEffect, useState } from 'react';
// import Box from '@mui/joy/Box';
// import PostCard from './PostCard'; // Adjust the path as necessary
// import DribbbleShotDialog from './DribbbleShotDialog'; // Adjust the path as necessary
// import { Avatar, Button, TextField, List, ListItem, ListItemAvatar, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Paper } from '@mui/material';
// import Typography from '@mui/joy/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from '../common/axiosInstance'; // Adjust import path as necessary

// const SocialMediaFeed = () => {
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [chatOpen, setChatOpen] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [pictures, setPictures] = useState([]); // State for pictures
//   const [chats, setChats] = useState([]); // State for chats if needed

//   useEffect(() => {
//     const fetchPictures = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/pictures');
//         setPictures(response.data);
//       } catch (error) {
//         console.error('Error fetching pictures:', error);
//       }
//     };

//     fetchPictures();
//   }, []);

//   const handleOpenDialog = (photo) => {
//     setSelectedPhoto(photo);
//     setDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedPhoto(null);
//   };

//   const handleOpenChat = (chat) => {
//     setSelectedChat(chat);
//     setChatOpen(true);
//   };

//   const handleCloseChat = () => {
//     setChatOpen(false);
//     setSelectedChat(null);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const updatedChat = {
//         ...selectedChat,
//         messages: [...selectedChat.messages, { text: newMessage, sender: 'You' }]
//       };
//       setSelectedChat(updatedChat);
//       setNewMessage('');
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', position: 'relative' }}>
//       <Box
//         sx={{
//           flex: 1,
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: 2,
//           p: 2,
//           backgroundColor: 'rgb(165, 215, 232)',
//         }}
//       >
//         {pictures.map((picture) => (
//           <PostCard
//             key={picture.id}
//             src={`data:image/jpeg;base64,${picture.picture}`} // Adjust if needed
//             onClick={() => handleOpenDialog(picture)}
//           />
//         ))}
//       </Box>

//       <Box
//         sx={{
//           width: '350px',
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           position: 'sticky',
//           top: '0',
//           height: '100vh',
//           backgroundColor: 'rgb(25, 55, 109)',
//           color: 'rgb(165, 215, 232)',
//         }}
//       >
//         <Typography
//           variant="h4"
//           component="div"
//           sx={{ 
//             mb: 2,
//             textAlign: 'center', 
//             color: 'rgb(238, 238, 238)', // White color
//             fontWeight: 'bold',
//           }}
//         >
//           Requests
//         </Typography>
//         <List sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
//           {chats.map((chat, index) => (
//             <ListItem button key={index} onClick={() => handleOpenChat(chat)}>
//               <ListItemAvatar>
//                 <Avatar src={chat.avatar} alt={chat.name} />
//               </ListItemAvatar>
//               <ListItemText primary={chat.name} />
//             </ListItem>
//           ))}
//         </List>
//       </Box>

//       {selectedPhoto && (
//         <DribbbleShotDialog
//           open={dialogOpen}
//           handleClose={handleCloseDialog}
//           image={`data:image/jpeg;base64,${selectedPhoto.picture}`} // Adjust if needed
//           description={selectedPhoto.description}
//           location={selectedPhoto.location}
//           date={selectedPhoto.date}
//           likes={selectedPhoto.likes}
//           author={selectedPhoto.author}
//           avatar={selectedPhoto.avatar}
//           category={selectedPhoto.category}
//           comments={selectedPhoto.comments}
//         />
//       )}

//       {selectedChat && (
//         <Paper
//           sx={{
//             position: 'fixed',
//             bottom: 16,
//             right: 16,
//             width: 300,
//             height: 400,
//             display: 'flex',
//             flexDirection: 'column',
//             backgroundColor: 'rgb(32, 30, 67)', // Dark background color
//             color: 'rgb(238, 238, 238)', // Light text color
//           }}
//           elevation={3}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               p: 2,
//               borderBottom: '1px solid rgb(80, 140, 155)', // Light blue border
//             }}
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ color: 'rgb(238, 238, 238)' }}
//             >
//               Chat with {selectedChat.name}
//             </Typography>
//             <IconButton
//               size="small"
//               onClick={handleCloseChat}
//               sx={{ color: 'rgb(238, 238, 238)' }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
//             {selectedChat.messages.map((msg, idx) => (
//               <Typography key={idx} variant="body2" sx={{ mb: 1, color: 'rgb(238, 238, 238)' }}>
//                 <strong>{msg.sender}:</strong> {msg.text}
//               </Typography>
//             ))}
//           </Box>
//           <Box sx={{ p: 2, borderTop: '1px solid rgb(80, 140, 155)' }}>
//             <TextField
//               fullWidth
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type a message"
//               variant="outlined"
//               sx={{
//                 backgroundColor: 'rgb(255, 255, 255)', // Dark blue background for input
//                 borderRadius: 1,
//                 color: 'rgb(238, 238, 238)', // Light text color
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'rgb(19, 75, 112)', // Light blue border for input
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgb(80, 140, 155)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'rgb(80, 140, 155)',
//                   },
//                 },
//               }}
//             />
//             <Button
//               onClick={handleSendMessage}
//               variant="contained"
//               sx={{
//                 mt: 1,
//                 backgroundColor: 'rgb(80, 140, 155)', // Light blue background for button
//                 color: 'rgb(32, 30, 67)', // Dark text color for button
//               }}
//             >
//               Send
//             </Button>
//           </Box>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default SocialMediaFeed;

import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import PostCard from './PostCard'; // Adjust the path as necessary
import DribbbleShotDialog from './DribbbleShotDialog'; // Adjust the path as necessary
import { Avatar, Button, TextField, List, ListItem, ListItemAvatar, ListItemText, Card, CardContent, Typography, IconButton, Paper, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../common/axiosInstance';
import AspectRatio from '@mui/joy/AspectRatio';


const SocialMediaFeed = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [pictures, setPictures] = useState([]); // State for pictures
  const [chats, setChats] = useState([]); // State for chats if needed
  const [selectedRequests, setSelectedRequests] = useState([]); // State for requests

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pictures');
        setPictures(response.data);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/requests'); // Adjust URL as needed
        setSelectedRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchPictures();
    fetchRequests();
  }, []);

  const handleOpenDialog = (photo) => {
    setSelectedPhoto(photo);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPhoto(null);
  };

  const handleOpenChat = (chat) => {
    setSelectedChat(chat);
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
    setSelectedChat(null);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedChat = {
        ...selectedChat,
        messages: [...selectedChat.messages, { text: newMessage, sender: 'You' }]
      };
      setSelectedChat(updatedChat);
      setNewMessage('');
    }
  };

  const handleConfirmRequest = async (index) => {
    const request = selectedRequests[index];
    try {
      await axios.post(`http://localhost:8080/requests/confirm/${request.id}`); // Adjust URL as needed
      setSelectedRequests(selectedRequests.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error confirming request:', error);
    }
  };

  const handleRejectRequest = async (index) => {
    const request = selectedRequests[index];
    try {
      await axios.post(`http://localhost:8080/requests/reject/${request.id}`); // Adjust URL as needed
      setSelectedRequests(selectedRequests.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 2,
          p: 2,
          backgroundColor: 'rgb(165, 215, 232)',
        }}
      >
        {pictures.map((picture) => (
          <PostCard
            key={picture.id}
            src={`data:image/jpeg;base64,${picture.picture}`} // Adjust if needed
            onClick={() => handleOpenDialog(picture)}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: '350px',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: '0',
          height: '100vh',
          backgroundColor: 'rgb(25, 55, 109)',
          color: 'rgb(165, 215, 232)',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ 
            mb: 2,
            textAlign: 'center', 
            color: 'rgb(238, 238, 238)', // White color
            fontWeight: 'bold',
          }}
        >
          Requests
        </Typography>
        <Box>
          {Array.isArray(selectedRequests) && selectedRequests.length > 0 ? (
            selectedRequests.map((request, index) => (
              <Card
                key={index}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  ml: 3,
                  mb: 2,
                  '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}
              >
                <AspectRatio ratio="1" sx={{ width: 50 }}>
                  <Avatar
                    src={request.partner.profilePic} // Adjust to handle base64 if needed
                    alt={request.partner.name}
                    loading="lazy"
                  />
                </AspectRatio>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 1, flexGrow: 1 }}>
                  <Typography level="body2" noWrap>{request.partner.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Button size="small" variant="contained" color="success" onClick={() => handleConfirmRequest(index)}>
                      Confirm
                    </Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => handleRejectRequest(index)}>
                      Reject
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No requests available.</Typography>
          )}
        </Box>
      </Box>

      {selectedPhoto && (
        <DribbbleShotDialog
          open={dialogOpen}
          handleClose={handleCloseDialog}
          image={`data:image/jpeg;base64,${selectedPhoto.picture}`} // Adjust if needed
          description={selectedPhoto.description}
          location={selectedPhoto.location}
          date={selectedPhoto.date}
          likes={selectedPhoto.likes}
          author={selectedPhoto.author}
          avatar={selectedPhoto.avatar}
          category={selectedPhoto.category}
          comments={selectedPhoto.comments}
        />
      )}

      {selectedChat && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            width: 300,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(32, 30, 67)', // Dark background color
            color: 'rgb(238, 238, 238)', // Light text color
          }}
          elevation={3}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid rgb(80, 140, 155)', // Light blue border
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgb(238, 238, 238)' }}
            >
              Chat with {selectedChat.name}
            </Typography>
            <IconButton
              size="small"
              onClick={handleCloseChat}
              sx={{ color: 'rgb(238, 238, 238)' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
            {selectedChat.messages.map((msg, idx) => (
              <Typography key={idx} variant="body2" sx={{ mb: 1, color: 'rgb(238, 238, 238)' }}>
                <strong>{msg.sender}:</strong> {msg.text}
              </Typography>
            ))}
          </Box>
          <Box sx={{ p: 2, borderTop: '1px solid rgb(80, 140, 155)' }}>
            <TextField
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              variant="outlined"
              sx={{
                backgroundColor: 'rgb(255, 255, 255)', // Dark blue background for input
                borderRadius: 1,
                color: 'rgb(238, 238, 238)', // Light text color
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(19, 75, 112)', // Light blue border for input
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(80, 140, 155)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(80, 140, 155)',
                  },
                },
              }}
            />
            <Button
              onClick={handleSendMessage}
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: 'rgb(80, 140, 155)', // Light blue background for button
                color: 'rgb(32, 30, 67)', // Dark text color for button
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default SocialMediaFeed;