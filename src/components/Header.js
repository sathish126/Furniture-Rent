import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ backgroundColor: '#2C3E50', top: 0, zIndex: 1201 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          {/* Company Name */}
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Furniture Rental
          </Typography>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer for Mobile Sidebar */}
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {/* Navigation Links */}
                <ListItem button onClick={() => navigate('/')}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => navigate('/dashboard')}>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => navigate('/cart')}>
                  <ListItemText primary="Cart" />
                </ListItem>
                <ListItem button onClick={() => navigate('/signin')}>
                  <ListItemText primary="Sign In" />
                </ListItem>
                <ListItem button onClick={() => navigate('/signup')}>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </List>
            </Box>
          </Drawer>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button color="inherit" onClick={() => navigate('/signin')}>
              Sign In
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
