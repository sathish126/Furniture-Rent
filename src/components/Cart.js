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
  DialogTitle,
  Box,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

const Cart = ({ cartItems, removeFromCart, updateRentalPeriod, totalAmount }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newRentalPeriod, setNewRentalPeriod] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

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
    setPaymentMethod('');
  };

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    setOpenDialog(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000); // Show thank you message for 3 seconds
  };

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: '#34495E' }}
      >
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Price: <strong>Rs.{item.price}/day</strong>
                    </Typography>
                    <Typography variant="body1">
                      Rental Period: {item.rentalPeriod} day(s)
                    </Typography>
                    <Typography variant="body1" sx={{ marginY: 1 }}>
                      Total Cost: <strong>Rs.{item.price * item.rentalPeriod}</strong>
                    </Typography>
                    {editingIndex === index ? (
                      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                        <TextField
                          label="New Rental Period (days)"
                          type="number"
                          value={newRentalPeriod}
                          onChange={handleEditChange}
                          fullWidth
                          inputProps={{ min: 1 }}
                        />
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleSaveEdit(index)}
                        >
                          Save
                        </Button>
                      </Box>
                    ) : (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => {
                            setEditingIndex(index);
                            setNewRentalPeriod(item.rentalPeriod);
                          }}
                        >
                          Edit Days
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ marginY: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold">
              Total Amount: Rs.{totalAmount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
            >
              confirm order
            </Button>
          </Box>

          {/* Checkout Dialog */}
          <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
            <DialogTitle>Order</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom>
                Select Payment Method:
              </Typography>
              <FormControl>
                <FormLabel>Payment Method</FormLabel>
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                  <FormControlLabel value="card" control={<Radio />} label="Card" />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body1">
                Total Amount: <strong>Rs.{totalAmount}</strong>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleConfirmPayment} color="primary" variant="contained">
                Confirm Payment
              </Button>
            </DialogActions>
          </Dialog>

          {/* Thank You Message */}
          {showThankYou && (
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 4,
                backgroundColor: 'white',
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" color="primary" gutterBottom>
                Thank You!
              </Typography>
              <Typography variant="body1">Your payment was successful.</Typography>
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default Cart;
