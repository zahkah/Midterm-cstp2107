// src/components/ProductDetails.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { Box, Typography, Button, CardMedia } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return product ? (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <CardMedia
        component="img"
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '300px', marginBottom: '20px' }}
      />
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        ${product.price}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Box>
  ) : (
    <Typography variant="body1" align="center">
      Loading...
    </Typography>
  );
};

export default ProductDetails;
