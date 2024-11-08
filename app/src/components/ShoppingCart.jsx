// src/components/ShoppingCart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Paper elevation={3}>
        <List>
          {cart.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={item.title}
                secondary={`$${item.price} x ${item.quantity}`}
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Typography variant="h5" align="right" style={{ marginTop: '20px' }}>
        Total: ${calculateTotal().toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ShoppingCart;
