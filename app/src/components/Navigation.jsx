// src/components/Navigation.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      {/* Store Title */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My Store
      </Typography>
      
      {/* Navigation Buttons */}
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/cart">
        Cart
      </Button>
      <Button color="inherit" component={Link} to="/checkout">
        Checkout
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navigation;
