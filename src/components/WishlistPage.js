import React from 'react';

function WishlistPage({ userId }) {
  return (
    <div style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Wishlist (User: {userId})</h2>
      <p>No items yet. Add some products!</p>
    </div>
  );
}

export default WishlistPage;
