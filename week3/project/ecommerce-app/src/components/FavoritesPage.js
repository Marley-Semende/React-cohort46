import React, { useEffect, useState } from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import { ProductCard } from "./ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const productPromises = Object.keys(favorites).map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch product details");
          }
          return response.json();
        });

        const products = await Promise.all(productPromises);
        setFavoriteProducts(products);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorite-products">
        {favoriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
