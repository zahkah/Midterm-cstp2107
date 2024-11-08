// src/components/Checkout.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);  // Access cart and a method to clear it
  const navigate = useNavigate();

  // Calculate the total cost of items in the cart
  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  // Handle the checkout process
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      return;
    }

    // Simulate checkout logic 
    alert("Thank you for your purchase!");
    setCart([]);  // Clear the cart
    navigate("/");  // Redirect to the homepage or a confirmation page
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Your cart is empty. Please add some items to proceed to checkout.
        </Typography>
      ) : (
        <>
          <Paper elevation={3}>
            <List>
              {cart.map((item, index) => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemText
                      primary={item.title}
                      secondary={`Quantity: ${item.quantity} | Price: $${item.price}`}
                    />
                    <Typography variant="body1">
                      ${parseFloat(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </ListItem>
                  {index < cart.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Divider />
            <Box display="flex" justifyContent="space-between" p={2}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">${calculateTotal()}</Typography>
            </Box>
          </Paper>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCheckout}
            style={{ marginTop: '20px' }}
          >
            Complete Purchase
          </Button>
        </>
      )}
    </Box>
  );
};

export default Checkout;
