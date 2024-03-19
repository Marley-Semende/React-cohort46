import PropTypes from 'prop-types'
const Button = ({ category, onCategoryClick }) => {
  const handleClick = () => {
    onCategoryClick(category);
  };
 
  return (
    <div className="btn-container">
      <button onClick={handleClick}>{category}</button>
    </div>
  );
}

Button.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired
};
 
export default Button;

