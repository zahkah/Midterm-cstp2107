// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import Checkout from './components/Checkout.jsx';
import Navigation from './components/Navigation.jsx';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </>
);

export default App;
