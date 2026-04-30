import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import FavoriteButton from "../components/favoriteButton";

export default function CharacterDetail() {
    const { id } = useParams();
    const location = useLocation();

    const characterFromState = location.state;

    const { datos, cargando, error } = useFetch(
        characterFromState ? null : `https://last-airbender-api.fly.dev/api/v1/characters?perPage=100`
    );

    let character = characterFromState;

    if (!character && datos) {
        character = datos.find((c) => c._id === id);
    }

    if (cargando && !character) return <p>Cargando...</p>;
    if (error && !character) return <p>Error al cargar</p>;
    if (!character) return <p>Personaje no encontrado</p>;

    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex justify-center items-center p-10">

            <div className="bg-[var(--color-card)] rounded-2xl shadow-xl 
  max-w-4xl w-full overflow-hidden hover:scale-[1.01] transition-all duration-300">

                <div className="flex flex-col md:flex-row">

                    {/* Imagen */}
                    <div className="md:w-1/2 h-96 bg-gray-200">
                        <img
                            src={character.photoUrl || "https://placehold.co/400x500"}
                            alt={character.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://placehold.co/400x500";
                            }}
                        />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col gap-4 md:w-1/2">

                        <h1 className="text-3xl font-bold text-[var(--color-text)]">
                            {character.name}
                        </h1>

                        <p className="text-sm text-gray-500">
                            {character.affiliation || "Sin afiliación"}
                        </p>

                        {/* Aliados */}
                        <div>
                            <h3 className="font-semibold text-[var(--color-accent)]">
                                Aliados
                            </h3>
                            <p className="text-gray-600">
                                {character.allies?.length
                                    ? character.allies.join(", ")
                                    : "Ninguno"}
                            </p>
                        </div>

                        {/* Enemigos */}
                        <div>
                            <h3 className="font-semibold text-[var(--color-accent)]">
                                Enemigos
                            </h3>
                            <p className="text-gray-600">
                                {character.enemies?.length
                                    ? character.enemies.join(", ")
                                    : "Ninguno"}
                            </p>
                        </div>
                        
                        <FavoriteButton/>
                        {/* Botón volver */}
                        <button
                            onClick={() => window.history.back()}
                            className=" px-4 py-2 rounded 
          bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] 
          transition text-[var(--color-text)]"
                        >
                            ← Volver
                        </button>

                    </div>

                </div>
            </div>

        </div>
    );
}