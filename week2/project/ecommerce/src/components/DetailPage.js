import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { euroSymbol } from "./ProductCard";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
