// src/services/api.jsx

import products from '../data/products.json';

/**
 * Simulates an API call to get all products.
 * @returns {Array} Array of all products
 */
export const getAllProducts = async () => {
  return products;
};

/**
 * Simulates an API call to get a single product by ID.
 * @param {number} id - The ID of the product to fetch
 * @returns {Object|null} Product object if found, else null
 */
export const getProductById = async (id) => {
  return products.find((product) => product.id === id) || null;
};

/**
 * Simulates an API call to get products by category.
 * @param {string} category - The category to filter by
 * @returns {Array} Array of products in the specified category
 */
export const getProductsByCategory = async (category) => {
  return products.filter((product) => product.category === category);
};
