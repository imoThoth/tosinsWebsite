// A row of dashed labels. Used for the interest picks.
export default function Slots({ items, className = "" }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`slot ${className}`}>{item}</span>
      ))}
    </div>
  );
}