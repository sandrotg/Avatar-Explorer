import { useEffect, useState } from "react";
import { getFavorites } from "../utils/favorites";
import CharactersDash from "../components/CharactersDash";

export default function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    return (
    <section className="p-16 bg-[var(--color-bg)] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
        ⭐ Favoritos
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No tienes favoritos aún</p>
      ) : (
        <CharactersDash characters={favorites} />
      )}
    </section>
  );
}