// src/components/SearchBar.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Box mb={4} display="flex" justifyContent="center">
      <TextField
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
        sx={{ maxWidth: 600 }}
      />
    </Box>
  );
};

export default SearchBar;
