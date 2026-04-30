import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import CharactersDash from "../components/CharactersDash";

export default function Characters() {
    const {datos, cargando, error} = useFetch("https://last-airbender-api.fly.dev/api/v1/characters?perPage=100&page=1");
    const [search, setSearch] = useState("");
    if(error) return <p>Error al cargar</p>
    if(cargando) return <p>Cargando...</p>
    console.log(datos)
    const filteredCharacters = datos.filter((char) => 
        char.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="p-16 flex flex-col items-center bg-[var(--color-bg)]">
            <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                Explorar <span className="text-[var(--color-accent)]">Personajes</span>
            </h1>
            <p className="text-lg text-[var(--color-text)]">
                Busca personajes, filtra por elemento, nación o rol, y guarda tus favoritos para acceder rápidamente a su información.
            </p>
            <SearchBar value={search} onChange={setSearch}/>
            <CharactersDash characters={filteredCharacters}/>
        </section>
    )
}