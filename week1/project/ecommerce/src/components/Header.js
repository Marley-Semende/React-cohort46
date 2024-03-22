import PropTypes from "prop-types";
import Button from "./Button";
import categories from "../fake-data/all-categories";

const Header = ({ onButtonClick }) => {
  const handleClick = (category) => {
    onButtonClick(category);
  };

  return (
    <header>
      <h1>Products</h1>

      <div className="button-container">
        {categories.map((category) => (
          <Button
            key={category}
            button={category}
            onButtonClick={handleClick}
          />
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Header;
