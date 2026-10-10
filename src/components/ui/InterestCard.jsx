import Reveal from "./Reveal";
import Slots from "./Slots";

// One "Off the clock" card. Pass the artwork as children.
// `color` = background + text classes, `slotClass` restyles the dashed slots,
// `halftone` adds the dotted comic texture behind the content.
export default function InterestCard({ title, tagline, taglineClass = "font-semibold", slots, color, slotClass, halftone = false, children }) {
  return (
    <Reveal as="article" className={`panel tilt p-6 relative overflow-hidden ${color}`}>
      {halftone && <div className="halftone absolute inset-0 opacity-20" aria-hidden="true" />}
      <div className="relative">
        {children}
        <h3 className="text-3xl font-extrabold mt-3">{title}</h3>
        <p className={`mt-1 ${taglineClass}`}>{tagline}</p>
        <Slots items={slots} className={slotClass} />
      </div>
    </Reveal>
  );
}