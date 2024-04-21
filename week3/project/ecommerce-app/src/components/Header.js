import Button from "./Button";
import NavBar from "./NavBar";
import useFetch from "./useFetch";

const Header = ({ onCategoryClick }) => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products/categories");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <header>
      <h1>Products</h1>
      <NavBar />
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
