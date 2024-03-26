import { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : "https://fakestoreapi.com/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      <Header onCategoryClick={handleCategoryClick} />
      <ProductList selectedCategory={selectedCategory} products={products} />
    </div>
  );
};

export default Page;
