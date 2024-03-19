import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import products from '../fake-data/all-products';
 
const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
  ? products.filter(product => product.category === selectedCategory)
  : products;
 
  return (
    <div className="main-container">
      <Header onCategoryClick={handleCategoryClick} />
     
      <ProductList selectedCategory={selectedCategory} products={products} />
    </div>
  );
}
 
export default Page;
