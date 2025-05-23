import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MeterIcon from '../../assets/MeterIcon';
import BedroomIcon from '../../assets/BedroomIcon';
import BathroomIcon from '../../assets/BathroomIcon';

const styles = {
  container: {
    border: '1px solid #E5E5E5',
    borderRadius: '10px',
    mb: '20px',
    '&:hover': {
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      border: '1px solid rgb(51, 123, 196)',
    },
  },
  imageBox: {
    width: '100%',
    height: '200px',
    position: 'relative',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    overflow: 'hidden',
  },
};

const ApartmentCard = props => {
  const { apartment } = props;
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageBox}>
        <Image src={apartment.imageUrl} alt={apartment.name} fill style={{ objectFit: 'cover' }} />
      </Box>
      <Box p="15px">
        <Typography color="#212427">{apartment.name}</Typography>
        <Typography color="#656565">{apartment.location}</Typography>
        <Stack direction="row" alignItems="center" gap={7} mt={1}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Stack direction="row" alignItems="center">
              <Typography>
                <sup>{apartment.bedrooms}</sup>
              </Typography>
              <BedroomIcon />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography>
                <sup>{apartment.bathrooms}</sup>
              </Typography>
              <BathroomIcon />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" gap="5px">
            <MeterIcon />
            <Typography>{apartment.size}</Typography>
          </Stack>
        </Stack>

        <Typography mt="40px" fontSize="18px" fontWeight="800">
          {apartment.price}
        </Typography>
        {/* <Typography>{apartment.delivery}</Typography> */}
      </Box>
    </Box>
  );
};

export default ApartmentCard;
