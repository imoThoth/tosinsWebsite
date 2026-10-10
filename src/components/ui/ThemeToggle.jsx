// The light/dark button. State comes from the useTheme hook in App.jsx.
export default function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`panel tilt bg-paper text-line font-extrabold px-4 py-2 ${className}`}
    >
      {isDark ? "Lights on" : "Lights off"}
    </button>
  );
}