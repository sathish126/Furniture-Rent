import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setCart }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Example logic to simulate sign-in success
    alert('Sign In successful!');
    // You can add logic here for validating email and password against a DB
    setCart([]); // Reset cart on sign-in (if needed for a new session)
    navigate('/'); // Redirect to Dashboard after sign-in
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 8 }}>
      <Paper sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#ffffff',
      }}>
        <Typography variant="h4" sx={{
          marginBottom: 4,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#34495E',
        }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSignIn}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              padding: '12px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#1ABC9C' }
            }}
          >
            Sign In
          </Button>
          <Button
            color="inherit"
            fullWidth
            sx={{
              marginTop: 2,
              padding: '12px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#f1f1f1' }
            }}
            onClick={() => navigate('/')}
          >
            Back to Dashboard
          </Button>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              textAlign: 'center',
              color: '#7f8c8d',
            }}
          >
            Don't have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/signup')}
              sx={{ fontWeight: 'bold', color: '#1ABC9C', '&:hover': { textDecoration: 'underline' } }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
