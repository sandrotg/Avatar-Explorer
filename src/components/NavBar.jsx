import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <nav
      className="sticky top-0 z-10 flex justify-between items-center px-16 py-5 
      text-[var(--color-nav-text)] border-b border-[var(--color-border)]"
      style={{
        background: `linear-gradient(to right, var(--color-nav-start), var(--color-nav-end))`,
      }}
    >

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12"
        />
        <h1 className="font-bold text-2xl text-[var(--color-nav-active)]">
          Avatar Explorer
        </h1>
      </div>

      {/* Links */}
      <div className="flex gap-8">

        {[
          { to: "/", label: "Inicio" },
          { to: "/characters", label: "Personajes" },
          { to: "/favorites", label: "Favoritos" },
          { to: "/contact", label: "Contacto" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `pb-1 transition-all duration-200 ${
                isActive
                  ? "text-[var(--color-nav-active)] border-b-2 border-[var(--color-nav-accent)]"
                  : "text-[var(--color-nav-text)] hover:text-[var(--color-nav-active)] "
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

      </div>
    </nav>
  );
}