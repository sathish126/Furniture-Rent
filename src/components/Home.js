import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: `url('bg.jpg')`, // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          p: 4,
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          Welcome to Furniture Rental
        </Typography>
        <Typography variant="h6" component="p" mb={4}>India’s leading rental platform brings to you a wide range of products on rent. Experience the freedom to live the life you want, now.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/dashboard')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
