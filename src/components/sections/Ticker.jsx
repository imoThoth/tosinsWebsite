import { ticker } from "../../data";

// The list is rendered twice so the scroll loops without a visible jump.
export default function Ticker() {
  const run = (copy) =>
    ticker.map((item) => (
      <span key={`${copy}-${item}`}>
        <span className="px-5">{item}</span>
        <span className="text-pink">★</span>
      </span>
    ));

  return (
    <div className="bg-yellow text-line border-b-[3px] border-line overflow-hidden py-2 font-display text-2xl tracking-wide" aria-hidden="true">
      <div className="ticker">{run("a")}{run("b")}</div>
    </div>
  );
}