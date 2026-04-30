import { useEffect, useState } from "react";
import { getFavorites } from "../utils/favorites";
import CharactersDash from "../components/CharactersDash";
import { useFavorites } from "../context/favoritesContext";
import emptyFav from "../assets/images/emptyFav.jpg"

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section className="p-16 bg-[var(--color-bg)] min-h-screen">

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 text-center">

          <div className="max-w-xl w-full mb-6">

            {/* Imagen */}
            <img
              src={emptyFav}
              alt="Sin favoritos"
              className="w-full  h-auto object-cover rounded-xl shadow"
            />
          </div>

          {/* Texto */}
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2">
            No tienes favoritos aún
          </h2>

          <p className="text-gray-600">
            Explora personajes y añade tus favoritos para verlos aquí ⭐
          </p>



        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
            ⭐ Favoritos
          </h1>
          <CharactersDash characters={favorites} />
        </div>
      )}
    </section>
  );
}