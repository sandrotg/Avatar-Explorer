import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import CharactersDash from "../components/CharactersDash";
import NationFilter from "../components/NationFilter";
import noCharacters from "../assets/images/noCharacters.jpg";

export default function Characters() {
    const { datos, cargando, error } = useFetch("https://last-airbender-api.fly.dev/api/v1/characters?perPage=100");
    const [search, setSearch] = useState("");
    const [nation, setNation] = useState("All");
    if (error) return <p>Error al cargar</p>
    if (cargando) return <p>Cargando...</p>
    console.log(datos)
    const filteredCharacters = datos.filter((char) => {
        const matchesSearch = char.name?.toLowerCase().includes(search.toLowerCase());

        const matchesNation =
            nation === "All" ||
            char.affiliation?.toLowerCase().includes(nation.toLowerCase());

        return matchesSearch && matchesNation;
    }
    );

    return (
        <section className="p-16 flex flex-col items-center bg-[var(--color-bg)] min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                Explorar <span className="text-[var(--color-accent)]">Personajes</span>
            </h1>
            <p className="text-lg text-[var(--color-text)]">
                Busca personajes, filtra por elemento, nación o rol, y guarda tus favoritos para acceder rápidamente a su información.
            </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap justify-center">
                <div className="flex-1 min-w-[250px]">
                    <SearchBar value={search} onChange={setSearch} />
                </div>
                <NationFilter selected={nation} onChange={setNation} />
            </div>
            {filteredCharacters.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10 text-center">

                    <div className="max-w-xl w-full mb-6">
                        <img
                            src={noCharacters}
                            alt="Sin resultados"
                            className="w-full h-auto object-cover rounded-xl shadow"
                        />
                    </div>

                    <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                        No se encontraron personajes
                    </h2>

                    <p className="text-gray-600">
                        No hay resultados para "<span className="font-semibold">{search}</span>"
                    </p>

                </div>
            ) : (
                <CharactersDash characters={filteredCharacters} />
            )}
        </section>
    )
}