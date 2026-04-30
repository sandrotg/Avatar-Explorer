import { Link } from "react-router-dom";
import notFound from "../assets/images/notFound2.jpg";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-center items-center text-center p-10">

      {/* Imagen */}
      <div className="max-w-md w-full mb-6">
        <img
          src={notFound}
          alt="Página no encontrada"
          className="w-full h-auto object-cover rounded-xl shadow"
        />
      </div>

      {/* Texto */}
      <h1 className="text-6xl font-bold text-[var(--color-accent)]">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-[var(--color-text)] mt-2">
        Página no encontrada
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        La ruta que buscas no existe en este universo. Tal vez el Avatar aún no la ha descubierto.
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded font-bold text-white 
        bg-[var(--color-accent)] hover:opacity-90 transition"
      >
        Volver al inicio
      </Link>

    </section>
  );
}