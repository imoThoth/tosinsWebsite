// The big outlined comic heading at the top of each section.
// `color` is a Tailwind text class (text-pink, text-lime...); `note` is the small line under it.
export default function SectionHeading({ color, note, children }) {
  return (
    <>
      <h2 className={`sfx font-display text-6xl sm:text-7xl ${color}`}>{children}</h2>
      {note && <p className="font-file text-note mt-2">{note}</p>}
    </>
  );
}