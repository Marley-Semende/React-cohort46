import PropTypes from 'prop-types'
import ProductCard from './ProductCard';
 
const ProductList = ({ selectedCategory, products }) => {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
 
  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} title={product.title} image={product.image} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
    selectedCategory: PropTypes.string, 
    products: PropTypes.arrayOf(PropTypes.shape({ 
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired,
  };
export default ProductList
