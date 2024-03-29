import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ProductCard
            title={product.title}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
