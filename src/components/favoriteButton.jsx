export default function FavoriteButton() {
    return (
        <button
            className="mt-auto px-4 py-2 rounded 
          bg-[var(--color-secondary)] text-[var(--color-text)]
          hover:bg-[var(--color-accent)] hover:text-white
          transition-all duration-300"
        >
            ⭐ Añadir a favoritos
        </button>
    )
}