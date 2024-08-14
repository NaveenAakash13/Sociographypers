import React, { useEffect, useState } from 'react';
import PartnerCard from './PartnerCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axiosInstance from '../../common/axiosInstance'; // Adjust the path as necessary

const PartnerList = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axiosInstance.get('/partners'); // Use the axios instance
        setPartners(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);
  return (
    <Container sx={{ py: 5, bgcolor: 'rgb(165, 215, 232)', minHeight: 'calc(100vh - 64px)' }}>
      {partners.map(partner => (
        <Box key={partner.id} sx={{ mb: 3 }}>
          <PartnerCard
            id={partner.id}
            title={partner.name}
            description={partner.tagline}
            imageUrl={partner.profilePic} // Assuming PartnerCard component has a prop for imageUrl
          />
        </Box>
      ))}
    </Container>
  );
};

export default PartnerList;
