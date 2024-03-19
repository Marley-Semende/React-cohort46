import PropTypes from 'prop-types'
import Button from './Button';
import categories from '../fake-data/all-categories';
 
const Header = ({ onCategoryClick }) => {
  const handleClick = (category) => {
    onCategoryClick(category);
  };
 
  return (
    <header>
      <h1>Products</h1>
<div className="button-container">
        {categories.map(category => (
          <Button key={category} category={category.split(": ")[1]} onCategoryClick={handleClick} />
        ))}
      </div>
    </header>
  );
}

Header.propTypes = {
    onCategoryClick: PropTypes.func.isRequired
  };
 
export default Header;

