import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Container, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if we are on the dashboard or cart page
  const isCartPage = location.pathname === '/cart';
  const isDashboardPage = location.pathname === '/';

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
