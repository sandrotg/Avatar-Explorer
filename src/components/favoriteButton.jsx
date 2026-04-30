import { useState } from "react";
import { isFavorite, toggleFavorite } from "../utils/favorites"

export default function FavoriteButton({character}) {
    const [fav, setFav] = useState(isFavorite(character._id));

    const handleClick = (e)=>{
        e.stopPropagation();
        toggleFavorite(character);
        setFav(!fav);
    }
    return (
        <button
            onClick={handleClick}
            className="mt-auto px-4 py-2 rounded 
          bg-[var(--color-secondary)] text-[var(--color-text)]
          hover:bg-[var(--color-accent)] hover:text-white
          transition-all duration-300"
        >
            {fav ? "⭐ Quitar de favoritos" : "⭐ Añadir a favoritos"}
        </button>
    )
}