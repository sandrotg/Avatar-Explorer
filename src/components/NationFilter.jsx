export default function NationFilter({ selected, onChange }) {

  const nations = [
    "All",
    "Air Nomads",
    "Water Tribe",
    "Earth Kingdom",
    "Fire Nation"
  ];

  return (
    <div className="flex gap-3 mt-4 flex-wrap justify-center">
    
        <p className="text-[var(--color-text)]">Filtra por nación:</p>
      {nations.map((nation) => (
        <button
          key={nation}
          onClick={() => onChange(nation)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition

            ${selected === nation
              ? "bg-[var(--color-accent)] text-white"
              : "bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-secondary)]"
            }
          `}
        >
          {nation}
        </button>
      ))}

    </div>
  );
}