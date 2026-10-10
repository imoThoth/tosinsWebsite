import { useState } from "react";

// A black redaction bar that reveals its text on hover, focus, tap or Enter.
export default function Redact({ children }) {
  const [open, setOpen] = useState(false);
  const flip = () => setOpen((o) => !o);

  return (
    <span
      className={`redact ${open ? "open" : ""}`}
      tabIndex={0}
      onClick={flip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          flip();
        }
      }}
    >
      {children}
    </span>
  );
}