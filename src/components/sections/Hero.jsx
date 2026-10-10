import Equaliser from "../ui/Equaliser";
import ThemeToggle from "../ui/ThemeToggle";
import { hero } from "../../data";

export default function Hero({ isDark, onToggleTheme }) {
  return (
    <header className="relative overflow-hidden border-b-[3px] border-line">
      <div className="speed" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="flex flex-wrap items-center gap-4">
          <span className="stamp wobble text-pink text-sm">{hero.stamp}</span>
          <Equaliser />
          <span className="font-file text-sm text-note">{hero.nowPlaying}</span>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} className="ml-auto" />
        </div>

        {/* Each letter is its own span so they can slam in one after another. */}
        <h1 className="name mt-6 text-[clamp(4rem,17vw,11.5rem)]" aria-label={hero.name}>
          {[...hero.name.toUpperCase()].map((letter, i) =>
            letter === " " ? " " : (
              <span key={i} aria-hidden="true" style={{ animationDelay: `${i * 60}ms` }}>{letter}</span>
            )
          )}
        </h1>

        <p className="mt-6 max-w-2xl text-xl sm:text-2xl font-extrabold">
          {hero.role} <span className="text-note">/</span> {hero.focus}
        </p>
        <p className="mt-3 max-w-xl">{hero.blurb}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#arcs" className="panel tilt bg-pink text-line font-extrabold px-5 py-3">Read the arcs</a>
          <a href="#contact" className="panel tilt bg-cyan text-line font-extrabold px-5 py-3">Make contact</a>
        </div>
      </div>
    </header>
  );
}