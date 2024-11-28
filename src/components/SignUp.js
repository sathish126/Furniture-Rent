import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setCart }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [idProof, setIdProof] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Example logic for successful sign-up
    alert('Sign Up successful!');
    setCart([]); // Reset cart on sign-up (if needed for a new session)
    navigate('/'); // Redirect to Dashboard after sign-up
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
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
            label="Mobile Number"
            type="tel"
            variant="outlined"
            margin="normal"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="ID Proof Number"
            type="text"
            variant="outlined"
            margin="normal"
            required
            value={idProof}
            onChange={(e) => setIdProof(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Location"
            type="text"
            variant="outlined"
            margin="normal"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Sign Up
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
            Already have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/signin')}
              sx={{ fontWeight: 'bold', color: '#1ABC9C', '&:hover': { textDecoration: 'underline' } }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
