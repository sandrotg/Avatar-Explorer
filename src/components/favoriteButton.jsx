import toast from "react-hot-toast";
import { useFavorites } from "../context/favoritesContext";

export default function FavoriteButton({character}) {
    const { toggleFavorite, favorites } = useFavorites();

    const isFav = favorites.some(c => c._id === character._id);

    const handleClick = (e)=>{
        e.stopPropagation();
        toggleFavorite(character);
        toast(
            isFav
            ? `${character.name} eliminado de favoritos ❌`
            : `${character.name} añadido a favoritos ⭐`
        )
    }
    return (
        <button
            onClick={handleClick}
            className="mt-auto px-4 py-2 rounded 
          bg-[var(--color-secondary)] text-[var(--color-text)]
          hover:bg-[var(--color-accent)] hover:text-white
          transition-all duration-300"
        >
            {isFav ? "⭐ Quitar de favoritos" : "⭐ Añadir a favoritos"}
        </button>
    )
}