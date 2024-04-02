import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  const addFavorite = (id) => {
    setFavorites((prevFavorites) => ({ ...prevFavorites, [id]: true }));
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites };
      delete newFavorites[id];
      return newFavorites;
    });
  };

  const isFavorite = (id) => {
    return !!favorites[id];
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
