import { useTheme } from "./hooks/useTheme";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import Profile from "./components/sections/Profile";
import Arcs from "./components/sections/Arcs";
import Shelves from "./components/sections/Shelves";
import OffTheClock from "./components/sections/OffTheClock";
import Credits from "./components/sections/Credits";
import Contact from "./components/sections/Contact";

// The page, top to bottom. Reorder or remove a section by moving its line.
export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="overflow-x-clip">
      <Hero isDark={isDark} onToggleTheme={toggle} />
      <Ticker />
      <main className="mx-auto max-w-6xl px-5 py-16 flex flex-col gap-24">
        <Profile />
        <Arcs />
        <Shelves />
        <OffTheClock />
        <Credits />
      </main>
      <Contact />
    </div>
  );
}