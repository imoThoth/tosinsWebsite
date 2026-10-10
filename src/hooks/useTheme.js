import { useEffect, useState } from "react";

// Follows the device theme until the visitor picks one, then remembers it.
// The colours themselves live in index.css under :root and [data-theme].
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved === "dark" || saved === "light" ? saved : null;
    } catch {
      return null;
    }
  });

  const isDark = theme
    ? theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked: the switch still works for this visit */
    }
    setTheme(next);
  };

  return { isDark, toggle };
}