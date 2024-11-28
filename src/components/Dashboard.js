import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, TextField, Box, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const furnitureItems = [
  { id: 1, name: 'Modern Sofa', price: 50, image: 'sofa.jpg', description: 'Stylish sofa for modern living.' },
  { id: 2, name: 'Wooden Table', price: 30, image: 'Table.webp', description: 'Durable and elegant wooden table.' },
  { id: 3, name: 'Office Chair', price: 20, image: 'office chair.webp', description: 'Ergonomic office chair for comfort.' },
  { id: 4, name: 'King-Size Bed', price: 70, image: 'best-king-size-beds.webp', description: 'Spacious and cozy king-size bed.' },
  { id: 5, name: 'Bookshelf', price: 25, image: 'book self.jpg', description: 'Minimalistic bookshelf for storage.' },
  { id: 6, name: 'Dining Set', price: 100, image: 'dining set.jpg', description: 'Complete dining set for your family.' },
  { id: 7, name: 'Recliner Chair', price: 40, image: 'Recliner Chair.jpg', description: 'Comfortable recliner chair for relaxation.' },
  { id: 8, name: 'Wardrobe', price: 80, image: 'wardrobe.jpg', description: 'Spacious wardrobe for organizing clothes.' },
  { id: 9, name: 'Coffee Table', price: 15, image: 'Coffee Table.webp', description: 'Compact coffee table for your living room.' },
  { id: 10, name: 'TV Stand', price: 35, image: 'TV Stand.jpg', description: 'Modern TV stand with storage.' }
];

const Dashboard = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rentalPeriodMap, setRentalPeriodMap] = useState({});

  const handleRentalPeriodChange = (e, itemId) => {
    const newRentalPeriodMap = { ...rentalPeriodMap, [itemId]: Number(e.target.value) };
    setRentalPeriodMap(newRentalPeriodMap);
  };

  const handleAddToCart = (item) => {
    const rentalPeriod = rentalPeriodMap[item.id] || 1; // Default to 1 day if no input
    if (rentalPeriod > 0) {
      addToCart(item, rentalPeriod);
      setRentalPeriodMap({ ...rentalPeriodMap, [item.id]: 1 }); // Reset the rental period after adding
    } else {
      alert('Please enter a valid rental period.');
    }
  };

  const filteredItems = furnitureItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#34495E' }}>
        Available Furniture
      </Typography>
      
      {/* Search Bar */}
      <Box sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Search Furniture"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 600 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: searchQuery && (
              <IconButton onClick={() => setSearchQuery('')} sx={{ padding: '8px' }}>
                <ClearIcon />
              </IconButton>
            )
          }}
        />
      </Box>
      
      {/* Furniture Items */}
      <Grid container spacing={4}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{
                boxShadow: 3, 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia 
                  component="img" 
                  height="200" 
                  image={item.image} 
                  alt={item.name} 
                  sx={{ objectFit: 'cover', borderBottom: '1px solid #ddd' }} 
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Rs.{item.price}/day
                  </Typography>
                  <TextField
                    label="Rental Period (days)"
                    type="number"
                    value={rentalPeriodMap[item.id] || ''}
                    onChange={(e) => handleRentalPeriodChange(e, item.id)}
                    sx={{ marginTop: 2, width: '100%' }}
                    inputProps={{ min: 1 }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 2, 
                      backgroundColor: '#1ABC9C', 
                      '&:hover': { backgroundColor: '#16A085' },
                      width: '100%'
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ width: '100%', textAlign: 'center', color: '#E74C3C', marginTop: 4 }}
          >
            No furniture items found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard;
