import { Box, Typography } from '@mui/material';
import React from 'react';
import ApartmentCard from './ApartmentCard';

const styles = {
  title: {
    color: '#1E4164',
    fontWeight: '700',
    fontSize: '24px',
  },
  apartmentsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '16px',
    marginTop: '40px',
  },
};

const HomePage = props => {
  const { apartments } = props;
  console.log('apartments', apartments);

  if (!apartments || !apartments.length) return <Box>Sorry, No Apartments Available</Box>;

  return (
    <Box mt="70px">
      <Typography sx={styles.title}>Explore our Properties</Typography>
      <Typography color="#656565">{apartments.length} Results Available</Typography>
      <Box sx={styles.apartmentsContainer}>
        {apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
