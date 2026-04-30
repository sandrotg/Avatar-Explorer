import { Link } from "react-router-dom";
import notFound from "../assets/images/notFound2.jpg";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[var(--color-bg)] flex justify-center items-center text-center p-10 gap-10">

      {/* Imagen */}
      <div className="max-w-2xl w-full mb-6">
        <img
          src={notFound}
          alt="Página no encontrada"
          className="w-full h-auto object-cover rounded-xl shadow"
        />
      </div>
    
      <div className="flex flex-col items-center gap-4">
        {/* Texto */}
      <h1 className="text-6xl font-bold text-[var(--color-accent)]">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-[var(--color-text)] mt-2">
        Página no encontrada
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        Has salido de los cuatro elementos...
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded font-bold text-white 
        bg-[var(--color-accent)] hover:opacity-90 hover:scale-105 transform transition"
      >
        Volver al inicio
      </Link>

      </div>
    </section>
  );
}