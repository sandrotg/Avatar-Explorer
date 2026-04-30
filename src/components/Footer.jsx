export default function Footer() {
    return (
        <footer className="text-[var(--color-nav-text)] border-t border-[var(--color-border)]"
            style={{
                background: `linear-gradient(to right, var(--color-nav-start), var(--color-nav-end))`,
            }}
        >

            <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm ">

                <p className="mb-2">
                    © {new Date().getFullYear()} Avatar Explorer
                </p>

                <p>
                    <a
                        href="https://www.flaticon.com/free-icons/spiral"
                        title="spiral icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition"
                    >
                        Spiral icons created by Puckung - Flaticon
                    </a>
                </p>

            </div>
        </footer>
    );
}