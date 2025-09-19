import React from 'react';

function ProductList({ categoryId, onSelectProduct }) {
  // Placeholder demo products
  const demoProducts = [
    { id: 1, name: 'Smartphone', price: 999, retailerLink: '#' },
    { id: 2, name: 'Laptop', price: 1499, retailerLink: '#' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products for category {categoryId}</h2>
      <ul>
        {demoProducts.map(prod => (
          <li key={prod.id}>
            {prod.name} - ${prod.price} 
            <button onClick={() => onSelectProduct(prod.id)}>Select</button>
            <a href={prod.retailerLink} target="_blank" rel="noopener noreferrer">
              Visit Retailer
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
