import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, rentalPeriod) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].rentalPeriod += rentalPeriod;
      updatedCart[existingItemIndex].count += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, count: 1, rentalPeriod }]);
    }
  };

  const updateRentalPeriod = (index, newRentalPeriod) => {
    const updatedCart = [...cart];
    updatedCart[index].rentalPeriod = newRentalPeriod;
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count * item.rentalPeriod), 0);
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
        <Route path="/signin" element={<SignIn setCart={setCart} />} />
        <Route path="/signup" element={<SignUp setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
