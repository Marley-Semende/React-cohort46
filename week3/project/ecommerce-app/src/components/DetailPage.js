import { useParams } from "react-router-dom";
import euroSymbol from "../util/util";
import useFetch from "./useFetch";

const DetailPage = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div className="loading">Loading...Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

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
