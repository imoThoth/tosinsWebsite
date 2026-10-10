import { useState } from "react";

// Copies `text` to the clipboard and confirms on the button itself.
export default function CopyButton({ text, label = "Copy", className = "" }) {
  const [current, setCurrent] = useState(label);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCurrent("Copied");
    } catch {
      setCurrent("Select the text to copy");
    }
    setTimeout(() => setCurrent(label), 1800);
  };

  return (
    <button type="button" onClick={copy} className={`panel tilt font-extrabold px-5 py-3 ${className}`}>
      {current}
    </button>
  );
}