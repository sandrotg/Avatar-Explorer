import { createContext, useContext, useEffect, useState } from "react";
import { getFavorites, toggleFavorite as toggleFavUtil } from "../utils/favorites";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // usar tu función existente
  const toggleFavorite = (character) => {
    const updated = toggleFavUtil(character);
    setFavorites(updated); // sincroniza UI
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
};