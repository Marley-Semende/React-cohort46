import { useState, useEffect } from "react";
import Button from "./Button";

const Header = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState([]);
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
        setLoading(false);
      } catch (error) {
        setError(error);
       
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <header>
      <h1>Products</h1>
      <div className="button-container">
        {categories.map((category) => (
          <Button
            key={category}
            label={category}
            onClick={() => onCategoryClick(category)}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
