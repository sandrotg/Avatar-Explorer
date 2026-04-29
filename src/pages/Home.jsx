import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

export default function Home() {
    return (
        <div className="relative h-[80vh]">

            {/* Imagen */}
            <img
                src={hero}
                alt="Aang"
                className="absolute inset-0 w-full h-full object-[center_right]"
            />

            {/* Overlay (desvanecido) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-transparent to-transparent"
            />

            {/* Contenido */}
            <div className="relative z-10 p-16">
                <h1 className="text-5xl font-bold text-[var(--color-text)] max-w-lg">
                    Descubre el mundo de <span className="text-[var(--color-accent)]">Avatar</span>
                </h1>
                <p className="text-lg text-[var(--color-text)] mt-4 max-w-lg">
                    Explora datos acerca de los personajes de Avatar The Last Airbender. busca, filtra y guarda tus favoritos
                </p>
                <Link to="characters" className="inline-block mt-6 px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                Explorar Personajes
                </Link>
            </div>

        </div>
    )
}