import React from 'react';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Groceries' },
  { id: 3, name: 'Fashion' },
  { id: 4, name: 'Home Appliances' }
];

function CategoryGrid({ onSelectCategory }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px' }}>
      {categories.map(cat => (
        <button key={cat.id} onClick={() => onSelectCategory(cat.id)}>
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryGrid;
