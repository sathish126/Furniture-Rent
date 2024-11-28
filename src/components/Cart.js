import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

const Cart = ({ cartItems, removeFromCart, updateRentalPeriod, totalAmount }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newRentalPeriod, setNewRentalPeriod] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);

  const handleEditChange = (e) => {
    setNewRentalPeriod(Number(e.target.value));
  };

  const handleSaveEdit = (index) => {
    if (newRentalPeriod > 0) {
      updateRentalPeriod(index, newRentalPeriod);
      setEditingIndex(null);
      setNewRentalPeriod(1);
    } else {
      alert('Please enter a valid rental period.');
    }
  };

  const handleCheckout = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#34495E' }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {cartItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                    <Typography variant="h6" color="primary">Rs.{item.price}/day</Typography>
                    {editingIndex === index ? (
                      <>
                        <TextField
                          label="New Rental Period (days)"
                          type="number"
                          value={newRentalPeriod}
                          onChange={handleEditChange}
                          sx={{ marginTop: 2, width: '100%' }}
                          inputProps={{ min: 1 }}
                        />
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ marginTop: 2 }}
                          onClick={() => handleSaveEdit(index)}
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      <>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                          Rental Period: {item.rentalPeriod} day(s)
                        </Typography>
                        <Typography variant="h6" sx={{ marginTop: 1 }}>
                          Total Cost: Rs.{item.price * item.rentalPeriod}
                        </Typography>
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ marginTop: 2 }}
                          onClick={() => {
                            setEditingIndex(index);
                            setNewRentalPeriod(item.rentalPeriod);
                          }}
                        >
                          Edit Days
                        </Button>
                      </>
                    )}
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ marginTop: 2 }}
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h5" sx={{ marginTop: 4, fontWeight: 'bold' }}>
            Total Amount: Rs.{totalAmount}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 3 }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Checkout Summary</DialogTitle>
            <DialogContent>
              <Typography variant="h6">Total Amount: Rs.{totalAmount}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Thank you for your purchase! The bill has been generated and processed.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
};

export default Cart;
