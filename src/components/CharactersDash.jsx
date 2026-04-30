import CharacterCard from "./CharacterCard";

export default function CharactersDash({characters}){
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
            {characters.map((char) => (
                <CharacterCard key={char._id} character={char}/>
            ))}
        </section>
    )
}