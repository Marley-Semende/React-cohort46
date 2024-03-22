import { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import products from "../fake-data/all-products";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (button) => {
    setSelectedCategory(button);
  };

  return (
    <div className="main-container">
      <Header onButtonClick={handleCategoryClick} />
      <ProductList selectedCategory={selectedCategory} products={products} />
    </div>
  );
};

export default Page;
