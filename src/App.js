import React, { useState } from 'react';
import CategoryGrid from './components/CategoryGrid';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import WishlistPage from './components/WishlistPage';

function App() {
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [selectedProductMasterId, setSelectedProductMasterId] = useState(null);
  const currentUserId = 'REPLACE_WITH_USER_ID';

  return (
    <div>
      <Banner />
      <h1>Welcome to BuyWise</h1>
      <CategoryGrid onSelectCategory={setCurrentCategoryId} />
      {currentCategoryId && (
        <ProductList
          categoryId={currentCategoryId}
          onSelectProduct={setSelectedProductMasterId}
        />
      )}
      <WishlistPage userId={currentUserId} />
    </div>
  );
}

export default App;
