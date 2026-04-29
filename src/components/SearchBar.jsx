
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md px-4 py-2 border 
      border-[var(--color-border)] rounded-lg 
      bg-white text-[var(--color-text)]
      focus:outline-none focus:ring-2 
      focus:ring-[var(--color-accent)]"
    />
  );
}