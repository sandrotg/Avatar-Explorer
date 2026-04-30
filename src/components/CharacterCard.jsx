import { useNavigate } from "react-router-dom";
import FavoriteButton from "./favoriteButton";

export default function CharacterCard({ character }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() =>
                navigate(`/characters/${character._id}`, {
                    state: character,
                })
            }
            className="bg-[var(--color-card)] rounded-lg shadow 
            overflow-hidden flex flex-col
            hover:shadow-lg hover:scale-[1.02] transition-all duration-300">

            {/* Imagen */}
            <div className="h-48 bg-gray-200">
                <img
                    src={character.photoUrl || "https://picsum.photos/300"}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://picsum.photos/300";
                    }}
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
                <FavoriteButton/>

            </div>
        </div>
    );
}