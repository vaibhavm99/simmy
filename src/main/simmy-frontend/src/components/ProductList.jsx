// src/components/ProductList.jsx
import React from 'react';

const ProductList = () => {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;