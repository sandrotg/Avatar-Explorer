export default function CharacterCard({ character }) {
  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow 
    overflow-hidden flex flex-col
    hover:shadow-lg hover:scale-[1.02] transition-all duration-300">

      {/* Imagen */}
      <div className="h-48 bg-gray-200">
        <img
          src={character.photoUrl || "https://via.placeholder.com/300"}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow">

        <h2 className="font-bold text-lg text-[var(--color-text)]">
          {character.name}
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          {character.affiliation || "Sin afiliación"}
        </p>

        {/* Botón */}
        <button
          className="mt-auto px-4 py-2 rounded 
          bg-[var(--color-secondary)] text-[var(--color-text)]
          hover:bg-[var(--color-accent)] hover:text-white
          transition-all duration-300"
        >
          ⭐ Añadir a favoritos
        </button>

      </div>
    </div>
  );
}