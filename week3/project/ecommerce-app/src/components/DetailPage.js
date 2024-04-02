import { useParams } from "react-router-dom";
import { euroSymbol } from "./ProductCard";
import useFetch from "./useFetch";

const DetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <div className="loading">Loading...Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  const product = data;

  return (
    <div className="detail-page">
      <h2 className="detail-page-title">{product.title}</h2>
      <img
        className="detail-page-img"
        src={product.image}
        alt={product.title}
      />
      <p className="detail-page-description">{product.description}</p>
      <p className="detail-page-price">
        Price: <sup className="euro-symbol">{euroSymbol}</sup>
        {product.price}
      </p>
    </div>
  );
};

export default DetailPage;
