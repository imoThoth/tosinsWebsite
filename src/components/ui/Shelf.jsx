const spineColors = ["bg-pink", "bg-yellow", "bg-cyan", "bg-lime", "bg-paper"];

// One row of book spines with its label underneath.
// `offset` shifts the colour/height pattern so neighbouring shelves don't match.
export default function Shelf({ label, items, offset = 0 }) {
  return (
    <div>
      <div className="shelf flex flex-wrap items-end gap-1.5 px-3">
        {items.map((item, i) => {
          const n = offset + i;
          return (
            <span
              key={item}
              className={`spine ${spineColors[n % spineColors.length]}`}
              style={{ paddingBlock: `${14 + ((n * 7) % 22)}px` }}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="mt-4 font-file uppercase tracking-widest text-sm">{label}</div>
    </div>
  );
}