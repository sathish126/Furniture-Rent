import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, TextField } from '@mui/material';

const furnitureItems = [
  { id: 1, name: 'Modern Sofa', price: 50, image: 'sofa.jpg', description: 'Stylish sofa for modern living.' },
  { id: 2, name: 'Wooden Table', price: 30, image: 'Table.webp', description: 'Durable and elegant wooden table.' },
  { id: 3, name: 'Office Chair', price: 20, image: 'office chair.webp', description: 'Ergonomic office chair for comfort.' },
  { id: 4, name: 'King-Size Bed', price: 70, image: 'best-king-size-beds.webp', description: 'Spacious and cozy king-size bed.' },
  { id: 5, name: 'Bookshelf', price: 25, image: 'book self.jpg', description: 'Minimalistic bookshelf for storage.' },
];

const Dashboard = ({ addToCart }) => {
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

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#34495E' }}>
        Available Furniture
      </Typography>
      <Grid container spacing={4}>
        {furnitureItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                <Typography variant="h6" color="primary">Rs.{item.price}/day</Typography>
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
                  sx={{ marginTop: 2, backgroundColor: '#1ABC9C' }}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
