import PropTypes from "prop-types";
import Button from "./Button";
import categories from "../fake-data/all-categories";

const Header = ({ onCategoryClick }) => {
  return (
    <header>
      <h1>Products</h1>

      <div className="button-container">
        {categories.map((category) => (
          <Button
            key={category}
            label={category.split(": ")[1]}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default Header;
