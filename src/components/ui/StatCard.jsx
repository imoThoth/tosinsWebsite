import Reveal from "./Reveal";

// One big number with a label. `color` is the background + text classes.
export default function StatCard({ big, label, color }) {
  return (
    <Reveal className={`panel tilt p-4 ${color}`}>
      <div className="font-display text-6xl">{big}</div>
      <div className="font-extrabold">{label}</div>
    </Reveal>
  );
}