// import React, { useEffect, useState } from 'react';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures it runs only once

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
