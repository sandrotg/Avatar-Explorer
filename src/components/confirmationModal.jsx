export default function ConfirmModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">

        <h2 className="text-xl font-bold mb-4">
          ¿Seguro que quieres enviar?
        </h2>

        <p className="text-gray-600 mb-6">
          Tu mensaje será enviado al equipo Avatar.
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            No quiero ayudar 😢
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[var(--color-accent)] text-white"
          >
            Sí, enviar mensaje
          </button>

        </div>

      </div>
    </div>
  );
}