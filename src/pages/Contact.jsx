import { useState } from "react";
import ConfirmModal from "../components/confirmationModal";
import contactImage from "../assets/images/contactImage.jpg";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <section className="min-h-screen bg-[var(--color-bg)] flex justify-center items-center p-10">

            <div className="bg-[var(--color-card)] rounded-xl shadow-lg w-full max-w-xl overflow-hidden">

                <div className="h-53 w-full">
                    <img
                        src={contactImage}
                        alt="contact"
                        className="h-full w-full object-cover"
                    />

                </div>
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                        Contáctanos
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            value={form.name}
                            onChange={handleChange}
                            className="p-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            value={form.email}
                            onChange={handleChange}
                            className="p-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Escribe tu mensaje..."
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            className="p-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                            required
                        />

                        <button
                            type="submit"
                            className="mt-4 py-3 rounded font-bold text-white 
                            bg-[var(--color-accent)] hover:opacity-90 transition"
                        >
                            Enviar mensaje
                        </button>

                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <ConfirmModal onClose={() => setShowModal(false)} />
            )}

        </section>
    );
}