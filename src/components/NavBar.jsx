import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <nav
      className="sticky top-0 z-20 
      flex flex-col md:flex-row 
      md:justify-between md:items-center 
      px-6 md:px-16 py-4 
      text-[var(--color-nav-text)] border-b border-[var(--color-border)]"
      style={{
        background: `linear-gradient(to right, var(--color-nav-start), var(--color-nav-end))`,
      }}
    >

      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="font-bold text-lg md:text-2xl text-[var(--color-nav-active)]">
            Avatar Explorer
          </h1>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 mt-3 md:mt-0">

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
              `text-sm md:text-base pb-1 transition-all duration-200 ${
                isActive
                  ? "text-[var(--color-nav-active)] border-b-2 border-[var(--color-nav-accent)]"
                  : "text-[var(--color-nav-text)] hover:text-[var(--color-nav-active)]"
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