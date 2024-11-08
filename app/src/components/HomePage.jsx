// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/api.jsx';
import { Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, CircularProgress, Box, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  // Handler for search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Product List
      </Typography>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Error Alert */}
      {error && (
        <Box display="flex" justifyContent="center" mb={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Loading Indicator */}
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        // Grid container for filtered products
        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card variant="outlined">
                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default HomePage;
