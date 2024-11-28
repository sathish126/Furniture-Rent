import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, rentalPeriod) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex > -1) {
      // Item already exists; update the rental period and increment the count.
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].rentalPeriod += rentalPeriod; // Accumulate the rental period.
      updatedCart[existingItemIndex].count += 1; // Increase count to indicate multiple orders of the same item.
      setCart(updatedCart);
    } else {
      // Item is new; add it to the cart.
      setCart([...cart, { ...item, count: 1, rentalPeriod }]);
    }
  };

  const updateRentalPeriod = (index, newRentalPeriod) => {
    const updatedCart = [...cart];
    updatedCart[index].rentalPeriod = newRentalPeriod; // Update rental period for the specified item.
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.count * item.rentalPeriod);
    }, 0);
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Dashboard addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            updateRentalPeriod={updateRentalPeriod}
            totalAmount={calculateTotal()}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
