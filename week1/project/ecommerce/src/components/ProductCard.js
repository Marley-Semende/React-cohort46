import PropTypes from 'prop-types'

const ProductCard = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
  };
 
export default ProductCard;