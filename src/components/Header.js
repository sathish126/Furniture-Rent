import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Container, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if we are on the cart or dashboard page
  const isCartPage = location.pathname === '/cart';
  const isDashboardPage = location.pathname === '/';

  return (
    <AppBar 
      position="sticky" 
      sx={{ backgroundColor: '#2C3E50', top: 0, zIndex: 1201 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography 
            variant="h5" 
            sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/')} // Clicking on title navigates to the Dashboard
          >
            Furniture Rental
          </Typography>

          {/* Show the "Back to Dashboard" button only on the Cart page */}
          {isCartPage && (
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ marginRight: 2 }}
            >
              Back to Dashboard
            </Button>
          )}

          {/* Show the cart icon only on the Dashboard page */}
          {isDashboardPage && (
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}

          {/* Sign In and Sign Up buttons */}
          <Box sx={{ marginLeft: 2 }}>
            <Button
              color="inherit"
              sx={{ marginRight: 1 }}
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
